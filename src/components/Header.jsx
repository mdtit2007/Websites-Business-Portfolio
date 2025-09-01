import { Sparkle, X, Menu } from "lucide-react";
import React, { useEffect, useState } from "react";

const menu = ["home", "about", "services", "portfolios", "team", "contact"];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <header
      className={
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 " +
        (scrolled
          ? "bg-white/95 backdrop-blur-lg shadow-xl border-b border-purple-100"
          : "bg-transparent")
      }
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center gap-2 space-x-2">
            <div className="relative">
              <Sparkle
                className={
                  "w-8 h-8 transition-all duration-300 " +
                  (scrolled ? "text-purple-600" : "text-purple-400")
                }
              />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full animate-pulse"></div>
            </div>
            <h1 className="text-2xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent transition-all duration-300">
              MDTIT07
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {menu.map((item) => {
              return (
                <button
                  key={item}
                  onClick={() => handleScroll(item)}
                  className={
                    "capitalize font-medium transition-all duration-300 hover:scale-105 relative group " +
                    (scrolled ? "text-gray-700 hover:text-purple-600" : "text-white hover:text-purple-500")
                  }
                >
                  {item}
                  {/* Hover Effect */}
                  <span
                    className="absolute -bottom-1 left-0 w-0 h-0.5 
                      bg-gradient-to-r from-purple-600 to-pink-500 
                      transition-all duration-300 group-hover:w-full"
                  ></span>
                </button>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg transition-all duration-300"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div
            className="md:hidden bg-white/95 backdrop-blur-lg shadow-2xl mt-2
              py-6 border-purple-100"
          >
            {menu.map((item) => {
              return (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-6 py-3 text-gray-700
                    hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 
                    hover:text-purple-600 capitalize font-medium transition-all duration-300"
                   
                >
                  {item}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
