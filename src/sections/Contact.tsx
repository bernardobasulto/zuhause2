import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Send, Phone, Mail, MapPin, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

export function Contact() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    arrivalDate: '',
    nights: '1-2 Noches',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success('¡Solicitud enviada con éxito! Nos contactaremos pronto.');

    // Reset after showing success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        arrivalDate: '',
        nights: '1-2 Noches',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="contacto"
      className="relative py-32 bg-gradient-to-b from-black to-gray-900 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop"
          className="w-full h-full object-cover"
          alt="Background"
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left Column - Info */}
          <div
            ref={headerRef}
            className={`lg:col-span-2 space-y-8 transition-all duration-1000 ${
              headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-px w-12 bg-yellow-500" />
                <span className="text-yellow-500 tracking-[0.3em] text-xs uppercase font-medium">
                  Reservas
                </span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl mb-4">Reserva tu Experiencia</h2>
              <p className="text-gray-300 font-light leading-relaxed">
                Complete el formulario y nos contactaremos para confirmar su estadía de lujo. Nuestro
                equipo está disponible las 24 horas para atender sus consultas.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-yellow-500/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-yellow-500" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Teléfono</div>
                  <div className="text-white">+56 9 1234 5678</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-yellow-500/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-yellow-500" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Email</div>
                  <div className="text-white">reservas@valdiviacabanas.cl</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-yellow-500/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-yellow-500" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Ubicación</div>
                  <div className="text-white">Camino a Niebla Km 12, Valdivia, Chile</div>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="glass p-6 rounded-lg">
              <h4 className="font-serif text-lg text-white mb-3">Horario de Atención</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Reservas</span>
                  <span className="text-white">24/7</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Check-in</span>
                  <span className="text-white">15:00 hrs</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Check-out</span>
                  <span className="text-white">12:00 hrs</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:col-span-3">
            <div className="glass-dark p-8 md:p-12 rounded-sm">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="font-serif text-2xl text-white mb-2">¡Solicitud Enviada!</h3>
                  <p className="text-gray-400">
                    Nos contactaremos contigo en las próximas 24 horas.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-gray-400">
                        Nombre
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors"
                        placeholder="Su nombre"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-gray-400">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors"
                        placeholder="correo@ejemplo.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-gray-400">
                        Fecha de Llegada
                      </label>
                      <input
                        type="date"
                        name="arrivalDate"
                        value={formData.arrivalDate}
                        onChange={handleChange}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-gray-400">
                        Noches
                      </label>
                      <select
                        name="nights"
                        value={formData.nights}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors"
                      >
                        <option className="bg-black">1-2 Noches</option>
                        <option className="bg-black">3-5 Noches</option>
                        <option className="bg-black">6+ Noches</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-gray-400">
                      Mensaje Especial
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors resize-none"
                      placeholder="¿Alguna solicitud especial para su estadía?"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-luxury bg-yellow-600 text-white py-4 rounded-sm uppercase tracking-widest text-sm font-medium hover:bg-yellow-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Solicitar Reserva
                      </>
                    )}
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    Al enviar, aceptas nuestra política de privacidad y términos de servicio.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
