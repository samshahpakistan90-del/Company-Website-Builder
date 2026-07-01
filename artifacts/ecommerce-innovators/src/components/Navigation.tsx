import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LOGO_URL = "https://i.postimg.cc/q7NxGncY/Whats-App-Image-2026-06-29-at-00-46-24.jpg";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Team', href: '#team' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-background/85 backdrop-blur-xl border-b border-white/10 shadow-xl shadow-black/20'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('#home')}>
          <div className="w-11 h-11 rounded-xl overflow-hidden border border-white/10 shadow-lg shadow-primary/20 shrink-0">
            <img
              src={LOGO_URL}
              alt="Ecommerce Innovators Logo"
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.currentTarget;
                target.style.display = 'none';
                const fallback = target.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = 'flex';
              }}
            />
            {/* Fallback */}
            <div className="w-full h-full bg-gradient-to-br from-primary to-primary/70 hidden items-center justify-center text-background font-bold text-lg">
              EI
            </div>
          </div>
          <span className="font-heading font-bold text-lg tracking-tight hidden sm:block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-primary/80">Ecommerce</span>{' '}
            <span className="text-white">Innovators</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-0.5 bg-white/5 backdrop-blur-md rounded-full px-3 py-2 border border-white/10">
          {navLinks.slice(0, 7).map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-white hover:bg-white/10 rounded-full transition-colors"
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Button
            className="hidden md:flex bg-gradient-to-r from-primary to-yellow-400 text-background hover:opacity-90 font-bold shadow-lg shadow-primary/30 transition-all hover:scale-105"
            onClick={() => scrollToSection('#contact')}
          >
            Book Free Consultation
          </Button>

          <button
            className="lg:hidden text-foreground p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-white/10 shadow-2xl py-6 lg:hidden"
          >
            <div className="container mx-auto px-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left text-lg font-medium text-foreground/80 hover:text-white py-3 border-b border-white/5 transition-colors"
                >
                  {link.name}
                </button>
              ))}
              <Button
                className="mt-4 bg-gradient-to-r from-primary to-yellow-400 text-background font-bold w-full"
                onClick={() => scrollToSection('#contact')}
              >
                Book Free Consultation
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
