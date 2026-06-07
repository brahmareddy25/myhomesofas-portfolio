import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Logo } from './Logo';

export default function Footer() {
  return (
    <footer className="bg-black pt-20 pb-10 border-t border-white/10 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-6 w-48 h-auto">
              <Logo className="w-full h-full" />
            </Link>
            <p className="text-white/60 font-light mb-6">
              Crafted Comfort. Designed For Life. Luxury sofas tailored to elevate every home.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-gold-accent hover:text-black transition-colors">
                Ig
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-gold-accent hover:text-black transition-colors">
                Fb
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-gold-accent hover:text-black transition-colors">
                Tw
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-serif text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Collection', 'Story', 'Services', 'Contact'].map((link) => (
                <li key={link}>
                  <Link href={`#${link.toLowerCase()}`} className="text-white/60 hover:text-gold-accent transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-serif text-lg mb-6">Services</h4>
            <ul className="space-y-4">
              {['Custom Manufacturing', 'L Shape Sofas', 'Luxury Recliners', 'Modular Sofas'].map((service) => (
                <li key={service}>
                  <span className="text-white/60 cursor-pointer hover:text-gold-accent transition-colors">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-serif text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 text-white/60 font-light">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gold-accent shrink-0 mt-0.5" />
                <span>9573064992</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-gold-accent shrink-0 mt-0.5" />
                <span>myhomesofas25@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-accent shrink-0 mt-0.5" />
                <span>Hyderabad & Kakinada, India</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} My Home Sofas. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/40">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
