import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
  ];

  const scrollToSection = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-background/80 backdrop-blur-lg border-b border-white/10 shadow-lg'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('#home')}>
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-background shadow-lg shadow-primary/20">
            <Rocket className="w-6 h-6" />
          </div>
          <span className="font-heading font-bold text-xl tracking-tight hidden sm:block">
            Ecommerce Innovators
          </span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/5 backdrop-blur-md rounded-full px-4 py-2 border border-white/10">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-white hover:bg-white/10 rounded-full transition-colors"
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Button 
            className="hidden md:flex bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-lg shadow-primary/20 transition-all hover:scale-105"
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

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-white/10 shadow-2xl py-6 lg:hidden"
          >
            <div className="container mx-auto px-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left text-lg font-medium text-foreground/80 hover:text-white py-2 border-b border-white/5"
                >
                  {link.name}
                </button>
              ))}
              <Button 
                className="mt-4 bg-primary text-primary-foreground font-semibold w-full"
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
