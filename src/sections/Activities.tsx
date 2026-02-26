import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useState } from 'react';
import { Clock, Users, Check, ChevronDown } from 'lucide-react';

const activities = [
  {
    id: 1,
    name: 'Trekking por el Bosque Nativo',
    description:
      'Recorre senderos exclusivos a través del bosque valdiviano con guías expertos. Observa la flora y fauna única de la región.',
    duration: '3-4 horas',
    groupSize: '2-8 personas',
    price: 45000,
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=800&auto=format&fit=crop',
    included: ['Guía especializado', 'Equipo de trekking', 'Snacks', 'Seguro'],
  },
  {
    id: 2,
    name: 'Kayak en el Río Calle-Calle',
    description:
      'Navega por las tranquilas aguas del río Calle-Calle. Disfruta de vistas panorámicas y avistamiento de aves.',
    duration: '2-3 horas',
    groupSize: '2-6 personas',
    price: 35000,
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=800&auto=format&fit=crop',
    included: ['Kayak y remos', 'Chaleco salvavidas', 'Guía', 'Fotografías'],
  },
  {
    id: 3,
    name: 'Cena Gourmet con Chef Privado',
    description:
      'Una experiencia culinaria única con ingredientes locales y vinos de la región. Menú personalizado según preferencias.',
    duration: '2-3 horas',
    groupSize: '2-10 personas',
    price: 85000,
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800&auto=format&fit=crop',
    included: ['Menú de 5 tiempos', 'Maridaje de vinos', 'Chef privado', 'Servicio de mesa'],
  },
  {
    id: 4,
    name: 'Spa & Masajes en la Cabaña',
    description:
      'Relájate con masajes terapéuticos en la privacidad de tu cabaña. Incluye aromaterapia y productos naturales.',
    duration: '1-2 horas',
    groupSize: '1-2 personas',
    price: 65000,
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800&auto=format&fit=crop',
    included: ['Masaje relajante', 'Aromaterapia', 'Toallas calientes', 'Té herbal'],
  },
  {
    id: 5,
    name: 'Pesca Deportiva en el Río',
    description:
      'Experimenta la pesca deportiva en uno de los mejores ríos de Chile. Ideal para principiantes y expertos.',
    duration: '4-5 horas',
    groupSize: '1-4 personas',
    price: 55000,
    image: 'https://images.unsplash.com/photo-1516967124798-10656f7dca28?q=80&w=800&auto=format&fit=crop',
    included: ['Equipo de pesca', 'Guía experto', 'Permisos', 'Refrigerios'],
  },
  {
    id: 6,
    name: 'Tour de Cervezas Artesanales',
    description:
      'Visita las mejores cervecerías artesanales de Valdivia. Degustación incluida con maridaje de quesos locales.',
    duration: '4 horas',
    groupSize: '4-12 personas',
    price: 40000,
    image: 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?q=80&w=800&auto=format&fit=crop',
    included: ['Transporte', '3 cervecerías', 'Degustación', 'Maridaje'],
  },
];

export function Activities() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>();
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section id="actividades" className="relative py-32 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 2px 2px, rgba(212,175,55,0.3) 1px, transparent 0)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

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
              Experiencias
            </span>
            <div className="h-px w-12 bg-yellow-500/50" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl mb-4">Actividades & Aventuras</h2>
          <div className="w-24 h-px bg-yellow-500 mx-auto mb-6" />
          <p className="text-gray-400 font-light max-w-2xl mx-auto">
            Descubre todas las experiencias que hemos preparado para hacer de tu estadía algo
            verdaderamente inolvidable.
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity, index) => (
            <ActivityCard
              key={activity.id}
              activity={activity}
              index={index}
              isExpanded={expandedId === activity.id}
              onToggle={() => setExpandedId(expandedId === activity.id ? null : activity.id)}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">
            ¿Tienes alguna actividad especial en mente? Podemos organizar experiencias personalizadas.
          </p>
          <button
            onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-luxury border border-yellow-500 text-yellow-500 px-8 py-3 rounded-sm uppercase tracking-widest text-sm font-medium hover:bg-yellow-500 hover:text-black transition-all"
          >
            Solicitar Experiencia Personalizada
          </button>
        </div>
      </div>
    </section>
  );
}

interface ActivityCardProps {
  activity: (typeof activities)[0];
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}

function ActivityCard({ activity, index, isExpanded, onToggle }: ActivityCardProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`activity-card glass rounded-lg overflow-hidden transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={activity.image}
          alt={activity.name}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <span className="text-yellow-500 font-serif text-xl">${activity.price.toLocaleString()}</span>
          <span className="text-gray-400 text-sm"> / persona</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-serif text-xl text-white mb-2">{activity.name}</h3>
        <p className="text-gray-400 text-sm font-light line-clamp-2 mb-4">{activity.description}</p>

        {/* Quick Info */}
        <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {activity.duration}
          </span>
          <span className="flex items-center gap-1">
            <Users className="w-3 h-3" />
            {activity.groupSize}
          </span>
        </div>

        {/* Expandable Content */}
        <div
          className={`overflow-hidden transition-all duration-500 ${
            isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="border-t border-white/10 pt-4 mb-4">
            <h4 className="text-sm uppercase tracking-wider text-gray-400 mb-3">Incluye:</h4>
            <ul className="space-y-2">
              {activity.included.map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                  <Check className="w-4 h-4 text-yellow-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full btn-luxury bg-yellow-600 hover:bg-yellow-500 text-white py-2 rounded-sm uppercase tracking-widest text-xs font-medium transition-all"
          >
            Reservar Actividad
          </button>
        </div>

        {/* Toggle Button */}
        <button
          onClick={onToggle}
          className="w-full flex items-center justify-center gap-2 text-yellow-500 text-sm hover:text-yellow-400 transition-colors"
        >
          {isExpanded ? 'Ver menos' : 'Ver más'}
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
          />
        </button>
      </div>
    </div>
  );
}
