import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll'; // Import Link from react-scroll
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/80dafe9d-b856-43df-af4f-f65a5bd6e3c5.png" 
            alt="Wolf Agro Services Logo" 
            className="h-12 mr-2" 
          />
          <div className="flex items-center">
            <span className="text-wolf-brown text-2xl font-bold mr-1">WOLF</span>
            <span className="text-wolf-green font-bold">AGRO</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ScrollLink 
            to="hero" 
            smooth={true} 
            duration={500} 
            offset={-80} 
            className="text-wolf-brown hover:text-wolf-green font-medium cursor-pointer"
          >
            {t('home')}
          </ScrollLink>
          <ScrollLink 
            to="about" 
            smooth={true} 
            duration={500} 
            offset={-80} 
            className="text-wolf-brown hover:text-wolf-green font-medium cursor-pointer"
          >
            {t('about')}
          </ScrollLink>
          <ScrollLink 
            to="products" 
            smooth={true} 
            duration={500} 
            offset={-80} 
            className="text-wolf-brown hover:text-wolf-green font-medium cursor-pointer"
          >
            {t('products')}
          </ScrollLink>
          <ScrollLink 
            to="contact" 
            smooth={true} 
            duration={500} 
            offset={-80} 
            className="text-wolf-brown hover:text-wolf-green font-medium cursor-pointer"
          >
            {t('contact')}
          </ScrollLink>
        </nav>
        
        <div className="hidden md:flex items-center">
          <LanguageSwitcher />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center space-x-4">
          <LanguageSwitcher />
          <Button variant="ghost" size="icon" onClick={toggleMobileMenu} className="text-wolf-brown">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md py-4 animate-fade-in">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <ScrollLink 
              to="hero" 
              smooth={true} 
              duration={500} 
              offset={-80} 
              className="text-wolf-brown hover:text-wolf-green font-medium py-2 cursor-pointer"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('home')}
            </ScrollLink>
            <ScrollLink 
              to="about" 
              smooth={true} 
              duration={500} 
              offset={-80} 
              className="text-wolf-brown hover:text-wolf-green font-medium py-2 cursor-pointer"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('about')}
            </ScrollLink>
            <ScrollLink 
              to="products" 
              smooth={true} 
              duration={500} 
              offset={-80} 
              className="text-wolf-brown hover:text-wolf-green font-medium py-2 cursor-pointer"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('products')}
            </ScrollLink>
            <ScrollLink 
              to="contact" 
              smooth={true} 
              duration={500} 
              offset={-80} 
              className="text-wolf-brown hover:text-wolf-green font-medium py-2 cursor-pointer"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('contact')}
            </ScrollLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
