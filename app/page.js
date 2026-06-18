'use client';

import { useEffect, useState } from 'react';
import { Camera, Music } from 'lucide-react';
import BrandLogo from './components/BrandLogo';

const categories = [
  {
    href: '#lens',
    img: 'https://images.pexels.com/photos/10562340/pexels-photo-10562340.jpeg?auto=compress&cs=tinysrgb&w=800',
    label: 'LENS',
    alt: 'A woman walks alone on a foggy street at night, captured in a moody black and white style',
  },
  {
    href: '#portraits',
    img: 'https://images.pexels.com/photos/32321512/pexels-photo-32321512.jpeg?auto=compress&cs=tinysrgb&w=800',
    label: 'PORTRAITS',
    alt: 'Captivating side-profile portrait of a young man in a black hoodie against dark background',
  },
  {
    href: '#fitness',
    img: 'https://images.pexels.com/photos/11338008/pexels-photo-11338008.jpeg?auto=compress&cs=tinysrgb&w=800',
    label: 'FITNESS',
    alt: 'Strong and muscular man posing in dimly lit studio with dramatic lighting',
  },
  {
    href: '#dance',
    img: 'https://images.pexels.com/photos/5135102/pexels-photo-5135102.jpeg?auto=compress&cs=tinysrgb&w=800',
    label: 'DANCE',
    alt: 'Black and white silhouette of a woman dancer performing on a smoky stage',
  },
];

const galleries = {
  lens: [
    {
      src: 'https://images.pexels.com/photos/30692031/pexels-photo-30692031.jpeg?auto=compress&cs=tinysrgb&w=1280',
      alt: 'Captivating night view of illuminated skyscrapers in London',
      id: 'lens-1',
    },
    {
      src: 'https://images.pexels.com/photos/4095527/pexels-photo-4095527.jpeg?auto=compress&cs=tinysrgb&w=1280',
      alt: 'A captivating urban street scene captured on a rainy night',
      id: 'lens-2',
    },
    {
      src: 'https://images.pexels.com/photos/8494231/pexels-photo-8494231.jpeg?auto=compress&cs=tinysrgb&w=1280',
      alt: 'Stunning black and white mountain scene with mist',
      id: 'lens-3',
    },
  ],
  portraits: [
    {
      src: 'https://images.pexels.com/photos/30184540/pexels-photo-30184540.jpeg?auto=compress&cs=tinysrgb&w=1280',
      alt: 'Artistic side profile portrait of a woman with dreadlocks against a dark background',
      id: 'portraits-1',
    },
    {
      src: 'https://images.pexels.com/photos/33584158/pexels-photo-33584158.jpeg?auto=compress&cs=tinysrgb&w=1280',
      alt: 'Black and white studio portrait of a stylish man with dramatic lighting',
      id: 'portraits-2',
    },
    {
      src: 'https://images.pexels.com/photos/16267317/pexels-photo-16267317.jpeg?auto=compress&cs=tinysrgb&w=1280',
      alt: 'A young woman poses inside with dramatic lighting through large windows',
      id: 'portraits-3',
    },
  ],
  fitness: [
    {
      src: 'https://images.pexels.com/photos/1552102/pexels-photo-1552102.jpeg?auto=compress&cs=tinysrgb&w=1280',
      alt: 'A muscular man pushes a weighted sled in an indoor gym',
      id: 'fitness-1',
    },
    {
      src: 'https://images.pexels.com/photos/17956257/pexels-photo-17956257.jpeg?auto=compress&cs=tinysrgb&w=1280',
      alt: 'A powerful silhouette of a muscular man against a dramatic smoky backdrop',
      id: 'fitness-2',
    },
    {
      src: 'https://images.pexels.com/photos/4753898/pexels-photo-4753898.jpeg?auto=compress&cs=tinysrgb&w=1280',
      alt: 'Silhouette of a woman shadowboxing in a dimly lit gym',
      id: 'fitness-3',
    },
  ],
  dance: [
    {
      src: 'https://images.pexels.com/photos/30826710/pexels-photo-30826710.jpeg?auto=compress&cs=tinysrgb&w=1280',
      alt: 'Graceful ballet dancer in a flowing white dress on a dark background',
      id: 'dance-1',
    },
    {
      src: 'https://images.pexels.com/photos/12442276/pexels-photo-12442276.jpeg?auto=compress&cs=tinysrgb&w=1280',
      alt: 'Contemporary dancers performing a dramatic routine on stage',
      id: 'dance-2',
    },
    {
      src: 'https://images.pexels.com/photos/14699922/pexels-photo-14699922.jpeg?auto=compress&cs=tinysrgb&w=1280',
      alt: 'Dynamic couple dancing with vibrant orange light trails',
      id: 'dance-3',
    },
  ],
};

const contact = {
  email: 'hello@chabaud.com',
  links: [
    { label: '@chabaud.lens' },
    { label: '@chabaud.portraits' },
    { label: '@chabaud.fitness' },
    { label: '@chabaud.dance' },
  ],
};

export default function Home() {
  const [activePage, setActivePage] = useState('home');
  const [lightbox, setLightbox] = useState({ open: false, src: null, alt: '' });

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash.replace('#', '') || 'home';
      setActivePage(hash);
      document.getElementById('mobile-menu')?.classList.add('hidden');
    };

    onHashChange();
    window.addEventListener('hashchange', onHashChange);

    return () => {
      window.removeEventListener('hashchange', onHashChange);
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setLightbox({ open: false, src: '', alt: '' });
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const openLightbox = (src, alt) => {
    setLightbox({ open: true, src, alt });
  };

  return (
    <main className="min-h-screen w-full bg-white text-black">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#home" className="text-lg font-medium tracking-[0.3em]" style={{ color: 'rgb(0, 0, 0)', fontWeight: 500, fontSize: 16 }}>
            CHABAUD
          </a>
          <div className="hidden md:flex gap-8 text-xs tracking-[0.2em] uppercase">
            <a href="#lens" className="nav-link">Lens</a>
            <a href="#portraits" className="nav-link">Portraits</a>
            <a href="#fitness" className="nav-link">Fitness</a>
            <a href="#dance" className="nav-link">Dance</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
          <button id="mobile-menu-btn" className="md:hidden" aria-label="Menu" type="button" onClick={() => {
            document.getElementById('mobile-menu')?.classList.toggle('hidden');
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
        <div id="mobile-menu" className="hidden md:hidden px-6 pb-4 text-xs tracking-[0.2em] uppercase space-y-3">
          <a href="#lens" className="block">Lens</a>
          <a href="#portraits" className="block">Portraits</a>
          <a href="#fitness" className="block">Fitness</a>
          <a href="#dance" className="block">Dance</a>
          <a href="#about" className="block">About</a>
          <a href="#contact" className="block">Contact</a>
        </div>
      </nav>

      <section id="page-home" className={`page ${activePage === 'home' ? 'active' : ''}`} style={{ minHeight: 'calc(100 * min(var(--vh, 1vh), 1vh))' }}>
        <div className="flex flex-col items-center justify-center pt-32 pb-12 px-6">
          <h1 className="canva-text text-6xl md:text-8xl font-light tracking-[0.4em] mb-2" style={{ color: 'rgb(0, 0, 0)', fontWeight: 300, fontSize: 32 }}>
            CHABAUD
          </h1>
          <p className="canva-text text-xs tracking-[0.5em] uppercase text-neutral-500 mb-16" style={{ color: 'rgb(115, 115, 115)', fontWeight: 400, fontSize: 16 }}>
            Photography
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1 w-full max-w-4xl">
            {categories.map((cat) => (
              <a key={cat.href} href={cat.href} className="cat-card aspect-[4/3]">
                <img className="canva-image w-full h-full object-cover" loading="lazy" src={cat.img} alt={cat.alt} />
                <div className="cat-overlay">
                  <span className="canva-text text-white text-sm tracking-[0.4em] uppercase font-light" style={{ color: 'rgb(255, 255, 255)', fontWeight: 400, fontSize: 16 }}>
                    {cat.label}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="page-lens" className={`page pt-24 px-6 pb-12 ${activePage === 'lens' ? 'active' : ''}`}>
        <h2 className="canva-text text-center text-xs tracking-[0.5em] uppercase mb-12" style={{ color: 'rgb(0, 0, 0)', fontWeight: 400, fontSize: 24 }}>
          Lens
        </h2>
        <div className="max-w-6xl mx-auto columns-1 md:columns-2 lg:columns-3 gap-2 space-y-2">
          {galleries.lens.map((item) => (
            <img
              key={item.id}
              className="canva-image gallery-img w-full"
              loading="lazy"
              src={item.src}
              alt={item.alt}
              onClick={() => openLightbox(item.src, item.alt)}
            />
          ))}
        </div>
      </section>

      <section id="page-portraits" className={`page pt-24 px-6 pb-12 ${activePage === 'portraits' ? 'active' : ''}`}>
        <h2 className="canva-text text-center text-xs tracking-[0.5em] uppercase mb-12" style={{ color: 'rgb(0, 0, 0)', fontWeight: 400, fontSize: 24 }}>
          Portraits
        </h2>
        <div className="max-w-6xl mx-auto columns-1 md:columns-2 lg:columns-3 gap-2 space-y-2">
          {galleries.portraits.map((item) => (
            <img
              key={item.id}
              className="canva-image gallery-img w-full"
              loading="lazy"
              src={item.src}
              alt={item.alt}
              onClick={() => openLightbox(item.src, item.alt)}
            />
          ))}
        </div>
      </section>

      <section id="page-fitness" className={`page pt-24 px-6 pb-12 ${activePage === 'fitness' ? 'active' : ''}`}>
        <h2 className="canva-text text-center text-xs tracking-[0.5em] uppercase mb-12" style={{ color: 'rgb(0, 0, 0)', fontWeight: 400, fontSize: 24 }}>
          Fitness
        </h2>
        <div className="max-w-6xl mx-auto columns-1 md:columns-2 lg:columns-3 gap-2 space-y-2">
          {galleries.fitness.map((item) => (
            <img
              key={item.id}
              className="canva-image gallery-img w-full"
              loading="lazy"
              src={item.src}
              alt={item.alt}
              onClick={() => openLightbox(item.src, item.alt)}
            />
          ))}
        </div>
      </section>

      <section id="page-dance" className={`page pt-24 px-6 pb-12 ${activePage === 'dance' ? 'active' : ''}`}>
        <h2 className="canva-text text-center text-xs tracking-[0.5em] uppercase mb-12" style={{ color: 'rgb(0, 0, 0)', fontWeight: 400, fontSize: 24 }}>
          Dance
        </h2>
        <div className="max-w-6xl mx-auto columns-1 md:columns-2 lg:columns-3 gap-2 space-y-2">
          {galleries.dance.map((item) => (
            <img
              key={item.id}
              className="canva-image gallery-img w-full"
              loading="lazy"
              src={item.src}
              alt={item.alt}
              onClick={() => openLightbox(item.src, item.alt)}
            />
          ))}
        </div>
      </section>

      <section id="page-about" className={`page pt-24 px-6 pb-12 ${activePage === 'about' ? 'active' : ''}`} style={{ minHeight: 'calc(100 * min(var(--vh, 1vh), 1vh))' }}>
        <div className="flex items-center justify-center h-full">
          <div className="max-w-2xl w-full text-center">
            <h2 className="canva-text text-xs tracking-[0.5em] uppercase mb-8" style={{ color: 'rgb(0, 0, 0)', fontWeight: 400, fontSize: 24 }}>
              About
            </h2>
            <p className="canva-text text-neutral-600 leading-relaxed text-lg" style={{ color: 'rgb(82, 82, 82)', fontWeight: 400, fontSize: 16 }}>
              CHABAUD is a visual photographer working across multiple disciplines: portrait, fitness, dance and documentary photography.
            </p>
          </div>
        </div>
      </section>

      <section id="page-contact" className={`page pt-20 px-6 pb-10 ${activePage === 'contact' ? 'active' : ''}`} style={{ minHeight: 'calc(100 * min(var(--vh, 1vh), 1vh))' }}>
        <div className="flex items-center justify-center h-full w-full">
          <div className="max-w-md mx-auto flex flex-col items-start gap-6">
            <h2 className="canva-text text-xs tracking-[0.5em] uppercase text-neutral-500" style={{ color: 'rgb(0, 0, 0)', fontWeight: 400, fontSize: 24 }}>
              Contact
            </h2>

            <div className="w-full flex flex-col items-start gap-4">
              <a href="mailto:wendelledgar@gmail.com" className="flex items-center gap-3 text-lg font-medium text-neutral-900 hover:text-neutral-800 transition-colors" style={{ fontWeight: 400 }}>
                <BrandLogo name="mail" className="w-5 h-5 flex-shrink-0" />
                wendelledgar@gmail.com
              </a>
              <a href="https://wa.me/34688999069" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-lg font-medium text-neutral-900 hover:text-neutral-800 transition-colors" style={{ fontWeight: 400 }}>
                <BrandLogo name="whatsapp" className="w-5 h-5 flex-shrink-0" />
                +34 688 999 069
              </a>
            </div>

            <div className="w-full flex flex-col items-start gap-3">
              <div className="flex items-center gap-2 uppercase tracking-[0.3em] text-neutral-500 text-base mb-3">
                <BrandLogo name="instagram" className="w-5 h-5 flex-shrink-0" />
                Instagram
              </div>
              <div className="flex flex-col items-start gap-2 w-full">
                <a href="https://instagram.com/chabaud.lens" target="_blank" rel="noopener noreferrer" className="text-base font-medium text-neutral-700 hover:text-neutral-900 transition-colors" style={{ fontWeight: 400 }}>
                  @chabaud.lens
                </a>
                <a href="https://instagram.com/chabaud.portraits" target="_blank" rel="noopener noreferrer" className="text-base font-medium text-neutral-700 hover:text-neutral-900 transition-colors" style={{ fontWeight: 400 }}>
                  @chabaud.portraits
                </a>
                <a href="https://instagram.com/chabaud.fitness" target="_blank" rel="noopener noreferrer" className="text-base font-medium text-neutral-700 hover:text-neutral-900 transition-colors" style={{ fontWeight: 400 }}>
                  @chabaud.fitness
                </a>
                <a href="https://instagram.com/chabaud.dance" target="_blank" rel="noopener noreferrer" className="text-base font-medium text-neutral-700 hover:text-neutral-900 transition-colors" style={{ fontWeight: 400 }}>
                  @chabaud.dance
                </a>
              </div>
            </div>

            <div className="w-full flex flex-col items-start gap-3">
              <div className="flex items-center gap-2 uppercase tracking-[0.3em] text-neutral-500 text-base mb-3">
                <BrandLogo name="tiktok" className="w-5 h-5 flex-shrink-0" />
                TikTok
              </div>
              <div className="flex flex-col items-start gap-2 w-full">
                <a href="https://tiktok.com/@chabaud.lens" target="_blank" rel="noopener noreferrer" className="text-base font-medium text-neutral-700 hover:text-neutral-900 transition-colors" style={{ fontWeight: 400 }}>
                  @chabaud.lens
                </a>
                <a href="https://tiktok.com/@chabaud.portraits" target="_blank" rel="noopener noreferrer" className="text-base font-medium text-neutral-700 hover:text-neutral-900 transition-colors" style={{ fontWeight: 400 }}>
                  @chabaud.portraits
                </a>
                <a href="https://tiktok.com/@chabaud.fitness" target="_blank" rel="noopener noreferrer" className="text-base font-medium text-neutral-700 hover:text-neutral-900 transition-colors" style={{ fontWeight: 400 }}>
                  @chabaud.fitness
                </a>
                <a href="https://tiktok.com/@chabaud.dance" target="_blank" rel="noopener noreferrer" className="text-base font-medium text-neutral-700 hover:text-neutral-900 transition-colors" style={{ fontWeight: 400 }}>
                  @chabaud.dance
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="lightbox" className={`lightbox ${lightbox.open ? 'open' : ''}`} role="dialog" aria-label="Image viewer" onClick={() => setLightbox({ open: false, src: null, alt: '' })}>
        {lightbox.open && lightbox.src ? (
          <img src={lightbox.src} alt={lightbox.alt} />
        ) : null}
      </div>
    </main>
  );
}
