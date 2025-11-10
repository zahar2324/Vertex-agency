'use client';

import Image from 'next/image';
import bg from '../../public/bg.jpg.webp';
interface HeroProps {
  onOpenModal: () => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  return (
    <section id="home" className="relative bg-white py-12 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              ПРОФЕСІЙНИЙ ЗАПУСК САЙТА
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
              Створимо для вас зручний та ефективний односторінковий сайт - 400$. Навчимо керувати сайтом та будемо постійно підтримувати вашу роботу - безкоштовно
            </p>
            <button 
              onClick={onOpenModal}
              className="btn-primary btn-shine text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg relative overflow-hidden cursor-pointer"
            >
              ЗАЛИШИТИ ЗАЯВКУ
            </button>
          </div>

          {/* Right Side - Image */}
          <div className="order-1 lg:order-2">
            <div className="rounded-2xl h-96 md:h-[500px] overflow-hidden">
              <Image 
                src={bg} 
                alt="Веб-розробка та дизайн сайтів" 
                width={800}
                height={500}
                className="w-full h-full object-center"
                priority
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

