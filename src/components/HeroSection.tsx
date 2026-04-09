"use client";

import { useState, useEffect, useCallback } from "react";

const TYPED_PHRASES = [
  "¿Te adjudicaron un contrato?",
  "¿Necesitas fianza de cumplimiento?",
  "¿Participas en licitaciones públicas?",
  "¿Buscas la mejor tasa del mercado?",
];

function useTypedText(phrases: string[], typeSpeed = 60, deleteSpeed = 30, pause = 2000) {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const currentPhrase = phrases[phraseIndex];
    if (!isDeleting) {
      setText(currentPhrase.slice(0, text.length + 1));
      if (text.length + 1 === currentPhrase.length) {
        setTimeout(() => setIsDeleting(true), pause);
        return;
      }
    } else {
      setText(currentPhrase.slice(0, text.length - 1));
      if (text.length - 1 === 0) {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
        return;
      }
    }
  }, [text, phraseIndex, isDeleting, phrases, pause]);

  useEffect(() => {
    const speed = isDeleting ? deleteSpeed : typeSpeed;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting, typeSpeed, deleteSpeed]);

  return text;
}

// Pre-computed particle positions to avoid hydration mismatch from Math.random()
const PARTICLES = [
  { w: 4, l: 12, t: 8, dur: 7, del: 1.2 },
  { w: 6, l: 85, t: 22, dur: 9, del: 0.3 },
  { w: 3, l: 45, t: 65, dur: 5, del: 2.8 },
  { w: 7, l: 28, t: 40, dur: 8, del: 0.7 },
  { w: 2, l: 72, t: 15, dur: 6, del: 3.5 },
  { w: 5, l: 58, t: 78, dur: 10, del: 1.9 },
  { w: 3, l: 92, t: 55, dur: 7, del: 0.1 },
  { w: 8, l: 18, t: 88, dur: 5, del: 2.4 },
  { w: 4, l: 65, t: 32, dur: 9, del: 3.1 },
  { w: 6, l: 38, t: 92, dur: 6, del: 0.8 },
  { w: 3, l: 8, t: 48, dur: 8, del: 1.6 },
  { w: 5, l: 78, t: 72, dur: 7, del: 2.2 },
  { w: 2, l: 52, t: 18, dur: 10, del: 3.8 },
  { w: 7, l: 32, t: 58, dur: 5, del: 0.5 },
  { w: 4, l: 95, t: 85, dur: 9, del: 1.4 },
  { w: 6, l: 22, t: 25, dur: 6, del: 2.9 },
  { w: 3, l: 68, t: 45, dur: 8, del: 3.3 },
  { w: 5, l: 42, t: 12, dur: 7, del: 0.6 },
  { w: 8, l: 88, t: 68, dur: 5, del: 1.8 },
  { w: 4, l: 15, t: 95, dur: 9, del: 2.5 },
];

function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[5]">
      {PARTICLES.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white/10"
          style={{
            width: `${p.w}px`,
            height: `${p.w}px`,
            left: `${p.l}%`,
            top: `${p.t}%`,
            animation: `float-particle ${p.dur}s ease-in-out infinite`,
            animationDelay: `${p.del}s`,
          }}
        />
      ))}
    </div>
  );
}

export default function HeroSection() {
  const typedText = useTypedText(TYPED_PHRASES);
  const badges = ["Cumplimiento", "Anticipo", "Licitación", "Vicios Ocultos"];
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative bg-primary min-h-[650px] md:min-h-[750px] flex items-center overflow-hidden wave-divider">
      {/* Parallax background image */}
      <div
        className="absolute inset-0 bg-cover bg-center will-change-transform"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80')",
          transform: `translateY(${scrollY * 0.3}px) scale(1.1)`,
        }}
      />

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/80 to-secondary/60 animate-gradient z-[2]" />

      {/* Floating particles */}
      <FloatingParticles />

      {/* Geometric decorations */}
      <div className="absolute top-20 right-10 w-64 h-64 border border-white/5 rounded-full animate-float hidden lg:block z-[3]" />
      <div className="absolute bottom-32 right-1/4 w-32 h-32 border border-accent/10 rounded-full hidden lg:block z-[3]" style={{ animation: "float 5s ease-in-out infinite 1s" }} />
      <div className="absolute top-1/3 right-20 w-2 h-2 bg-accent rounded-full animate-pulse hidden lg:block z-[3]" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 w-full">
        <div className="max-w-2xl">
          {/* Typed heading */}
          <div className="min-h-[4.5rem] md:min-h-[5.5rem] lg:min-h-[6.5rem] mb-2">
            <h1 className="font-[var(--font-heading)] text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              {typedText}
              <span className="typewriter-cursor" />
            </h1>
          </div>

          <p className="font-[var(--font-heading)] text-2xl md:text-3xl font-bold mb-6">
            <span className="bg-gradient-to-r from-accent via-yellow-300 to-accent bg-clip-text text-transparent">
              Obtén tu fianza rápido y seguro
            </span>
          </p>

          {/* Animated badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            {badges.map((badge, i) => (
              <span
                key={badge}
                className="inline-flex items-center gap-1.5 bg-cta/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-1.5 rounded-full border border-cta/30 hover:bg-cta/40 transition-all duration-300"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <svg className="w-4 h-4 text-cta" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {badge}
              </span>
            ))}
          </div>

          {/* Support text */}
          <p className="text-white/80 text-lg mb-8 leading-relaxed max-w-xl">
            Trabajamos con múltiples afianzadoras para lograr la mejor
            aprobación y costo para tu empresa.
          </p>

          {/* CTA Buttons with shine effect */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a
              href="https://wa.me/521XXXXXXXXXX?text=Hola%2C%20me%20adjudicaron%20un%20contrato%20de%20gobierno%20y%20necesito%20cotizar%20una%20fianza.%20%C2%BFMe%20pueden%20apoyar%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine inline-flex items-center justify-center gap-2 bg-cta hover:bg-cta-hover text-white font-bold px-8 py-4 rounded-full transition-all duration-300 text-lg shadow-lg hover:shadow-2xl hover:scale-105 animate-pulse-green"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Cotizar por WhatsApp
            </a>
            <a
              href="#formulario"
              className="btn-shine inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 text-lg hover:bg-white hover:text-primary hover:border-white"
            >
              Solicitar Evaluación
            </a>
          </div>

          {/* Trust points with glass effect */}
          <div className="inline-flex flex-wrap gap-6 text-white/90 text-sm bg-white/5 backdrop-blur-sm rounded-2xl px-6 py-3 border border-white/10">
            {[
              "Atención inmediata",
              "Evaluación sin costo",
              "Confidencialidad total",
            ].map((point) => (
              <div key={point} className="flex items-center gap-1.5">
                <svg className="w-5 h-5 text-cta" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {point}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
