"use client";

import { useState, useEffect } from "react";

const TESTIMONIALS = [
  {
    name: "Ing. Roberto Méndez",
    company: "Constructora Méndez y Asociados",
    text: "Nos adjudicaron una licitación federal y necesitábamos la fianza de cumplimiento en 48 horas. Grupo Afianzador MX nos resolvió en tiempo récord con una prima muy competitiva.",
    rating: 5,
  },
  {
    name: "Lic. Patricia Hernández",
    company: "Servicios Integrales PHG",
    text: "Como nueva proveedora de gobierno, no sabía cómo funciona el proceso de fianzas. El equipo me guió paso a paso y logré presentar mi fianza de licitación a tiempo.",
    rating: 5,
  },
  {
    name: "Arq. Carlos Domínguez",
    company: "Grupo Constructivo CDMX",
    text: "Llevamos 3 años trabajando con ellos. Siempre consiguen las mejores tasas porque trabajan con múltiples afianzadoras. Recomendados al 100%.",
    rating: 5,
  },
  {
    name: "C.P. María Torres",
    company: "Torres Consultoría Fiscal",
    text: "La evaluación sin costo nos permitió conocer nuestras opciones antes de comprometernos. El proceso fue transparente y profesional de principio a fin.",
    rating: 5,
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
    <section className="py-16 md:py-24 bg-bg-alt overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 reveal">
          <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl font-extrabold text-primary mb-3">
            Lo que dicen nuestros clientes
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mt-4" />
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Cards */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {TESTIMONIALS.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 md:p-10 text-center">
                    {/* Stars */}
                    <div className="flex justify-center gap-1 mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-text-body text-base md:text-lg leading-relaxed mb-6 italic">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>

                    {/* Author */}
                    <div className="flex items-center justify-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </div>
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

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  current === index
                    ? "bg-secondary w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Testimonio ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
