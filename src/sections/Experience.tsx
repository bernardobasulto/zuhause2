import { useScrollReveal } from '@/hooks/useScrollReveal';

export function Experience() {
  const { ref: leftRef, isVisible: leftVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: rightRef, isVisible: rightVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="experiencia"
      className="relative py-32 bg-black/80 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div
            ref={leftRef}
            className={`space-y-8 transition-all duration-1000 ${
              leftVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <h2 className="font-serif text-4xl md:text-6xl leading-tight">
              Donde la <span className="text-yellow-500 italic">naturaleza</span> abraza el lujo
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed font-light">
              Ubicadas estratégicamente en los alrededores más exclusivos de Valdivia, nuestras cabañas ofrecen
              una experiencia única de desconexión sin renunciar a las comodidades de alto nivel.
              Cada amanecer trae consigo el sonido del río Calle-Calle y el canto de aves nativas.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="border-l-2 border-yellow-500/30 pl-4 group hover:border-yellow-500 transition-colors">
                <div className="text-4xl font-serif text-yellow-500 mb-1 counter">15+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Años de experiencia</div>
              </div>
              <div className="border-l-2 border-yellow-500/30 pl-4 group hover:border-yellow-500 transition-colors">
                <div className="text-4xl font-serif text-yellow-500 mb-1 counter">12</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Cabañas exclusivas</div>
              </div>
              <div className="border-l-2 border-yellow-500/30 pl-4 group hover:border-yellow-500 transition-colors">
                <div className="text-4xl font-serif text-yellow-500 mb-1 counter">4.9</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Valoración promedio</div>
              </div>
              <div className="border-l-2 border-yellow-500/30 pl-4 group hover:border-yellow-500 transition-colors">
                <div className="text-4xl font-serif text-yellow-500 mb-1 counter">5000+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Huéspedes felices</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div
            ref={rightRef}
            className={`relative transition-all duration-1000 delay-200 ${
              rightVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-yellow-500/20 to-transparent blur-2xl" />
            <div className="img-zoom relative rounded-sm overflow-hidden shadow-2xl">
              <img
                src="https://www.interpatagonia.com/plantillas/grandes/30488-00Gr.jpg"
                alt="Cabaña de lujo en Valdivia"
                className="w-full h-[600px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-serif text-2xl italic text-white/90">
                  &ldquo;El paraíso existe y está en Valdivia&rdquo;
                </p>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 glass p-4 rounded-lg floating">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <div>
                  <div className="text-yellow-500 font-serif text-xl">Certificado</div>
                  <div className="text-gray-400 text-xs uppercase tracking-wider">Excelencia 2024</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
