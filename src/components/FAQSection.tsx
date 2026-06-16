"use client";

import { useState } from "react";

const FAQS = [
  {
    question: "¿Qué es una fianza?",
    answer:
      "Es un contrato de garantía emitido por una afianzadora que asegura el cumplimiento de obligaciones contractuales. Si el contratista no cumple, la afianzadora responde económicamente ante el beneficiario.",
  },
  {
    question: "¿Cuánto cuesta una fianza?",
    answer:
      "La prima va del 1% al 3% del monto del contrato, dependiendo del perfil financiero, tipo de fianza e historial crediticio. Por ejemplo, para un contrato de $5,000,000 MXN con prima del 1.5%, el costo sería aproximadamente $75,000 MXN.",
  },
  {
    question: "¿Qué tipos de fianzas manejan?",
    answer:
      "Manejamos fianzas de cumplimiento, arrendamiento, judiciales y administrativas.",
  },
  {
    question: "¿Qué documentos necesito?",
    answer:
      "Contrato fuente o fallo, acta constitutiva, INE del representante legal, constancia fiscal vigente, estados financieros, declaración anual y cédula profesional del contador.",
  },
  {
    question: "¿Cuánto tiempo tarda obtener una fianza?",
    answer:
      "Con documentación completa, respondemos en menos de 2 horas y el proceso puede completarse en 24-48 horas.",
  },
  {
    question: "¿Necesito un obligado solidario?",
    answer:
      "La afianzadora define este requisito de acuerdo con el análisis financiero, el monto de la fianza y el riesgo de la operación. En determinados casos, puede solicitar un obligado solidario como respaldo adicional para fortalecer la garantía otorgada. Cada caso es evaluado de forma individual.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-gray-bg py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 reveal">
          <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl font-semibold text-navy mb-3">
            Preguntas frecuentes
          </h2>
          <p className="text-gray-muted text-base">
            Resolvemos tus dudas sobre fianzas
          </p>
        </div>

        <div className="stagger-children">
          {FAQS.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl border mb-3 transition-all duration-300 ${
                openIndex === index
                  ? "border-brand/30 shadow-sm"
                  : "border-gray-border hover:border-brand/30"
              }`}
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
              >
                <span className="font-[var(--font-heading)] font-semibold text-sm text-navy flex-1">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-gray-muted flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-90" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-5 pb-5 font-[var(--font-body)] text-sm text-gray-muted leading-relaxed">
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
