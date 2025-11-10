'use client';

interface PricingProps {
  onOpenModal: () => void;
}

interface Plan {
  title: string;
  time: string;
  price: string;
  features: string[];
}

export default function Pricing({ onOpenModal }: PricingProps) {
  const plans: Plan[] = [
    {
      title: 'Односторінковий сайт',
      time: 'Термін виконання - до 7 днів',
      price: '300 $',
      features: [
        'Підбір інформації',
        'Планування розділів',
        'Розробка дизайну',
        'Створення сайту',
        'Обслуговування (безкоштовно)'
      ]
    },
    {
      title: 'Корпоративний сайт до 15 сторінок',
      time: 'Термін виконання - до 14 днів',
      price: '400 $',
      features: [
        'Розробка структури',
        'Підбір додаткових блоків',
        'Розробка дизайну',
        'Створення сайту',
        'Обслуговування (безкоштовно)'
      ]
    },
    {
      title: 'Інтернет-магазин',
      time: 'Термін виконання - до 20 днів',
      price: '400 $',
      features: [
        'Розробка структури',
        'Розробка дизайну',
        'Створення каталогу',
        'Робота з товарами',
        'Обслуговування (безкоштовно)'
      ]
    }
  ];

  return (
    <section id="pricing" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-12 text-center">
          Вартість створення сайта
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-6 md:p-8 flex flex-col"
            >
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                {plan.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm md:text-base">
                {plan.time}
              </p>
              <div className="mb-6">
                <span className="text-4xl md:text-5xl font-bold text-blue-600">
                  {plan.price}
                </span>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-700 flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={onOpenModal}
                className="btn-primary btn-shine w-full text-white py-3 rounded-lg font-semibold shadow-lg relative overflow-hidden cursor-pointer"
              >
                ЗАМОВИТИ
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

