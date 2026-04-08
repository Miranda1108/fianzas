"use client";

import { useState } from "react";

const FAQS = [
  {
    question: "¿Qué es una fianza?",
    answer: "Es un contrato de garantía emitido por una afianzadora que asegura el cumplimiento de obligaciones contractuales. Si el contratista no cumple, la afianzadora responde económicamente ante el beneficiario.",
  },
  {
    question: "¿Cuánto cuesta una fianza en México?",
    answer: "La prima va del 1% al 3% del monto del contrato, dependiendo del perfil financiero, tipo de fianza e historial crediticio. Por ejemplo, para un contrato de $5,000,000 MXN con prima del 1.5%, el costo sería aproximadamente $75,000 MXN.",
  },
  {
    question: "¿Qué tipos de fianzas existen?",
    answer: "Las principales son: fianza de cumplimiento (garantiza el contrato), de anticipo (respalda el uso del anticipo), de licitación (para participar en concursos públicos) y de vicios ocultos (cubre defectos post-entrega).",
  },
  {
    question: "¿Qué documentos necesito para tramitar una fianza?",
    answer: "Contrato fuente o fallo, acta constitutiva, INE del representante legal, constancia fiscal vigente, estados financieros, declaración anual y cédula profesional del contador.",
  },
  {
    question: "¿Cuánto tiempo tarda obtener una fianza?",
    answer: "Con documentación completa, el proceso puede tomar de 24 a 72 horas. En casos urgentes, es posible acelerar el trámite contactándonos por WhatsApp.",
  },
  {
    question: "¿Necesito obligado solidario?",
    answer: "Depende del monto y del perfil financiero. En algunos casos la afianzadora lo solicita como garantía adicional de recuperación. Evaluamos tu caso para darte la mejor opción.",
  },
  {
    question: "¿Puedo obtener fianza si mi Buró no es perfecto?",
    answer: "Sí, trabajamos con múltiples afianzadoras con diferentes criterios de evaluación. Analizamos tu caso para encontrar la mejor opción disponible.",
  },
  {
    question: "¿Qué pasa si no cumplo con el contrato?",
    answer: "La afianzadora puede hacer exigible la fianza, lo que significa que pagará al beneficiario y luego te cobrará el monto a ti como contratista (derecho de recuperación).",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 reveal">
          <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl font-extrabold text-primary mb-3">
            Preguntas Frecuentes
          </h2>
          <p className="text-text-muted text-lg">
            Resolvemos tus dudas sobre fianzas
          </p>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mt-4" />
        </div>

        <div className="space-y-3 stagger-children">
          {FAQS.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-100 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 md:p-6 text-left bg-white hover:bg-bg-alt/50 transition-colors"
              >
                <span className="font-[var(--font-heading)] font-bold text-primary text-sm md:text-base pr-4">
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
                <div className="px-5 md:px-6 pb-5 md:pb-6 text-text-body text-sm md:text-base leading-relaxed border-t border-gray-50">
                  <p className="pt-4">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
