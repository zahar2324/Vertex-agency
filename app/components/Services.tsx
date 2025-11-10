'use client';

import Image from 'next/image';

interface ServicesProps {
  onOpenModal: () => void;
}

interface Service {
  title: string;
  description: string;
  image: string;
}

export default function Services({ onOpenModal }: ServicesProps) {
  const services: Service[] = [
    {
      title: 'Односторінковий сайт',
      description: 'Презентація компанії або продукту / послуг в інтернеті',
      image: '/project1.jpg'
    },
    {
      title: 'Сайт послуг',
      description: 'Інформація про компанію та послуги. Умови співпраці, етапи, ціни та приймання замовлень',
      image: '/project2.jpg'
    },
    {
      title: 'Інтернет-магазин',
      description: 'Повноцінний сайт з можливістю додавання великої кількості товарів. Ведення обліку та статистики замовлень',
      image: '/project3.jpg'
    },
    {
      title: 'Онлайн каталог',
      description: 'Невелика кількість товарів з інформацією представлена в інтернеті з можливістю оформлювати замовлення',
      image: '/project4.jpg'
    },
    {
      title: 'Особистий бренд / майстер',
      description: 'Презентація спеціаліста, персональний блог, візитна картка де розміщена головна інформація',
      image: '/project5.jpg'
    },
    {
      title: 'Електронна візитка',
      description: 'Сучасне та зручне рішення щоб передати інформацію про себе, напрямки діяльності, контакти та інше',
      image: '/project6.jpg'
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
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
              <div className="h-48 relative overflow-hidden">
                <Image 
                  src={service.image} 
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
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

