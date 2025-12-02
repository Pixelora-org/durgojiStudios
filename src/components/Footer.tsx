import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Footer() {
  return (
    <footer className="bg-[#0D0D0D] border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <div className="mb-3" style={{ maxWidth: '180px', maxHeight: '60px' }}>
                <ImageWithFallback
                  src="/images/logo2.jpg"
                  alt="Durgoji Studios Logo"
                  className="w-full h-full object-contain"
                  loading="lazy"
                  fetchPriority="low"
                  style={{ maxWidth: '100%', maxHeight: '60px', width: 'auto', height: 'auto' }}
                />
              </div>
              <span className="text-xl font-semibold text-white block">Durgoji Studios</span>
            </div>
            <p className="text-white/60 mb-4">
              We Frame Life's Precious Moments. Blending art, technology, and emotion to craft visuals that speak louder than words.
            </p>
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
              <li className="text-white/60">Events & Weddings</li>
              <li className="text-white/60">Product Photography</li>
              <li className="text-white/60">Maternity & Newborn</li>
              <li className="text-white/60">Video Editing</li>
              <li className="text-white/60">Web Design</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-white/60">
                <Phone className="w-5 h-5 text-[#F2C94C] flex-shrink-0" />
                <span>+61 469770248</span>
              </li>
              <li className="flex items-center gap-3 text-white/60">
                <Mail className="w-5 h-5 text-[#F2C94C] flex-shrink-0" />
                <span>durgojiraosofficial@gmail.com</span>
              </li>
              <li className="flex items-start gap-3 text-white/60">
                <MapPin className="w-5 h-5 text-[#F2C94C] mt-0.5 flex-shrink-0" />
                <span>www.durgojistudios.com.au</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-white/60">
          <p>&copy; 2025 Durgoji Studios. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
