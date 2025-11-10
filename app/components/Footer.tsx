'use client';

import { Phone, Mail, MapPin } from 'lucide-react';
import { FaTelegram, FaInstagram, FaFacebook, FaViber, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Ми завжди на зв'язку</h3>
            <div className="space-y-3">
              <a href="tel:+380506782481" className="flex items-center hover:text-blue-400 transition">
                <Phone className="w-5 h-5 mr-3" />
                <span>+38 (050) 678-24-81</span>
              </a>
              <a href="mailto:vertex-web.com.ua@gmail.com" className="flex items-center hover:text-blue-400 transition">
                <Mail className="w-5 h-5 mr-3" />
                <span>vertex-web.com.ua@gmail.com</span>
              </a>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                <span>пр-т Льва Ландау 30, м. Харків, Україна</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Швидкі посилання</h3>
            <nav className="flex flex-col space-y-2">
              <a href="#home" className="hover:text-blue-400 transition">Головна</a>
              <a href="#services" className="hover:text-blue-400 transition">Послуги</a>
              <a href="#about" className="hover:text-blue-400 transition">Про нас</a>
              <a href="#reviews" className="hover:text-blue-400 transition">Відгуки</a>
            </nav>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Соціальні мережі</h3>
            <div className="flex space-x-4">
              <a 
                href="https://t.me/zaharFront" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-blue-500 transition text-white"
                aria-label="Telegram"
              >
                <FaTelegram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/your_instagram" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-pink-500 transition text-white"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.facebook.com/your_facebook" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition text-white"
                aria-label="Facebook"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
              <a 
                href="viber://chat?number=+380506782481" 
                className="bg-gray-800 p-3 rounded-full hover:bg-purple-500 transition text-white"
                aria-label="Viber"
              >
                <FaViber className="w-5 h-5" />
              </a>
              <a 
                href="https://wa.me/380506782481" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-green-500 transition text-white"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© Vertex 2019-2026. All Right Reserved. by Vertex.</p>
        </div>
      </div>
    </footer>
  );
}

