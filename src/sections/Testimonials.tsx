import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'María González',
    location: 'Santiago, Chile',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop',
    rating: 5,
    text: 'Una experiencia mágica. La Cabaña Presidencial superó todas nuestras expectativas. El servicio es impecable y la vista al río es simplemente espectacular. Volveremos el próximo año sin duda.',
    date: 'Enero 2024',
    cabin: 'Cabaña Presidencial',
  },
  {
    id: 2,
    name: 'Carlos y Ana Martínez',
    location: 'Buenos Aires, Argentina',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop',
    rating: 5,
    text: 'Celebramos nuestro aniversario en la Suite Mirador y fue perfecto. La atención al detalle, la cena privada con chef, todo fue inolvidable. El mejor lugar para una escapada romántica.',
    date: 'Febrero 2024',
    cabin: 'Suite Mirador',
  },
  {
    id: 3,
    name: 'Familia Rodríguez',
    location: 'Valparaíso, Chile',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop',
    rating: 5,
    text: 'Viajamos con nuestros tres hijos y la Cabaña Familiar fue ideal. Los niños disfrutaron la piscina y los juegos mientras nosotros relajábamos en el quincho. ¡Altamente recomendado para familias!',
    date: 'Marzo 2024',
    cabin: 'Cabaña Familiar',
  },
  {
    id: 4,
    name: 'Elena Vargas',
    location: 'Concepción, Chile',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop',
    rating: 5,
    text: 'La Cabaña Bosque es un sueño hecho realidad. Despertar con el sonido de los pájaros, el sauna privado después de un día de trekking... pura magia. El personal es increíblemente amable.',
    date: 'Abril 2024',
    cabin: 'Cabaña Bosque',
  },
  {
    id: 5,
    name: 'Pedro y Laura Silva',
    location: 'Montevideo, Uruguay',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop',
    rating: 5,
    text: 'Pasamos una semana en la Cabaña Río y fue la mejor decisión. Los kayaks incluidos nos permitieron explorar el río a nuestro ritmo. Las puestas de sol desde el deck son incomparables.',
    date: 'Mayo 2024',
    cabin: 'Cabaña Río',
  },
];

export function Testimonials() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative py-32 bg-black overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-yellow-500/50" />
            <span className="text-yellow-500 tracking-[0.3em] text-xs uppercase font-medium">
              Testimonios
            </span>
            <div className="h-px w-12 bg-yellow-500/50" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl mb-4">Lo que dicen nuestros huéspedes</h2>
          <div className="w-24 h-px bg-yellow-500 mx-auto" />
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Main Testimonial */}
          <div className="glass rounded-lg p-8 md:p-12 max-w-4xl mx-auto">
            <Quote className="w-12 h-12 text-yellow-500/30 mb-6" />

            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <img
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].name}
                    className="w-24 h-24 rounded-full object-cover border-2 border-yellow-500/30"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-yellow-500 rounded-full p-1">
                    <Star className="w-4 h-4 text-black fill-current" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                {/* Rating */}
                <div className="flex justify-center md:justify-start gap-1 mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>

                <p className="text-lg md:text-xl text-gray-200 font-light leading-relaxed mb-6">
                  &ldquo;{testimonials[currentIndex].text}&rdquo;
                </p>

                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                  <div>
                    <div className="font-serif text-xl text-white">{testimonials[currentIndex].name}</div>
                    <div className="text-sm text-gray-400">{testimonials[currentIndex].location}</div>
                  </div>
                  <div className="hidden md:block w-px h-8 bg-white/20" />
                  <div className="text-sm text-yellow-500">{testimonials[currentIndex].cabin}</div>
                  <div className="text-sm text-gray-500">{testimonials[currentIndex].date}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-yellow-500 hover:text-yellow-500 transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? 'bg-yellow-500 w-6' : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-yellow-500 hover:text-yellow-500 transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          {[
            { value: '4.9', label: 'Valoración promedio' },
            { value: '5000+', label: 'Huéspedes satisfechos' },
            { value: '98%', label: 'Recomendarían' },
            { value: '85%', label: 'Clientes recurrentes' },
          ].map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface StatCardProps {
  stat: { value: string; label: string };
  index: number;
}

function StatCard({ stat, index }: StatCardProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`text-center transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="font-serif text-4xl md:text-5xl text-yellow-500 mb-2">{stat.value}</div>
      <div className="text-sm text-gray-400 uppercase tracking-wider">{stat.label}</div>
    </div>
  );
}
