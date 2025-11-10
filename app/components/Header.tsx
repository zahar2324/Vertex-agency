'use client';

import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { FaTelegram, FaInstagram, FaFacebook } from 'react-icons/fa';
import Image from 'next/image';

interface HeaderProps {
  onOpenModal: () => void;
}

export default function Header({ onOpenModal }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center ">
            <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center">
              <Image 
                src="/Vertex_logo.png" 
                alt="Vertex - Діджитал Агенція" 
                width={180}
                height={100}
                className="h-16 md:h-20 w-auto object-contain"
                priority
              />
            </a>
            <span className="text-xs text-gray-500 hidden sm:block whitespace-nowrap mr-10">ДІДЖИТАЛ АГЕНЦІЯ</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, '#home')}
              className="text-gray-700 hover:text-blue-600 transition font-medium"
            >
              ГОЛОВНА
            </a>
            <a 
              href="#services" 
              onClick={(e) => handleNavClick(e, '#services')}
              className="text-gray-700 hover:text-blue-600 transition font-medium flex items-center"
            >
              ПОСЛУГИ
            </a>
            <a 
              href="#about" 
              onClick={(e) => handleNavClick(e, '#about')}
              className="text-gray-700 hover:text-blue-600 transition font-medium"
            >
              ПРО НАС
            </a>
            <a 
              href="#reviews" 
              onClick={(e) => handleNavClick(e, '#reviews')}
              className="text-gray-700 hover:text-blue-600 transition font-medium"
            >
              ВІДГУКИ
            </a>
            <a 
              href="#contacts" 
              onClick={(e) => handleNavClick(e, '#contacts')}
              className="text-gray-700 hover:text-blue-600 transition font-medium"
            >
              КОНТАКТИ
            </a>
          </nav>

          {/* Phone, Social & Mobile Menu Button */}
          <div className="flex items-center space-x-3 lg:space-x-4">
            <a 
              href="tel:+380933978442" 
              className="hidden md:flex items-center text-blue-600 font-semibold hover:text-blue-700 underline"
            >
              <Phone className="w-4 h-4 mr-1" />
              <span>093-397-84-42</span>
            </a>
            <div className="hidden lg:flex items-center space-x-2">
              <a 
                href="https://t.me/zaharFront" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-blue-500 hover:text-white transition"
                aria-label="Telegram"
              >
                <FaTelegram className="w-4 h-4 text-gray-700 hover:text-white" />
              </a>
              <a 
                href="https://www.instagram.com/your_instagram" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-pink-500 hover:text-white transition"
                aria-label="Instagram"
              >
                <FaInstagram className="w-4 h-4 text-gray-700 hover:text-white" />
              </a>
              <a 
                href="https://www.facebook.com/your_facebook" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-blue-600 hover:text-white transition"
                aria-label="Facebook"
              >
                <FaFacebook className="w-4 h-4 text-gray-700 hover:text-white" />
              </a>
            </div>
            <button 
              onClick={onOpenModal}
              className="btn-primary btn-shine hidden md:block text-white px-4 py-2 rounded-lg font-semibold shadow-md relative overflow-hidden cursor-pointer"
            >
              <span className="hidden lg:inline">КОНСУЛЬТАЦІЯ</span>
              <span className="lg:hidden">КОНСУЛЬТАЦІЯ</span>
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700 hover:text-blue-600"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#home" 
                onClick={(e) => handleNavClick(e, '#home')}
                className="text-gray-700 hover:text-blue-600 transition font-medium"
              >
                ГОЛОВНА
              </a>
              <a 
                href="#services" 
                onClick={(e) => handleNavClick(e, '#services')}
                className="text-gray-700 hover:text-blue-600 transition font-medium"
              >
                ПОСЛУГИ
              </a>
              <a 
                href="#about" 
                onClick={(e) => handleNavClick(e, '#about')}
                className="text-gray-700 hover:text-blue-600 transition font-medium"
              >
                ПРО НАС
              </a>
              <a 
                href="#reviews" 
                onClick={(e) => handleNavClick(e, '#reviews')}
                className="text-gray-700 hover:text-blue-600 transition font-medium"
              >
                ВІДГУКИ
              </a>
              <a 
                href="#contacts" 
                onClick={(e) => handleNavClick(e, '#contacts')}
                className="text-gray-700 hover:text-blue-600 transition font-medium"
              >
                КОНТАКТИ
              </a>
              <a href="tel:+380506782481" className="text-blue-600 font-semibold flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                050-678-24-81
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

