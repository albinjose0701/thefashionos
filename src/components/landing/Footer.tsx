import { Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 bg-charcoal text-cream">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Logo & Tagline */}
            <div className="text-center md:text-left">
              <h3 className="font-display text-2xl font-medium mb-2">Lal10</h3>
              <p className="text-cream/60 font-body text-sm">Fashion Operating System</p>
            </div>

            {/* Contact */}
            <div className="text-center">
              <a 
                href="mailto:hello@lal10.com" 
                className="text-cream/80 hover:text-cream transition-colors font-body"
              >
                hello@lal10.com
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
                href="https://linkedin.com"
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
            <div className="flex gap-6">
              <a href="#" className="hover:text-cream/80 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-cream/80 transition-colors">
                Terms of Service
              </a>
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
