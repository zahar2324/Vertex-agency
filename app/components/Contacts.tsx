'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { FaTelegram, FaInstagram, FaFacebook, FaViber, FaWhatsapp } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';
import Toast from './Toast';

interface ContactsProps {
  onOpenModal: () => void;
}

interface FormData {
  name: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  message?: string;
}

export default function Contacts({ onOpenModal }: ContactsProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{ isOpen: boolean; type: 'success' | 'error'; message: string }>({
    isOpen: false,
    type: 'success',
    message: ''
  });

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Введіть ваше ім\'я';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Введіть номер телефону';
    } else if (!/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
      newErrors.phone = 'Невірний формат телефону';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Введіть повідомлення';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Повідомлення має містити мінімум 10 символів';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Перевірка чи налаштовані ключі EmailJS
      if (!EMAILJS_CONFIG.PUBLIC_KEY || 
          !EMAILJS_CONFIG.SERVICE_ID || 
          !EMAILJS_CONFIG.TEMPLATE_ID ||
          EMAILJS_CONFIG.PUBLIC_KEY === 'YOUR_PUBLIC_KEY' ||
          EMAILJS_CONFIG.SERVICE_ID === 'YOUR_SERVICE_ID' ||
          EMAILJS_CONFIG.TEMPLATE_ID === 'YOUR_TEMPLATE_ID') {
        console.error('EmailJS не налаштовано! Будь ласка, додайте ключі в app/config/emailjs.ts');
        setToast({
          isOpen: true,
          type: 'error',
          message: 'EmailJS не налаштовано. Перевірте конфігурацію.'
        });
        setIsSubmitting(false);
        return;
      }

      // Ініціалізація EmailJS
      emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

      // Параметри для шаблону
      const templateParams = {
        from_name: formData.name,
        from_phone: formData.phone,
        message: formData.message,
        to_email: EMAILJS_CONFIG.TO_EMAIL,
        reply_to: formData.phone
      };

      // Відправка email
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams
      );

      // Успішна відправка
      setFormData({ name: '', phone: '', message: '' });
      setErrors({});
      setToast({
        isOpen: true,
        type: 'success',
        message: 'Дякуємо за заявку! Ми зв\'яжемося з вами найближчим часом.'
      });
    } catch (error) {
      console.error('Помилка відправки email:', error);
      setToast({
        isOpen: true,
        type: 'error',
        message: 'Помилка відправки форми. Спробуйте пізніше або зв\'яжіться з нами напряму.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    if (errors[name as keyof FormErrors]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  return (
    <section id="contacts" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-12 text-center">
          Зв'яжіться з нами
        </h2>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Надішліть заявку</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="contact-name" className="block text-gray-700 font-semibold mb-2">
                  Ім'я
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 transition ${
                    errors.name ? 'border-red-500' : 'border-gray-300 focus:border-blue-500'
                  }`}
                  placeholder="Введіть ваше ім'я"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="contact-phone" className="block text-gray-700 font-semibold mb-2">
                  Телефон
                </label>
                <input
                  type="tel"
                  id="contact-phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 transition ${
                    errors.phone ? 'border-red-500' : 'border-gray-300 focus:border-blue-500'
                  }`}
                  placeholder="+38 (0XX) XXX-XX-XX"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-gray-700 font-semibold mb-2">
                  Повідомлення
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 transition resize-none ${
                    errors.message ? 'border-red-500' : 'border-gray-300 focus:border-blue-500'
                  }`}
                  placeholder="Опишіть ваш проект або залиште питання..."
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-lg font-semibold text-lg shadow-lg flex items-center justify-center ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'btn-primary btn-shine text-white relative overflow-hidden cursor-pointer'
                }`}
              >
                {isSubmitting ? (
                  'Відправка...'
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    ВІДПРАВИТИ
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Контактна інформація</h3>
              <div className="space-y-4">
                <a href="tel:+380506782481" className="flex items-center text-gray-700 hover:text-blue-600 transition">
                  <Phone className="w-5 h-5 mr-3 text-blue-600" />
                  <span>+38 (093) 397-84-42</span>
                </a>
                <a href="mailto:vertex-web.com.ua@gmail.com" className="flex items-center text-gray-700 hover:text-blue-600 transition">
                  <Mail className="w-5 h-5 mr-3 text-blue-600" />
                  <span>vertex-web.com.ua@gmail.com</span>
                </a>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-blue-600" />
                  <span className="text-gray-700">пр-т Льва Ландау 30, м. Харків, Україна</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Або напишіть нам в соцмережах</h3>
              <p className="text-gray-600 mb-4">
                Зв'яжіться з нами через зручний для вас месенджер:
              </p>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://t.me/zaharFront"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition shadow-md hover:shadow-lg"
                >
                  <FaTelegram className="w-5 h-5 mr-2" />
                  Telegram
                </a>
                <a
                  href="viber://chat?number=+380506782481"
                  className="flex items-center justify-center px-4 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition shadow-md hover:shadow-lg"
                >
                  <FaViber className="w-5 h-5 mr-2" />
                  Viber
                </a>
                <a
                  href="https://wa.me/380506782481"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-4 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition shadow-md hover:shadow-lg"
                >
                  <FaWhatsapp className="w-5 h-5 mr-2" />
                  WhatsApp
                </a>
                <a
                  href="https://www.instagram.com/your_instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-4 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition shadow-md hover:shadow-lg"
                >
                  <FaInstagram className="w-5 h-5 mr-2" />
                  Instagram
                </a>
                <a
                  href="https://www.facebook.com/your_facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-md hover:shadow-lg col-span-2"
                >
                  <FaFacebook className="w-5 h-5 mr-2" />
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Toast
        isOpen={toast.isOpen}
        onClose={() => setToast({ ...toast, isOpen: false })}
        type={toast.type}
        message={toast.message}
      />
    </section>
  );
}

