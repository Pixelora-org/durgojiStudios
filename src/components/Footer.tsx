import { Link } from "react-router-dom";
import { Camera, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0D0D0D] border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#F2C94C] flex items-center justify-center">
                <Camera className="w-6 h-6 text-[#0D0D0D]" />
              </div>
              <span className="text-xl font-semibold text-white">LuxeStudio</span>
            </div>
            <p className="text-white/60 mb-4">
              Capturing moments that last forever with premium photography services.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#F2C94C] flex items-center justify-center transition-colors group"
              >
                <Instagram className="w-5 h-5 text-white group-hover:text-[#0D0D0D]" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#F2C94C] flex items-center justify-center transition-colors group"
              >
                <Facebook className="w-5 h-5 text-white group-hover:text-[#0D0D0D]" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#F2C94C] flex items-center justify-center transition-colors group"
              >
                <Twitter className="w-5 h-5 text-white group-hover:text-[#0D0D0D]" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-white/60 hover:text-[#F2C94C] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-white/60 hover:text-[#F2C94C] transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/60 hover:text-[#F2C94C] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/60 hover:text-[#F2C94C] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/60 hover:text-[#F2C94C] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white mb-4">Services</h3>
            <ul className="space-y-3">
              <li className="text-white/60">Wedding Photography</li>
              <li className="text-white/60">Portrait Sessions</li>
              <li className="text-white/60">Fashion Photography</li>
              <li className="text-white/60">Family Photography</li>
              <li className="text-white/60">Corporate Events</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-white/60">
                <MapPin className="w-5 h-5 text-[#F2C94C] mt-0.5 flex-shrink-0" />
                <span>123 Photography Lane, New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-3 text-white/60">
                <Phone className="w-5 h-5 text-[#F2C94C] flex-shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-white/60">
                <Mail className="w-5 h-5 text-[#F2C94C] flex-shrink-0" />
                <span>info@luxestudio.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-white/60">
          <p>&copy; 2025 LuxeStudio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
