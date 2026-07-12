import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import Magnetic from "@/components/motion/Magnetic";

const PLATFORM_URL = "https://platform.thefashionos.com/";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 pointer-events-none transition-all duration-300 ${
        isScrolled ? "glass py-3" : "py-4"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between pointer-events-auto">
          <Link to="/" className="flex items-center" data-cursor="magnetic">
            <img
              src={logo}
              alt="The Fashion OS"
              className={`object-contain transition-all duration-300 ${
                isScrolled ? "w-[140px] h-[72px]" : "w-[160px] h-[90px] md:w-[200px] md:h-[113px]"
              }`}
            />
          </Link>

          <Magnetic>
            <Button
              variant={isScrolled ? "gold" : "hero-outline"}
              size="sm"
              asChild
            >
              <a href={PLATFORM_URL} target="_blank" rel="noopener noreferrer">
                Get Started
              </a>
            </Button>
          </Magnetic>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
