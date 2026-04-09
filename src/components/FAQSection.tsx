"use client";

import { useState } from "react";

const FAQS = [
  {
    question: "¿Qué es una fianza?",
    answer: "Es un contrato de garantía emitido por una afianzadora que asegura el cumplimiento de obligaciones contractuales. Si el contratista no cumple, la afianzadora responde económicamente ante el beneficiario.",
    icon: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    question: "¿Cuánto cuesta una fianza en México?",
    answer: "La prima va del 1% al 3% del monto del contrato, dependiendo del perfil financiero, tipo de fianza e historial crediticio. Por ejemplo, para un contrato de $5,000,000 MXN con prima del 1.5%, el costo sería aproximadamente $75,000 MXN.",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    question: "¿Qué tipos de fianzas existen?",
    answer: "Las principales son: fianza de cumplimiento (garantiza el contrato), de anticipo (respalda el uso del anticipo), de licitación (para participar en concursos públicos) y de vicios ocultos (cubre defectos post-entrega).",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
  },
  {
    question: "¿Qué documentos necesito para tramitar una fianza?",
    answer: "Contrato fuente o fallo, acta constitutiva, INE del representante legal, constancia fiscal vigente, estados financieros, declaración anual y cédula profesional del contador.",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    question: "¿Cuánto tiempo tarda obtener una fianza?",
    answer: "Con documentación completa, el proceso puede tomar de 24 a 72 horas. En casos urgentes, es posible acelerar el trámite contactándonos por WhatsApp.",
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    question: "¿Necesito obligado solidario?",
    answer: "Depende del monto y del perfil financiero. En algunos casos la afianzadora lo solicita como garantía adicional de recuperación. Evaluamos tu caso para darte la mejor opción.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
  },
  {
    question: "¿Puedo obtener fianza si mi Buró no es perfecto?",
    answer: "Sí, trabajamos con múltiples afianzadoras con diferentes criterios de evaluación. Analizamos tu caso para encontrar la mejor opción disponible.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    question: "¿Qué pasa si no cumplo con el contrato?",
    answer: "La afianzadora puede hacer exigible la fianza, lo que significa que pagará al beneficiario y luego te cobrará el monto a ti como contratista (derecho de recuperación).",
    icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14 reveal">
          <span className="inline-block text-secondary font-semibold text-sm tracking-widest uppercase mb-3">FAQ</span>
          <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl font-extrabold text-primary mb-3">
            Preguntas Frecuentes
          </h2>
          <p className="text-text-muted text-lg">
            Resolvemos tus dudas sobre fianzas
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-secondary to-accent mx-auto rounded-full mt-4" />
        </div>

        <div className="space-y-3 stagger-children">
          {FAQS.map((faq, index) => (
            <div
              key={index}
              className={`rounded-2xl overflow-hidden transition-all duration-300 ${
                openIndex === index
                  ? "bg-white shadow-xl border-2 border-secondary/20"
                  : "bg-white border border-gray-100 hover:shadow-md hover:border-gray-200"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center gap-4 p-5 md:p-6 text-left transition-colors"
              >
                <span className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                  openIndex === index
                    ? "bg-gradient-to-br from-secondary to-blue-400 text-white shadow-md"
                    : "bg-bg-alt text-secondary"
                }`}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={faq.icon} />
                  </svg>
                </span>
                <span className="font-[var(--font-heading)] font-bold text-primary text-sm md:text-base flex-1 pr-2">
                  {faq.question}
                </span>
                <span
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openIndex === index
                      ? "bg-secondary text-white rotate-180"
                      : "bg-bg-alt text-text-muted"
                  }`}
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-5 md:px-6 pb-5 md:pb-6 text-text-body text-sm md:text-base leading-relaxed ml-14">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
