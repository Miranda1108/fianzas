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
    website: "", // honeypot anti-spam
  });
  const [archivos, setArchivos] = useState<File[]>([]);
  const [enviando, setEnviando] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEnviando(true);

    // Build payload — use FormData so we can attach files.
    const fd = new FormData();
    Object.entries(formData).forEach(([k, v]) => fd.append(k, v));
    fd.append("source", "home");
    archivos.forEach((f) => fd.append("archivos", f));

    try {
      await fetch("/api/lead", { method: "POST", body: fd });
    } catch {
      /* no bloquear al usuario si el correo falla */
    }

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
                {/* Honeypot: hidden field bots tend to fill */}
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.website}
                  onChange={(e) =>
                    setFormData({ ...formData, website: e.target.value })
                  }
                  aria-hidden="true"
                  style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
                />
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

                {/* Adjuntar documentos */}
                <div>
                  <label className="flex items-center justify-center gap-2 w-full cursor-pointer border border-dashed border-gray-border hover:border-brand rounded-xl px-4 py-3.5 text-sm text-gray-muted hover:text-brand transition-colors">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13" />
                    </svg>
                    Adjuntar documentos (opcional)
                    <input
                      type="file"
                      multiple
                      className="hidden"
                      onChange={(e) =>
                        setArchivos(e.target.files ? Array.from(e.target.files) : [])
                      }
                    />
                  </label>
                  {archivos.length > 0 && (
                    <ul className="mt-2 space-y-1">
                      {archivos.map((f, i) => (
                        <li key={i} className="flex items-center justify-between text-xs text-gray-text bg-gray-bg rounded-lg px-3 py-1.5">
                          <span className="truncate">{f.name}</span>
                          <button
                            type="button"
                            onClick={() => setArchivos(archivos.filter((_, j) => j !== i))}
                            className="text-gray-muted hover:text-red-500 ml-2 flex-shrink-0"
                            aria-label="Quitar archivo"
                          >
                            ✕
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                  <p className="text-[11px] text-gray-muted mt-1.5">
                    Cualquier formato · hasta 4 MB en total. Para archivos más pesados, envíalos por WhatsApp.
                  </p>
                </div>

                <button type="submit" disabled={enviando} className="btn-primary w-full disabled:opacity-70">
                  {enviando ? "Enviando…" : "Enviar solicitud →"}
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
