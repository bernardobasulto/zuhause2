import { useEffect, useState } from 'react';
import { Toaster } from '@/components/ui/sonner';
import { Loader } from '@/components/Loader';
import { Particles } from '@/components/Particles';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/sections/Hero';
import { Experience } from '@/sections/Experience';
import { Features } from '@/sections/Features';
import { Cabins } from '@/sections/Cabins';
import { Testimonials } from '@/sections/Testimonials';
import { Gallery } from '@/sections/Gallery';
import { Activities } from '@/sections/Activities';
import { FAQ } from '@/sections/FAQ';
import { Contact } from '@/sections/Contact';
import { Footer } from '@/sections/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Preload fonts
    const link = document.createElement('link');
    link.href =
      'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400&family=Montserrat:wght@200;300;400;500&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Hide loader after fonts load
    link.onload = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    };

    // Fallback
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <>
      {/* Toast notifications */}
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: 'rgba(0, 0, 0, 0.9)',
            color: '#fff',
            border: '1px solid rgba(212, 175, 55, 0.3)',
          },
        }}
      />

      {/* Loader */}
      {isLoading && <Loader />}

      {/* Particles Background */}
      <Particles />

      {/* Noise Overlay */}
      <div className="noise-overlay" />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative">
        <Hero />
        <Experience />
        <Features />
        <Cabins />
        <Testimonials />
        <Gallery />
        <Activities />
        <FAQ />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
