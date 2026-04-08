"use client";

import { useState } from "react";

export default function LeadFormSection() {
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    telefono: "",
    tipoFianza: "",
    monto: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build WhatsApp message with form data
    const message = `Hola, solicito evaluación para fianza.\n\nNombre: ${formData.nombre}\nEmpresa: ${formData.empresa}\nTeléfono: ${formData.telefono}\nTipo de fianza: ${formData.tipoFianza}\nMonto del contrato: ${formData.monto}`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/521XXXXXXXXXX?text=${encoded}`, "_blank");
  };

  return (
    <section id="formulario" className="py-16 md:py-24 bg-bg-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Cost Card (combined layout as in image) */}
          <div className="space-y-8">
            {/* Cost card */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
              <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl font-extrabold text-primary mb-2">
                ¿Cuánto cuesta<br />una fianza?
              </h2>
              <p className="text-text-body text-base mb-6 leading-relaxed">
                El costo promedio en México va del{" "}
                <span className="font-bold text-cta">1% al 3%</span> del monto
                del contrato.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Depende del perfil financiero",
                  "Del monto y tipo de fianza",
                  "Te damos cotización sin costo",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-cta rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-text-body text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/521XXXXXXXXXX?text=Hola%2C%20quiero%20saber%20cu%C3%A1nto%20cuesta%20una%20fianza.%20%C2%BFMe%20pueden%20apoyar%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-cta hover:bg-cta-hover text-white font-bold px-6 py-3.5 rounded-full transition-all duration-300 text-base shadow-md hover:shadow-lg"
              >
                Cotiza ahora
              </a>
            </div>
          </div>

          {/* Right: Lead Form */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
            <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl font-extrabold text-primary mb-2 text-center">
              Solicita tu evaluación<br />sin costo
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full mt-2 mb-8" />

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <input
                  type="text"
                  required
                  placeholder="Nombre completo"
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  className="w-full pl-12 pr-4 py-3.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                />
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <input
                  type="text"
                  required
                  placeholder="Empresa"
                  value={formData.empresa}
                  onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                  className="w-full pl-12 pr-4 py-3.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                />
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <input
                  type="tel"
                  required
                  placeholder="Teléfono / WhatsApp"
                  value={formData.telefono}
                  onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                  className="w-full pl-12 pr-4 py-3.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                />
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <select
                  required
                  value={formData.tipoFianza}
                  onChange={(e) => setFormData({ ...formData, tipoFianza: e.target.value })}
                  className="w-full pl-12 pr-4 py-3.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all appearance-none bg-white"
                >
                  <option value="" disabled>Tipo de fianza</option>
                  <option value="Cumplimiento">Cumplimiento</option>
                  <option value="Anticipo">Anticipo</option>
                  <option value="Licitación">Licitación</option>
                  <option value="Vicios Ocultos">Vicios Ocultos</option>
                  <option value="No estoy seguro">No estoy seguro</option>
                </select>
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-gray-400">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <span className="text-lg font-medium">$</span>
                </div>
                <input
                  type="text"
                  required
                  placeholder="Monto del contrato"
                  value={formData.monto}
                  onChange={(e) => setFormData({ ...formData, monto: e.target.value })}
                  className="w-full pl-12 pr-4 py-3.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-cta hover:bg-cta-hover text-white font-bold py-4 rounded-full transition-all duration-300 text-lg shadow-lg hover:shadow-xl flex items-center justify-center gap-2 mt-2"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                Enviar información
              </button>

              <p className="text-xs text-text-muted text-center mt-3">
                <svg className="w-3.5 h-3.5 inline-block mr-1 text-cta" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Tu información está protegida. Consulta nuestro{" "}
                <a href="/aviso-privacidad" className="text-secondary underline hover:text-primary">
                  Aviso de Privacidad
                </a>.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
