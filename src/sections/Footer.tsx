import { useState } from 'react';
import { Send, Instagram, Twitter, Facebook, Youtube } from 'lucide-react';
import { toast } from 'sonner';

const footerLinks = {
  explorar: [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Experiencia', href: '#experiencia' },
    { label: 'Cabañas', href: '#cabanas' },
    { label: 'Actividades', href: '#actividades' },
    { label: 'Galería', href: '#galeria' },
  ],
  servicios: [
    { label: 'Spa & Bienestar', href: '#' },
    { label: 'Gastronomía', href: '#' },
    { label: 'Eventos', href: '#' },
    { label: 'Traslados', href: '#' },
    { label: 'Concierge', href: '#' },
  ],
  legal: [
    { label: 'Política de Privacidad', href: '#' },
    { label: 'Términos de Servicio', href: '#' },
    { label: 'Política de Cancelación', href: '#' },
    { label: 'Cookies', href: '#' },
  ],
};

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Youtube, href: '#', label: 'Youtube' },
];

export function Footer() {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success('¡Gracias por suscribirte! Recibirás nuestras novedades pronto.');
      setEmail('');
    }
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-black border-t border-white/10">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-serif text-2xl md:text-3xl text-white mb-2">
                Suscríbete a nuestras novedades
              </h3>
              <p className="text-gray-400 font-light">
                Recibe ofertas exclusivas, novedades y consejos para tu próxima escapada.
              </p>
            </div>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tu correo electrónico"
                className="flex-1 newsletter-input px-4 py-3 rounded-sm text-white"
                required
              />
              <button
                type="submit"
                className="btn-luxury bg-yellow-600 hover:bg-yellow-500 text-white px-6 py-3 rounded-sm transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="font-serif text-3xl text-yellow-500 mb-4 tracking-widest">VALDIVIA</div>
            <p className="text-gray-400 font-light max-w-sm leading-relaxed mb-6">
              Experiencias de lujo en la naturaleza más pura de Chile. Cabañas exclusivas diseñadas
              para quienes buscan lo extraordinario.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-yellow-500 hover:text-yellow-500 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white uppercase tracking-widest text-sm mb-4">Explorar</h4>
            <ul className="space-y-3">
              {footerLinks.explorar.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-gray-400 font-light text-sm hover:text-yellow-500 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white uppercase tracking-widest text-sm mb-4">Servicios</h4>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 font-light text-sm hover:text-yellow-500 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white uppercase tracking-widest text-sm mb-4">Contacto</h4>
            <ul className="space-y-3 text-gray-400 font-light text-sm">
              <li>+56 9 1234 5678</li>
              <li>reservas@valdiviacabanas.cl</li>
              <li>Camino a Niebla Km 12</li>
              <li>Valdivia, Chile</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500 uppercase tracking-widest">
              &copy; {new Date().getFullYear()} Valdivia Cabañas Premium. Todos los derechos
              reservados.
            </p>
            <div className="flex gap-6">
              {footerLinks.legal.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs text-gray-500 uppercase tracking-widest hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
