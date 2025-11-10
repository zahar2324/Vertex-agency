'use client';

import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';

interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  project: string;
  image: string;
}

export default function Reviews() {
  const reviews: Review[] = [
    {
      id: 1,
      name: 'Михайло Коваленко',
      rating: 5,
      comment: 'Дуже дякую команді Vertex! Зробили крутий сайт за тиждень. Все працює без збоїв, підтримка реагує миттєво…',
      project: 'Односторінковий сайт для бізнесу',
      image: '/review1.jpeg'
    },
    {
      id: 2,
      name: 'Олена Петренко',
      rating: 5,
      comment: 'Чудова команда! Сайт виглядає сучасно, швидко працює, усе зробили саме так, як я хотіла…',
      project: 'Корпоративний сайт',
      image: '/review2.jpeg'
    },
    {
      id: 3,
      name: 'Анна Сидоренко',
      rating: 5,
      comment: 'Vertex створили для нас інтернет-магазин, який перевершив очікування! Все зручно і зрозуміло…',
      project: 'Інтернет-магазин',
      image: '/review6.jpeg'
    },
    {
      id: 4,
      name: 'Володимир Мельник',
      rating: 5,
      comment: 'Все зробили швидко і якісно! Запустили сайт вчасно, гарантія 5 років — це справді круто…',
      project: 'Сайт послуг',
      image: '/review4.jpeg'
    },
    {
      id: 5,
      name: 'Тетяна Лисенко',
      rating: 5,
      comment: 'Vertex — це просто знахідка! Сайт виглядає стильно, клієнтів побільшало вже за перший тиждень…',
      project: 'Особистий бренд',
      image: '/review5.jpeg'
    },
    {
      id: 6,
      name: 'Олександр Бондаренко',
      rating: 5,
      comment: 'Команда знає свою справу! Все зробили акуратно, продумано і з душею. Дизайн сучасний, сайт літає. Рекомендую!',
      project: 'Електронна візитка',
      image: '/review3.jpeg'
    }
    
    
  ]; 

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating
            ? 'text-yellow-400 fill-yellow-400'
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="reviews" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-center">
          Відгуки наших клієнтів
        </h2>
        <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
          Ми пишаємося довірою наших клієнтів та їх успішними проектами
        </p>

        <div className="max-w-6xl mx-auto">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            pagination={false}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="pb-12"
            style={{ height: '420px', paddingBottom: '60px' }}
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id}>
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 md:p-8 flex flex-col h-full" style={{ minHeight: '350px' }}>
                  <div className="mb-4 flex-shrink-0">
                    <Quote className="w-10 h-10 text-blue-500 mb-4" />
                    <div className="flex items-center mb-3">
                      {renderStars(review.rating)}
                    </div>
                    <p className="text-sm text-gray-500 mb-2">{review.project}</p>
                  </div>
                  <p className="text-gray-700 mb-6 flex-grow leading-relaxed overflow-hidden">
                    "{review.comment}"
                  </p>
                  <div className="border-t pt-4 mt-auto flex-shrink-0">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 relative">
                        <Image 
                          src={review.image}
                          alt={review.name}
                          fill
                          className="object-cover"
                          sizes="48px"
                        />
                      </div>
                      <p className="font-semibold text-gray-900">{review.name}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button className="swiper-button-prev-custom w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition shadow-lg hover:shadow-xl">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button className="swiper-button-next-custom w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition shadow-lg hover:shadow-xl">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

