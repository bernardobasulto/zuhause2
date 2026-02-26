import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { X, ZoomIn } from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1587061949409-02df41d5e562?q=80&w=1200&auto=format&fit=crop',
    alt: 'Cabaña exterior con vista al bosque',
    category: 'Cabañas',
  },
  {
    id: 2,
    src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/659166860.jpg?k=98a7b6a810ca87c0cd979ae2fa77e1b5c2b33528f2134a7cf7b1a42ade177628&o=',
    alt: 'Interior de lujo con chimenea',
    category: 'Interiores',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=1200&auto=format&fit=crop',
    alt: 'Vista panorámica del río',
    category: 'Paisajes',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1200&auto=format&fit=crop',
    alt: 'Spa y zona de relax',
    category: 'Bienestar',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=1200&auto=format&fit=crop',
    alt: 'Terraza con vista al atardecer',
    category: 'Exteriores',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=1200&auto=format&fit=crop',
    alt: 'Bosque nativo circundante',
    category: 'Naturaleza',
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=1200&auto=format&fit=crop',
    alt: 'Gastronomía local',
    category: 'Experiencias',
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1200&auto=format&fit=crop',
    alt: 'Actividades al aire libre',
    category: 'Aventura',
  },
];

const categories = ['Todas', ...Array.from(new Set(galleryImages.map((img) => img.category)))];

export function Gallery() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>();
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[0] | null>(null);

  const filteredImages =
    selectedCategory === 'Todas'
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  return (
    <section id="galeria" className="relative py-32 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-12 transition-all duration-1000 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-yellow-500/50" />
            <span className="text-yellow-500 tracking-[0.3em] text-xs uppercase font-medium">
              Galería
            </span>
            <div className="h-px w-12 bg-yellow-500/50" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl mb-4">Momentos Inolvidables</h2>
          <div className="w-24 h-px bg-yellow-500 mx-auto mb-8" />

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-sm uppercase tracking-wider transition-all duration-300 rounded-sm ${
                  selectedCategory === category
                    ? 'bg-yellow-500 text-black'
                    : 'border border-white/20 text-white hover:border-yellow-500 hover:text-yellow-500'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <GalleryItem
              key={image.id}
              image={image}
              index={index}
              onClick={() => setSelectedImage(image)}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>

          <div
            className="relative max-w-5xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg">
              <p className="text-white font-light">{selectedImage.alt}</p>
              <span className="text-yellow-500 text-sm">{selectedImage.category}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

interface GalleryItemProps {
  image: (typeof galleryImages)[0];
  index: number;
  onClick: () => void;
}

function GalleryItem({ image, index, onClick }: GalleryItemProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`gallery-item rounded-lg cursor-pointer aspect-square transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${index * 50}ms` }}
      onClick={onClick}
    >
      <img
        src={image.src}
        alt={image.alt}
        className="w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
        <div className="w-12 h-12 rounded-full bg-yellow-500/80 flex items-center justify-center">
          <ZoomIn className="w-6 h-6 text-black" />
        </div>
      </div>
    </div>
  );
}
