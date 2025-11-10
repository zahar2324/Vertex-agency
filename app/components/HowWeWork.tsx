'use client';

import { MessageSquare, FileText, Palette, Code, Rocket, CheckCircle, LucideIcon } from 'lucide-react';

interface Step {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function HowWeWork() {
  const steps: Step[] = [
    {
      icon: MessageSquare,
      title: 'Домовленість',
      description: 'Обговорюємо ваші потреби, цілі та очікування. Визначаємо технічне завдання та терміни виконання.'
    },
    {
      icon: FileText,
      title: 'Планування',
      description: 'Розробляємо структуру сайту, плануємо розділи та функціонал. Затверджуємо концепцію з вами.'
    },
    {
      icon: Palette,
      title: 'Дизайн',
      description: 'Створюємо унікальний дизайн, який відображає стиль вашого бізнесу та приваблює цільову аудиторію.'
    },
    {
      icon: Code,
      title: 'Розробка',
      description: 'Втілюємо дизайн у життя, створюємо функціональний сайт з усіма необхідними можливостями.'
    },
    {
      icon: Rocket,
      title: 'Запуск',
      description: 'Тестуємо сайт, налаштовуємо всі функції та запускаємо його в роботу. Передаємо вам доступ до керування.'
    },
    {
      icon: CheckCircle,
      title: 'Підтримка',
      description: 'Надаємо безкоштовну підтримку 24/7, допомагаємо з оновленнями та покращеннями сайту.'
    }
  ];

  return (
    <section id="how-we-work" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-12 md:mb-16 text-center">
          Як ми працюємо
        </h2>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-6 md:p-8 hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-2 shadow-md hover:shadow-xl"
                >
                  <div className="flex items-start mb-4">
                    <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-xl font-bold">{index + 1}</span>
                    </div>
                    <div className="bg-blue-100 rounded-full p-3 flex-shrink-0">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

