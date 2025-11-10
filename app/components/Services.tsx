'use client';

interface ServicesProps {
  onOpenModal: () => void;
}

interface Service {
  title: string;
  description: string;
  color: string;
}

export default function Services({ onOpenModal }: ServicesProps) {
  const services: Service[] = [
    {
      title: 'Односторінковий сайт',
      description: 'Презентація компанії або продукту / послуг в інтернеті',
      color: 'bg-blue-500'
    },
    {
      title: 'Сайт послуг',
      description: 'Інформація про компанію та послуги. Умови співпраці, етапи, ціни та приймання замовлень',
      color: 'bg-green-500'
    },
    {
      title: 'Інтернет-магазин',
      description: 'Повноцінний сайт з можливістю додавання великої кількості товарів. Ведення обліку та статистики замовлень',
      color: 'bg-purple-500'
    },
    {
      title: 'Онлайн каталог',
      description: 'Невелика кількість товарів з інформацією представлена в інтернеті з можливістю оформлювати замовлення',
      color: 'bg-orange-500'
    },
    {
      title: 'Особистий бренд / майстер',
      description: 'Презентація спеціаліста, персональний блог, візитна картка де розміщена головна інформація',
      color: 'bg-pink-500'
    },
    {
      title: 'Електронна візитка',
      description: 'Сучасне та зручне рішення щоб передати інформацію про себе, напрямки діяльності, контакти та інше',
      color: 'bg-indigo-500'
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Ми можемо створити
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-2 shadow-md hover:shadow-xl"
            >
              <div className={`${service.color} h-48 flex items-center justify-center`}>
                <span className="text-white text-2xl font-bold">Image Placeholder</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>
                <button 
                  onClick={onOpenModal}
                  className="text-blue-600 font-semibold hover:text-blue-700 transition cursor-pointer"
                >
                  ЗАМОВИТИ →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

