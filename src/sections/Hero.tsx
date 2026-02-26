import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  const titleRef = useRef<HTMLSpanElement>(null);
  const [letters, setLetters] = useState<string[]>([]);

  useEffect(() => {
    setLetters('VALDIVIA'.split(''));
  }, []);

  const handleScrollDown = () => {
    const experienceSection = document.getElementById('experiencia');
    if (experienceSection) {
      experienceSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleButtonClick = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with faster animation */}
      <div className="hero-bg" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="mb-6 overflow-hidden">
          <p className="reveal-text delay-1 text-yellow-500 tracking-[0.3em] text-sm md:text-base uppercase font-light">
            Bienvenidos a
          </p>
        </div>

        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl mb-6 leading-none">
          <span ref={titleRef} className="block gradient-text">
            {letters.map((letter, index) => (
              <span
                key={index}
                className="letter-effect"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {letter}
              </span>
            ))}
          </span>
        </h1>

        <div className="line-grow max-w-md mx-auto mb-8" />

        <p className="reveal-text delay-2 text-lg md:text-xl text-gray-200 font-light max-w-2xl mx-auto leading-relaxed mb-12">
          Descubre el refugio perfecto donde el lujo se encuentra con la naturaleza virgen de Valdivia.
          Una experiencia inolvidable entre ríos, bosques y tranquilidad absoluta.
        </p>

        <div className="reveal-text delay-3 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => handleButtonClick('contacto')}
            className="btn-luxury px-10 py-4 bg-yellow-600 text-white tracking-widest text-sm uppercase font-medium rounded-sm hover:bg-yellow-500 transition-colors"
          >
            Reservar Ahora
          </button>
          <button
            onClick={() => handleButtonClick('cabanas')}
            className="btn-luxury px-10 py-4 border border-white/30 text-white tracking-widest text-sm uppercase font-medium rounded-sm hover:bg-white/10 transition-colors backdrop-blur-sm"
          >
            Ver Cabañas
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={handleScrollDown}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 scroll-indicator cursor-pointer group"
        aria-label="Scroll down"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2 group-hover:border-yellow-500 transition-colors">
          <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce group-hover:bg-yellow-500 transition-colors" />
        </div>
        <ChevronDown className="w-5 h-5 text-white/60 mt-2 group-hover:text-yellow-500 transition-colors" />
      </button>
    </section>
  );
}
