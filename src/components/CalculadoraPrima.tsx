"use client";

import { useState } from "react";

export default function CalculadoraPrima() {
  const [rawValue, setRawValue] = useState("");

  const montoNum = parseInt(rawValue, 10) || 0;
  const primaMin = montoNum * 0.01;
  const primaMax = montoNum * 0.03;

  const formatMXN = (n: number) =>
    new Intl.NumberFormat("es-MX", {
      style: "currency",
      currency: "MXN",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(n);

  const displayValue =
    montoNum > 0 ? "$" + new Intl.NumberFormat("es-MX").format(montoNum) : "";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digits = e.target.value.replace(/\D/g, "");
    setRawValue(digits);
  };

  return (
    <section className="bg-gray-bg py-16 md:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 reveal">
          <h2 className="font-[var(--font-heading)] font-semibold text-2xl md:text-3xl text-navy mb-3">
            Calcula tu prima estimada
          </h2>
          <p className="text-gray-muted text-sm max-w-lg mx-auto">
            Ingresa el monto de tu contrato y obtén un estimado de cuánto costaría tu fianza.
          </p>
        </div>

        <div className="card-clean p-8 reveal">
          {/* Input */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-navy mb-2">
              Monto de tu contrato (MXN)
            </label>
            <input
              type="text"
              value={displayValue}
              onChange={handleChange}
              placeholder="$1,500,000"
              className="input-field text-lg font-semibold text-navy"
              inputMode="numeric"
            />
          </div>

          {/* Result */}
          {montoNum > 0 && (
            <div className="bg-brand/5 border border-brand/20 rounded-xl p-6 text-center animate-in fade-in">
              <p className="text-sm text-gray-muted mb-2">Tu prima estimada</p>
              <p className="font-[var(--font-heading)] text-2xl md:text-3xl font-bold text-brand">
                {formatMXN(primaMin)} — {formatMXN(primaMax)}
              </p>
              <p className="text-xs text-gray-muted mt-2">
                (entre el 1% y 3% del monto afianzado)
              </p>
            </div>
          )}

          {/* Note */}
          <p className="text-xs text-gray-muted text-center mt-4">
            La prima exacta depende de tu perfil financiero e historial crediticio. Cotiza sin compromiso para obtener el monto exacto.
          </p>

          {/* CTA */}
          <div className="flex justify-center mt-6">
            <a
              href="/#formulario"
              className="btn-primary inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold"
            >
              Cotizar mi fianza
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
