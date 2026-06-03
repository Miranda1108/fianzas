"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LeadFormSection() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    telefono: "",
    tipoFianza: "",
    monto: "",
    mensaje: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hola, solicito cotización de fianza.\n\nNombre: ${formData.nombre}\nEmpresa: ${formData.empresa}\nTeléfono: ${formData.telefono}\nTipo de fianza: ${formData.tipoFianza}\nMonto del contrato: ${formData.monto}\nMensaje: ${formData.mensaje}`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/525659957036?text=${encoded}`, "_blank");
    router.push("/gracias");
  };

  const benefits = [
    "Cotización en menos de 2 horas",
    "Sin costo ni compromiso",
    "Asesoría personalizada",
    "Emisión en 24-48 hrs con documentación completa",
  ];

  return (
    <section id="formulario" className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Info */}
          <div className="reveal-left">
            <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl font-bold text-navy mb-4">
              Cotiza tu fianza sin compromiso
            </h2>
            <p className="text-gray-muted text-base leading-relaxed mb-8">
              Completa el formulario y uno de nuestros asesores se pondrá en
              contacto contigo para brindarte una cotización personalizada.
              Cotización en menos de 2 horas. Emisión en 24-48 hrs con documentación completa.
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-brand"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span className="font-[var(--font-body)] text-gray-text text-sm">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Form */}
          <div className="reveal-right">
            <div className="card-clean p-8">
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  required
                  placeholder="Nombre completo *"
                  value={formData.nombre}
                  onChange={(e) =>
                    setFormData({ ...formData, nombre: e.target.value })
                  }
                  className="input-field"
                />

                <input
                  type="tel"
                  required
                  placeholder="WhatsApp / Teléfono *"
                  value={formData.telefono}
                  onChange={(e) =>
                    setFormData({ ...formData, telefono: e.target.value })
                  }
                  className="input-field"
                />

                <select
                  required
                  value={formData.tipoFianza}
                  onChange={(e) =>
                    setFormData({ ...formData, tipoFianza: e.target.value })
                  }
                  className="input-field"
                >
                  <option value="" disabled>
                    Tipo de fianza *
                  </option>
                  <option value="Cumplimiento">Cumplimiento</option>
                  <option value="Arrendamiento">Arrendamiento</option>
                  <option value="Judicial">Judicial</option>
                  <option value="Administrativa">Administrativa</option>
                  <option value="Anticipo">Anticipo</option>
                  <option value="Licitación / Sostenimiento de propuesta">Licitación / Sostenimiento de propuesta</option>
                  <option value="Vicios ocultos">Vicios ocultos / buena calidad</option>
                  <option value="Fidelidad">Fidelidad</option>
                  <option value="No estoy seguro">No sé cuál necesito</option>
                </select>

                <input
                  type="text"
                  required
                  placeholder="Monto del contrato (MXN) *"
                  value={formData.monto}
                  onChange={(e) =>
                    setFormData({ ...formData, monto: e.target.value })
                  }
                  className="input-field"
                />

                <input
                  type="text"
                  placeholder="Nombre de la empresa (opcional)"
                  value={formData.empresa}
                  onChange={(e) =>
                    setFormData({ ...formData, empresa: e.target.value })
                  }
                  className="input-field"
                />

                <textarea
                  placeholder="Mensaje / contexto adicional (opcional)"
                  value={formData.mensaje}
                  onChange={(e) =>
                    setFormData({ ...formData, mensaje: e.target.value })
                  }
                  rows={3}
                  className="input-field resize-none"
                />

                <button type="submit" className="btn-primary w-full">
                  Enviar solicitud &rarr;
                </button>

                <p className="text-xs text-gray-muted text-center mt-3 flex items-center justify-center gap-1">
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                  Tu información está protegida y no será compartida.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
