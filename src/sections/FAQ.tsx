import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: '¿Cuál es el horario de check-in y check-out?',
    answer:
      'El check-in es a partir de las 15:00 hrs y el check-out hasta las 12:00 hrs. Si necesitas llegar antes o salir más tarde, contáctanos y haremos lo posible por acomodarte según disponibilidad.',
  },
  {
    question: '¿Las cabañas incluyen servicio de limpieza?',
    answer:
      'Sí, todas nuestras cabañas incluyen servicio de limpieza diario. Para estadías de más de 3 noches, también ofrecemos cambio de ropa de cama y toallas cada 2 días.',
  },
  {
    question: '¿Se permiten mascotas?',
    answer:
      'Algunas de nuestras cabañas son pet-friendly. Por favor indícanos al momento de reservar si viajarás con tu mascota para confirmar disponibilidad y políticas adicionales.',
  },
  {
    question: '¿Cómo puedo llegar desde el aeropuerto?',
    answer:
      'Ofrecemos servicio de traslado desde el Aeropuerto de Valdivia (ZAL) por un costo adicional. También puedes rentar un auto en el aeropuerto o tomar un taxi. El tiempo de viaje es de aproximadamente 45 minutos.',
  },
  {
    question: '¿Hay restaurante en el complejo?',
    answer:
      'Contamos con servicio de restaurante exclusivo para huéspedes con desayuno incluido. También ofrecemos cenas privadas con chef en tu cabaña y servicio de room service.',
  },
  {
    question: '¿Qué métodos de pago aceptan?',
    answer:
      'Aceptamos todas las tarjetas de crédito principales (Visa, Mastercard, American Express), transferencias bancarias y efectivo. Para reservas se requiere un depósito del 30%.',
  },
  {
    question: '¿Cuál es la política de cancelación?',
    answer:
      'Las cancelaciones realizadas con más de 30 días de anticipación reciben reembolso completo. Entre 15-30 días, reembolso del 50%. Menos de 15 días no aplica reembolso, pero puedes reprogramar tu estadía.',
  },
  {
    question: '¿Ofrecen actividades para niños?',
    answer:
      'Sí, tenemos diversas actividades familiares incluyendo senderismo guiado, talleres de naturaleza, y áreas de juegos. La Cabaña Familiar está especialmente equipada para familias con niños.',
  },
];

export function FAQ() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative py-32 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black" />

      <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10">
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
              Preguntas Frecuentes
            </span>
            <div className="h-px w-12 bg-yellow-500/50" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl mb-4">¿Tienes dudas?</h2>
          <div className="w-24 h-px bg-yellow-500 mx-auto mb-6" />
          <p className="text-gray-400 font-light max-w-xl mx-auto">
            Aquí encontrarás respuestas a las preguntas más comunes. Si necesitas más información, no
            dudes en contactarnos.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center glass rounded-lg p-8">
          <HelpCircle className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
          <h3 className="font-serif text-2xl text-white mb-2">¿No encuentras tu respuesta?</h3>
          <p className="text-gray-400 mb-6">
            Nuestro equipo está disponible 24/7 para ayudarte con cualquier consulta.
          </p>
          <button
            onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-luxury bg-yellow-600 hover:bg-yellow-500 text-white px-8 py-3 rounded-sm uppercase tracking-widest text-sm font-medium transition-all"
          >
            Contactar Soporte
          </button>
        </div>
      </div>
    </section>
  );
}

interface FAQItemProps {
  faq: (typeof faqs)[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ faq, index, isOpen, onToggle }: FAQItemProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`faq-item transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <button
        onClick={onToggle}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span
          className={`font-serif text-lg transition-colors duration-300 ${
            isOpen ? 'text-yellow-500' : 'text-white group-hover:text-yellow-500'
          }`}
        >
          {faq.question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-yellow-500 transition-transform duration-300 flex-shrink-0 ml-4 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`faq-answer text-gray-400 font-light leading-relaxed ${isOpen ? 'open' : ''}`}
      >
        {faq.answer}
      </div>
    </div>
  );
}
