// EmailJS Configuration
// Для отримання ключів:
// 1. Зареєструйтеся на https://www.emailjs.com/
// 2. Створіть Email Service (Gmail, Outlook тощо)
// 3. Створіть Email Template
// 4. Скопіюйте ключі сюди

export interface EmailJSConfig {
  PUBLIC_KEY: string;
  SERVICE_ID: string;
  TEMPLATE_ID: string;
  TO_EMAIL: string;
}

export const EMAILJS_CONFIG: EmailJSConfig = {
  PUBLIC_KEY: 'JllCPgwFzn2O2WNBH', // Public Key з EmailJS Dashboard
  SERVICE_ID: 'service_ecvk6kq', // Service ID з EmailJS Dashboard
  TEMPLATE_ID: 'template_thqo3sr', // Template ID з EmailJS Dashboard
  TO_EMAIL: 'frontend2024zahar@gmail.com' // Ваш email для отримання листів
};

 