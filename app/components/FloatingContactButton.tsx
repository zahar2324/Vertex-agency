'use client';

import { useState, useEffect } from 'react';
import { Phone, X } from 'lucide-react';
import { FaTelegram, FaInstagram, FaViber, FaWhatsapp, IconType } from 'react-icons/fa';

interface SocialLink {
  name: string;
  href: string;
  color: string;
  icon: IconType;
}

export default function FloatingContactButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Hide button when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const socialLinks: SocialLink[] = [
    {
      name: 'Telegram',
      href: 'https://t.me/zaharFront',
      color: 'bg-blue-500 hover:bg-blue-600',
      icon: FaTelegram
    },
    {
      name: 'Viber',
      href: 'viber://chat?number=+380506782481',
      color: 'bg-purple-500 hover:bg-purple-600',
      icon: FaViber
    },
    {
      name: 'WhatsApp',
      href: 'https://wa.me/380506782481',
      color: 'bg-green-500 hover:bg-green-600',
      icon: FaWhatsapp
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/your_instagram',
      color: 'bg-pink-500 hover:bg-pink-600',
      icon: FaInstagram
    }
  ];

  return (
    <div
      className={`fixed bottom-6 right-6 z-40 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      {/* Social Media Icons */}
      <div
        className={`mb-4 space-y-3 transition-all duration-300 ${
          isOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        {socialLinks.map((social, index) => {
          const Icon = social.icon;
          return (
            <a
              key={social.name}
              href={social.href}
              target={social.name !== 'Viber' ? '_blank' : undefined}
              rel={social.name !== 'Viber' ? 'noopener noreferrer' : undefined}
              className={`${social.color} w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 ${
                isOpen ? 'scale-100' : 'scale-0'
              }`}
              style={{
                transitionDelay: isOpen ? `${index * 0.1}s` : '0s'
              }}
              onClick={() => setIsOpen(false)}
            >
              <Icon className="w-6 h-6" />
            </a>
          );
        })}
      </div>

      {/* Main Phone Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 bg-blue-600 text-white rounded-full shadow-2xl hover:shadow-3xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 relative ${
          isOpen ? 'rotate-45 bg-red-500 hover:bg-red-600' : 'hover:animate-none'
        } ${!isOpen ? 'animate-pulse' : ''}`}
        aria-label="Контакти"
      >
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-blue-600 animate-ping opacity-75"></span>
        )}
        {isOpen ? (
          <X className="w-7 h-7 relative z-10" />
        ) : (
          <Phone className="w-7 h-7 relative z-10" />
        )}
      </button>
    </div>
  );
}

