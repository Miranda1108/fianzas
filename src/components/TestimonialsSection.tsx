"use client";

import { useState, useEffect } from "react";

const TESTIMONIALS = [
  {
    name: "Ing. Roberto Méndez",
    company: "Constructora Méndez y Asociados",
    text: "Nos adjudicaron una licitación federal y necesitábamos la fianza de cumplimiento en 48 horas. Grupo Afianzador MX nos resolvió en tiempo récord con una prima muy competitiva.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face",
  },
  {
    name: "Lic. Patricia Hernández",
    company: "Servicios Integrales PHG",
    text: "Como nueva proveedora de gobierno, no sabía cómo funciona el proceso de fianzas. El equipo me guió paso a paso y logré presentar mi fianza de licitación a tiempo.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&crop=face",
  },
  {
    name: "Arq. Carlos Domínguez",
    company: "Grupo Constructivo CDMX",
    text: "Llevamos 3 años trabajando con ellos. Siempre consiguen las mejores tasas porque trabajan con múltiples afianzadoras. Recomendados al 100%.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&crop=face",
  },
  {
    name: "C.P. María Torres",
    company: "Torres Consultoría Fiscal",
    text: "La evaluación sin costo nos permitió conocer nuestras opciones antes de comprometernos. El proceso fue transparente y profesional de principio a fin.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&crop=face",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-primary to-primary/95 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 reveal">
          <span className="inline-block text-accent font-semibold text-sm tracking-widest uppercase mb-3">Testimonios</span>
          <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl font-extrabold text-white mb-3">
            Lo que dicen nuestros clientes
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-secondary mx-auto rounded-full mt-4" />
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Cards */}
          <div className="overflow-hidden rounded-3xl">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {TESTIMONIALS.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="glass rounded-3xl p-8 md:p-10 text-center relative">
                    {/* Quote mark decoration */}
                    <div className="absolute top-6 left-8 text-secondary/20 text-7xl font-serif leading-none">&ldquo;</div>

                    {/* Stars */}
                    <div className="flex justify-center gap-1 mb-6 relative z-10">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-text-body text-base md:text-lg leading-relaxed mb-8 italic relative z-10">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>

                    {/* Author */}
                    <div className="flex items-center justify-center gap-4 relative z-10">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover border-2 border-secondary shadow-lg"
                      />
                      <div className="text-left">
                        <p className="font-[var(--font-heading)] font-bold text-primary text-sm">
                          {testimonial.name}
                        </p>
                        <p className="text-text-muted text-xs">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-3 mt-8">
            <button
              onClick={() => setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
              className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
              aria-label="Anterior"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  current === index
                    ? "bg-accent w-8"
                    : "bg-white/30 w-2 hover:bg-white/50"
                }`}
                aria-label={`Testimonio ${index + 1}`}
              />
            ))}

            <button
              onClick={() => setCurrent((prev) => (prev + 1) % TESTIMONIALS.length)}
              className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
              aria-label="Siguiente"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
