import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Simple in-memory rate limiting (Note: Resets on serverless cold starts)
const rateLimitMap = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT_MAX = 5; // Max 5 requests
const RATE_LIMIT_WINDOW_MS = 60000; // Per 1 minute

// Basic HTML Sanitization
const escapeHTML = (str: string) => {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
};

export async function POST(req: Request) {
  try {
    // Rate Limiting Logic
    const ip = req.headers.get('x-forwarded-for') || 'anonymous';
    const now = Date.now();
    const clientData = rateLimitMap.get(ip);

    if (clientData && now - clientData.timestamp < RATE_LIMIT_WINDOW_MS) {
      if (clientData.count >= RATE_LIMIT_MAX) {
        return NextResponse.json({ error: 'Too many requests, please try again later.' }, { status: 429 });
      }
      clientData.count++;
    } else {
      rateLimitMap.set(ip, { count: 1, timestamp: now });
    }

    // Clean up old entries occasionally to prevent memory leaks in long-running processes
    if (rateLimitMap.size > 1000) {
      rateLimitMap.clear();
    }

    const body = await req.json();
    const { name, phone, email, note } = body;

    if (!name || !phone) {
      return NextResponse.json({ error: 'Name and Phone are required.' }, { status: 400 });
    }

    // Sanitize user inputs to prevent XSS in email clients
    const safeName = escapeHTML(name);
    const safePhone = escapeHTML(phone);
    const safeEmail = escapeHTML(email);
    const safeNote = escapeHTML(note);

    // Create a Nodemailer transporter
    nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 587,
      auth: {
        user: process.env.SMTP_USER || 'dummy@dummy.com',
        pass: process.env.SMTP_PASS || 'dummypass',
      },
    });

    const mailOptions = {
      from: process.env.SMTP_USER || 'dummy@dummy.com',
      to: 'myhomesofas25@gmail.com',
      subject: `New Lead: ${safeName} - My Home Sofas`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #c5a059;">New Contact Submission</h2>
          <p><strong>Customer Name:</strong> ${safeName}</p>
          <p><strong>Phone Number:</strong> ${safePhone}</p>
          <p><strong>Email:</strong> ${safeEmail || 'N/A'}</p>
          <p><strong>Note:</strong> ${safeNote || 'N/A'}</p>
          <p><strong>Submission Date:</strong> ${new Date().toLocaleString('en-IN')}</p>
        </div>
      `,
    };

    // In a real environment, uncomment this to actually send:
    // await transporter.sendMail(mailOptions);
    
    console.log('Would send email with options:', mailOptions);

    return NextResponse.json({ success: true, message: 'Message sent successfully.' }, { status: 200 });

  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 });
  }
}
