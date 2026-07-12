import { Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-16 bg-charcoal text-cream">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Logo & Tagline */}
            <div className="text-center md:text-left">
              <Link to="/" className="font-display text-2xl font-medium mb-2 inline-block hover:text-cream/90 transition-colors">
                The Fashion OS
              </Link>
              <p className="text-cream/60 font-body text-sm mt-1">Fashion Operating System</p>
            </div>

            {/* Contact */}
            <div className="text-center">
              <a
                href="mailto:info@thefashionos.com"
                className="text-cream/80 hover:text-cream transition-colors font-body"
              >
                info@thefashionos.com
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-cream/10 hover:bg-cream/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/thefashionos/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-cream/10 hover:bg-cream/20 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-cream/10 hover:bg-cream/20 flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="my-10 border-t border-cream/10" />

          {/* Bottom Row */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-cream/50 font-body">
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/about" className="hover:text-cream/80 transition-colors">
                About Us
              </Link>
              <Link to="/privacy-policy" className="hover:text-cream/80 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="hover:text-cream/80 transition-colors">
                Terms of Service
              </Link>
            </div>

            <p>
              Built with ❤️ for designers who dream in collections
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
