'use client';

import { Shield, CreditCard, Edit, User, FileText, Settings, LucideIcon } from 'lucide-react';

interface WhyChooseUsProps {
  onOpenModal: () => void;
}

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function WhyChooseUs({ onOpenModal }: WhyChooseUsProps) {
  const features: Feature[] = [
    {
      icon: Shield,
      title: 'Гарантія на сайт - 5 років',
      description: 'Будь-які зміни, питання, допомога, які потрібні для підтримки роботи сайта, ми завжди вам допомагаємо - безкоштовно'
    },
    {
      icon: CreditCard,
      title: 'Мінімальна передоплата - 4200 грн',
      description: 'Ви платите повну вартість, тільки після того, як ми повністю створимо сайт і усе налаштуємо, підключимо усі форми і необхідні функції. Ніяких скритих платежів'
    },
    {
      icon: Edit,
      title: 'Кількість правок не обмежена',
      description: 'Ми пропонуємо такі умови, де вам не треба продумувати все до дрібниць одразу. Ви можете вносити корективи і додавати інформацію будь-коли, хоч через рік, хоч через п\'ять'
    },
    {
      icon: User,
      title: 'Одна відповідальна людина за всі процеси',
      description: 'Засновник компанії (Владислав) завжди самостійно спілкується з вами, приймає усі задачі та надає звіти. Будує основні стратегії та ключові моменти у кожному проекті'
    },
    {
      icon: FileText,
      title: 'Не обмежуємся технічним завданням',
      description: 'Технічне завдання і договір, вони існують виключно для вашого спокою. В нашому розумінні кінцевого варіанту сайту не існує, це бізнес ресурс, який ми постійно покращуємо'
    },
    {
      icon: Settings,
      title: 'Зручне та просте керування сайтом',
      description: 'Ми покажемо як керувати сайтом, передамо відповідальній особі, або декільким. Підтримка повністю безкоштовна, 24/7, 365 днів, ми з вами'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Чому обирають сайти від Vertex?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Після короткої розмови з нами, ви зрозумієте, що кращої пропозиції на ринку не існує - 
            ми не просто створюємо сайти, ми працюємо разом, без обмежень
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 md:p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

