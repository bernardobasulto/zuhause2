import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Home, Sparkles, Clock, Utensils, TreePine, Waves } from 'lucide-react';

const features = [
  {
    icon: Home,
    title: 'Cabañas Premium',
    description:
      'Diseño arquitectónico único con materiales nobles, vistas panorámicas y acabados de lujo en cada detalle.',
  },
  {
    icon: Sparkles,
    title: 'Spa & Bienestar',
    description:
      'Jacuzzis privados con vista al bosque, masajes terapéuticos y ritual de sauna finlandés exclusivo.',
  },
  {
    icon: Utensils,
    title: 'Gastronomía Local',
    description:
      'Desayunos gourmet con productos de la región, cenas privadas con chef y selección de vinos chilenos premium.',
  },
  {
    icon: TreePine,
    title: 'Naturaleza Virgen',
    description:
      'Rodeadas de bosque nativo, con senderos privados y acceso directo a la flora y fauna de la región.',
  },
  {
    icon: Waves,
    title: 'Acceso al Río',
    description:
      'Vistas panorámicas al río Calle-Calle con muelles privados y actividades acuáticas disponibles.',
  },
  {
    icon: Clock,
    title: 'Servicio 24/7',
    description:
      'Atención personalizada las 24 horas, concierge privado y asistencia inmediata para todas sus necesidades.',
  },
];

export function Features() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="relative py-32 bg-gradient-to-b from-black/80 to-black overflow-hidden">
      {/* Aurora Effect */}
      <div className="aurora absolute inset-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-20 transition-all duration-1000 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-yellow-500/50" />
            <span className="text-yellow-500 tracking-[0.3em] text-xs uppercase font-medium">
              Lo que ofrecemos
            </span>
            <div className="h-px w-12 bg-yellow-500/50" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl mb-4">Experiencias Exclusivas</h2>
          <div className="w-24 h-px bg-yellow-500 mx-auto" />
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface FeatureCardProps {
  feature: (typeof features)[0];
  index: number;
}

function FeatureCard({ feature, index }: FeatureCardProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const Icon = feature.icon;

  return (
    <div
      ref={ref}
      className={`feature-card glass p-8 rounded-sm group cursor-pointer transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="w-16 h-16 mb-6 rounded-full bg-yellow-500/10 flex items-center justify-center group-hover:bg-yellow-500/20 transition-all duration-500 group-hover:scale-110">
        <Icon className="w-8 h-8 text-yellow-500" strokeWidth={1.5} />
      </div>
      <h3 className="font-serif text-2xl mb-3 text-white group-hover:text-yellow-500 transition-colors duration-300">
        {feature.title}
      </h3>
      <p className="text-gray-400 font-light leading-relaxed">{feature.description}</p>

      {/* Hover Line */}
      <div className="mt-6 h-px w-0 bg-yellow-500/50 group-hover:w-full transition-all duration-500" />
    </div>
  );
}
