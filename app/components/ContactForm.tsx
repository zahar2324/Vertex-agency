'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';
import { FaTelegram, FaInstagram, FaFacebook, FaViber, FaWhatsapp } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';
import Toast from './Toast';

interface ContactFormProps {
  onClose?: () => void;
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

export default function ContactForm({ onClose }: ContactFormProps) {
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
      setTimeout(() => {
        if (onClose) onClose();
      }, 2000);
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
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
        Ваше замовлення
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="modal-name" className="block text-gray-700 font-semibold mb-2">
            Ім'я
          </label>
          <input
            type="text"
            id="modal-name"
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
          <label htmlFor="modal-phone" className="block text-gray-700 font-semibold mb-2">
            Телефон
          </label>
          <input
            type="tel"
            id="modal-phone"
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
          <label htmlFor="modal-message" className="block text-gray-700 font-semibold mb-2">
            Повідомлення
          </label>
          <textarea
            id="modal-message"
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
      
      <div className="mt-2 pt-6 border-t border-gray-200">
        <p className="text-sm text-gray-600 mb-3 text-center font-semibold animate-bounce">
          <span className="inline-block animate-pulse">💬</span> Або зв'яжіться з нами напряму: <span className="inline-block animate-pulse">💬</span>
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="https://t.me/zaharFront"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition text-sm"
          >
            <FaTelegram className="w-4 h-4 mr-2" />
            Telegram
          </a>
          <a
            href="viber://chat?number=+380506782481"
            className="flex items-center px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition text-sm"
          >
            <FaViber className="w-4 h-4 mr-2" />
            Viber
          </a>
          <a
            href="https://wa.me/380506782481"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition text-sm"
          >
            <FaWhatsapp className="w-4 h-4 mr-2" />
            WhatsApp
          </a>
          <a
            href="https://www.instagram.com/your_instagram"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition text-sm"
          >
            <FaInstagram className="w-4 h-4 mr-2" />
            Instagram
          </a>
          <a
            href="https://www.facebook.com/your_facebook"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm"
          >
            <FaFacebook className="w-4 h-4 mr-2" />
            Facebook
          </a>
        </div>
      </div>
      
      <p className="text-sm text-gray-500 mt-4 text-center">
        Ваші дані захищені політикою конфіденційності компанії Vertex.
      </p>
      
      <Toast
        isOpen={toast.isOpen}
        onClose={() => setToast({ ...toast, isOpen: false })}
        type={toast.type}
        message={toast.message}
      />
    </div>
  );
}

