import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Users, Maximize, Star, ArrowRight, Flame, Clock, Eye, Building, Sun, Mountain } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

const cabins = [
  {
    id: 1,
    name: 'Cabaña Presidencial',
    price: 850000,
    image: 'https://images.unsplash.com/photo-1587061949409-02df41d5e562?q=80&w=2070&auto=format&fit=crop',
    capacity: 'Hasta 8 personas',
    size: '300 m²',
    rating: 4.9,
    reviews: 128,
    badge: 'Más Popular',
    featured: true,
    description:
      'Nuestra joya de la corona. 300m² de puro lujo con vista 360° al río y bosque nativo. Incluye piscina climatizada interior, cine privado, bodega de vinos y servicio de chef exclusivo.',
    amenities: [
      { icon: Flame, label: 'Chimenea' },
      { icon: Clock, label: 'Servicio 24/7' },
      { icon: Eye, label: 'Vista 360°' },
    ],
  },
  {
    id: 2,
    name: 'Cabaña Bosque',
    price: 220000,
    image: 'https://serviciosturisticos.sernatur.cl/folder/empresas/emp_13320496/inscripcion_8142/phpGWdRiI20121126121118.jpg',
    capacity: '2-6 pers.',
    size: '120 m²',
    rating: 4.8,
    reviews: 96,
    featured: false,
    description:
      'Rodeada de arrayanes centenarios, chimenea a leña y sauna privado. Conexión total con la naturaleza.',
    amenities: [
      { icon: TreePineIcon, label: 'Bosque' },
      { icon: Flame, label: 'Chimenea' },
      { icon: Sun, label: 'Sauna' },
    ],
  },
  {
    id: 3,
    name: 'Cabaña Río',
    price: 180000,
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=1965&auto=format&fit=crop',
    capacity: '2-4 pers.',
    size: '90 m²',
    rating: 4.7,
    reviews: 84,
    featured: false,
    description:
      'Vista directa al río Calle-Calle, deck privado con jacuzzi exterior y acceso privado a la playa.',
    amenities: [
      { icon: WavesIcon, label: 'Jacuzzi' },
      { icon: Eye, label: 'Vista Río' },
      { icon: Building, label: 'Deck' },
    ],
  },
  {
    id: 4,
    name: 'Suite Mirador',
    price: 350000,
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop',
    capacity: '2 pers.',
    size: '80 m²',
    rating: 4.9,
    reviews: 72,
    featured: false,
    description:
      'Nuestra suite más romántica. Terraza panorámica, cama king con vista a las estrellas y servicio de mayordomo 24/7.',
    amenities: [
      { icon: Mountain, label: 'Terraza' },
      { icon: Users, label: 'Mayordomo' },
      { icon: Star, label: 'King Bed' },
    ],
  },
  {
    id: 5,
    name: 'Cabaña Familiar',
    price: 280000,
    image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=2070&auto=format&fit=crop',
    capacity: '4-8 pers.',
    size: '200 m²',
    rating: 4.8,
    reviews: 105,
    featured: false,
    description:
      'Espaciosa cabaña de dos pisos con juegos para niños, quincho y piscina compartida. Ideal para familias.',
    amenities: [
      { icon: WavesIcon, label: 'Piscina' },
      { icon: Building, label: 'Quincho' },
      { icon: Users, label: 'Juegos' },
    ],
  },
  {
    id: 6,
    name: 'Cabaña Nieve',
    price: 320000,
    image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=1974&auto=format&fit=crop',
    capacity: '2-4 pers.',
    size: '110 m²',
    rating: 4.9,
    reviews: 58,
    featured: false,
    seasonal: true,
    description:
      'Diseñada para el invierno patagónico. Calefacción por suelo radiante, doble chimenea y vistas a los volcanes nevados.',
    amenities: [
      { icon: Flame, label: 'Calefacción' },
      { icon: Flame, label: 'Chimenea' },
      { icon: Mountain, label: 'Volcanes' },
    ],
  },
  {
    id: 7,
    name: 'Cabaña Lago',
    price: 195000,
    image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=2070&auto=format&fit=crop',
    capacity: '2-3 pers.',
    size: '85 m²',
    rating: 4.7,
    reviews: 67,
    featured: false,
    description:
      'Sobre el borde del lago Calafquén. Kayaks incluidos, muelle privado y las mejores puestas de sol de la región.',
    amenities: [
      { icon: WavesIcon, label: 'Kayaks' },
      { icon: Building, label: 'Muelle' },
      { icon: Sun, label: 'Atardecer' },
    ],
  },
];

// Icon components for amenities
function TreePineIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  );
}

function WavesIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );
}

export function Cabins() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>();
  const [selectedCabin, setSelectedCabin] = useState<(typeof cabins)[0] | null>(null);

  const featuredCabin = cabins.find((c) => c.featured);
  const gridCabins = cabins.filter((c) => !c.featured);

  return (
    <section id="cabanas" className="relative py-32 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 2px 2px, rgba(212,175,55,0.3) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div
          ref={headerRef}
          className={`flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-8 transition-all duration-1000 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-12 bg-yellow-500" />
              <span className="text-yellow-500 tracking-[0.3em] text-xs uppercase font-medium">
                Alojamientos Exclusivos
              </span>
            </div>
            <h2 className="font-serif text-5xl md:text-7xl mb-6 leading-none">
              Nuestras <span className="italic text-yellow-500">Cabañas</span>
            </h2>
            <p className="text-gray-400 font-light text-lg leading-relaxed max-w-lg">
              Seis refugios únicos diseñados para diferentes experiencias. Desde intimidad romántica
              hasta espacios familiares amplios, cada cabaña es un universo de confort y naturaleza.
            </p>
          </div>
          <button className="group flex items-center gap-3 text-yellow-500 hover:text-white transition-all duration-500">
            <span className="tracking-widest text-sm uppercase font-medium border-b border-yellow-500 group-hover:border-white pb-1">
              Ver catálogo completo
            </span>
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" />
          </button>
        </div>

        {/* Featured Cabin */}
        {featuredCabin && (
          <div className="mb-8">
            <div className="group relative overflow-hidden rounded-lg cursor-pointer">
              <div className="img-zoom h-[600px] lg:h-[700px]">
                <img
                  src={featuredCabin.image}
                  alt={featuredCabin.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />

              {/* Badge */}
              <div className="absolute top-8 left-8">
                <span className="bg-yellow-500 text-black px-4 py-2 text-xs font-bold tracking-widest uppercase rounded-sm badge-pulse">
                  {featuredCabin.badge}
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
                <div className="max-w-3xl">
                  {/* Rating */}
                  <div className="flex items-center gap-4 mb-4 text-yellow-500">
                    <div className="star-rating">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm font-medium">
                      {featuredCabin.rating} ({featuredCabin.reviews} reseñas)
                    </span>
                  </div>

                  <h3 className="font-serif text-4xl lg:text-6xl mb-4 text-white">{featuredCabin.name}</h3>
                  <p className="text-gray-300 font-light text-lg mb-6 max-w-2xl leading-relaxed">
                    {featuredCabin.description}
                  </p>

                  {/* Details */}
                  <div className="flex flex-wrap gap-6 mb-8 text-sm text-gray-400">
                    <span className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-yellow-500" />
                      {featuredCabin.capacity}
                    </span>
                    <span className="flex items-center gap-2">
                      <Maximize className="w-5 h-5 text-yellow-500" />
                      {featuredCabin.size}
                    </span>
                    <span className="flex items-center gap-2">
                      <Star className="w-5 h-5 text-yellow-500" />
                      5 estrellas
                    </span>
                  </div>

                  {/* Price & CTA */}
                  <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between border-t border-white/10 pt-6">
                    <div>
                      <span className="text-3xl font-serif text-white">
                        ${featuredCabin.price.toLocaleString()}
                      </span>
                      <span className="text-gray-500 text-sm ml-2">/ noche</span>
                    </div>
                    <button
                      onClick={() => setSelectedCabin(featuredCabin)}
                      className="btn-luxury bg-yellow-600 hover:bg-yellow-500 text-white px-8 py-3 rounded-sm uppercase tracking-widest text-sm font-medium transition-all"
                    >
                      Ver Detalles
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Grid of Cabins */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gridCabins.map((cabin, index) => (
            <CabinCard
              key={cabin.id}
              cabin={cabin}
              index={index}
              onSelect={() => setSelectedCabin(cabin)}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 p-8 glass rounded-lg">
            <div className="text-left">
              <h4 className="font-serif text-2xl text-white mb-1">¿No encuentras lo que buscas?</h4>
              <p className="text-gray-400 text-sm">
                Podemos personalizar tu experiencia según tus necesidades.
              </p>
            </div>
            <button
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-luxury bg-white text-black px-8 py-3 rounded-sm uppercase tracking-widest text-sm font-medium hover:bg-yellow-500 hover:text-white transition-all whitespace-nowrap"
            >
              Contactar Concierge
            </button>
          </div>
        </div>
      </div>

      {/* Cabin Detail Dialog */}
      <Dialog open={!!selectedCabin} onOpenChange={() => setSelectedCabin(null)}>
        <DialogContent className="bg-black/95 border-white/10 text-white max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-serif text-3xl">{selectedCabin?.name}</DialogTitle>
            <DialogDescription className="text-gray-400">
              Descubre todos los detalles de esta experiencia única
            </DialogDescription>
          </DialogHeader>

          {selectedCabin && (
            <div className="space-y-6">
              <div className="relative h-64 rounded-lg overflow-hidden">
                <img
                  src={selectedCabin.image}
                  alt={selectedCabin.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              <div className="flex items-center gap-4 text-yellow-500">
                <div className="star-rating">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-sm">
                  {selectedCabin.rating} ({selectedCabin.reviews} reseñas)
                </span>
              </div>

              <p className="text-gray-300 leading-relaxed">{selectedCabin.description}</p>

              <div className="grid grid-cols-3 gap-4">
                <div className="glass p-4 rounded text-center">
                  <Users className="w-5 h-5 text-yellow-500 mx-auto mb-2" />
                  <div className="text-sm text-gray-400">{selectedCabin.capacity}</div>
                </div>
                <div className="glass p-4 rounded text-center">
                  <Maximize className="w-5 h-5 text-yellow-500 mx-auto mb-2" />
                  <div className="text-sm text-gray-400">{selectedCabin.size}</div>
                </div>
                <div className="glass p-4 rounded text-center">
                  <Star className="w-5 h-5 text-yellow-500 mx-auto mb-2" />
                  <div className="text-sm text-gray-400">5 estrellas</div>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-white/10 pt-6">
                <div>
                  <span className="text-3xl font-serif text-white">
                    ${selectedCabin.price.toLocaleString()}
                  </span>
                  <span className="text-gray-500 text-sm ml-2">/ noche</span>
                </div>
                <button
                  onClick={() => {
                    setSelectedCabin(null);
                    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn-luxury bg-yellow-600 hover:bg-yellow-500 text-white px-8 py-3 rounded-sm uppercase tracking-widest text-sm font-medium transition-all"
                >
                  Reservar
                </button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

interface CabinCardProps {
  cabin: (typeof cabins)[0];
  index: number;
  onSelect: () => void;
}

function CabinCard({ cabin, index, onSelect }: CabinCardProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`cabin-card group relative overflow-hidden rounded-lg bg-gray-900 cursor-pointer transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
      onClick={onSelect}
    >
      <div className="img-zoom h-[400px]">
        <img src={cabin.image} alt={cabin.name} className="w-full h-full object-cover" loading="lazy" />
      </div>
      <div className="overlay absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

      {/* Seasonal Badge */}
      {cabin.seasonal && (
        <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
          Temporada Invierno
        </div>
      )}

      {/* Quick Info */}
      <div className="absolute top-4 right-4 glass px-3 py-1 rounded-full">
        <span className="text-xs font-medium text-white">{cabin.capacity}</span>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-serif text-2xl text-white group-hover:text-yellow-500 transition-colors">
            {cabin.name}
          </h3>
          <span className="text-yellow-500 font-serif text-xl">${(cabin.price / 1000).toFixed(0)}k</span>
        </div>
        <p className="text-gray-400 text-sm font-light mb-4 line-clamp-2 group-hover:line-clamp-none transition-all">
          {cabin.description}
        </p>

        {/* Amenities */}
        <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 mb-4">
          {cabin.amenities.map((amenity, i) => (
            <div
              key={i}
              className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"
              title={amenity.label}
            >
              <amenity.icon className="w-4 h-4 text-yellow-500" />
            </div>
          ))}
        </div>

        <button className="w-full py-2 border border-white/20 text-white text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 opacity-0 group-hover:opacity-100">
          Ver Detalles
        </button>
      </div>
    </div>
  );
}
