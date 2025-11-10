'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: 'Скільки часу займає створення сайту?',
      answer: 'Термін створення сайту залежить від складності проекту. Односторінковий сайт - до 7 днів, корпоративний сайт до 15 сторінок - до 14 днів, інтернет-магазин - до 20 днів. Ми завжди дотримуємося узгоджених термінів.'
    },
    {
      question: 'Яка вартість створення сайту?',
      answer: 'Вартість залежить від типу та складності сайту. Односторінковий сайт - від 300$, корпоративний сайт - від 400$, інтернет-магазин - від 400$. Точну вартість ми розраховуємо індивідуально після обговорення ваших потреб.'
    },
    {
      question: 'Чи потрібна передоплата?',
      answer: 'Так, мінімальна передоплата становить 4200 грн. Решту суми ви платите після повного завершення роботи та налаштування всіх функцій сайту. Ніяких скритих платежів.'
    },
    {
      question: 'Чи можна вносити зміни після створення сайту?',
      answer: 'Так, кількість правок не обмежена. Ви можете вносити корективи та додавати інформацію будь-коли, навіть через рік або п\'ять років. Ми завжди готові допомогти з оновленнями.'
    },
    {
      question: 'Яка гарантія на сайт?',
      answer: 'Ми надаємо гарантію на сайт - 5 років. Будь-які зміни, питання, допомога, які потрібні для підтримки роботи сайту, ми завжди вам допомагаємо безкоштовно.'
    },
    {
      question: 'Чи можу я сам керувати сайтом?',
      answer: 'Так, звичайно! Ми покажемо вам як керувати сайтом, передамо доступ відповідальній особі або декільким. Система керування проста та зручна. Підтримка повністю безкоштовна, 24/7, 365 днів.'
    },
    {
      question: 'Чи потрібно технічне завдання?',
      answer: 'Технічне завдання існує виключно для вашого спокою. В нашому розумінні кінцевого варіанту сайту не існує - це бізнес ресурс, який ми постійно покращуємо разом з вами.'
    },
    {
      question: 'Які способи оплати ви приймаєте?',
      answer: 'Ми приймаємо оплату банківським переказом, через картку або інші зручні для вас способи. Всі деталі оплати обговорюються індивідуально.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-12 text-center">
          Часті питання
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition"
                >
                  <span className="text-lg md:text-xl font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 text-gray-600 flex-shrink-0 transition-transform ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-5 pt-2">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

