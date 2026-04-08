"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    telefono: "",
    email: "",
    tipoFianza: "",
    monto: "",
    mensaje: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hola, solicito información sobre fianzas.\n\nNombre: ${formData.nombre}\nEmpresa: ${formData.empresa}\nTeléfono: ${formData.telefono}\nEmail: ${formData.email}\nTipo de fianza: ${formData.tipoFianza}\nMonto: ${formData.monto}\nMensaje: ${formData.mensaje}`;
    window.open(`https://wa.me/521XXXXXXXXXX?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-bg-alt border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="text-sm text-text-muted flex items-center gap-2">
            <Link href="/" className="hover:text-secondary transition-colors">Inicio</Link>
            <span>/</span>
            <span className="text-primary font-medium">Contacto</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary/90 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-[var(--font-heading)] text-3xl md:text-5xl font-extrabold text-white mb-4">
            Contacto
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Estamos listos para ayudarte. Contáctanos y recibe una evaluación sin costo.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-bg-alt rounded-2xl p-6 border border-gray-100">
                <h3 className="font-[var(--font-heading)] font-bold text-primary mb-4">Información de contacto</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <span className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-xs text-text-muted">Teléfono</p>
                      <p className="text-sm font-medium text-primary">55 1234 5678</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-10 h-10 bg-cta/10 rounded-xl flex items-center justify-center text-cta">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                    </span>
                    <div>
                      <p className="text-xs text-text-muted">WhatsApp</p>
                      <p className="text-sm font-medium text-primary">55 1234 5678</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-xs text-text-muted">Email</p>
                      <p className="text-sm font-medium text-primary">contacto@afianzadormx.com</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-xs text-text-muted">Ubicación</p>
                      <p className="text-sm font-medium text-primary">CDMX | Edo. de México</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-bg-alt rounded-2xl p-6 border border-gray-100">
                <h3 className="font-[var(--font-heading)] font-bold text-primary mb-2">Horario de atención</h3>
                <p className="text-text-muted text-sm">Lunes a Viernes: 9:00 - 18:00 hrs</p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <h2 className="font-[var(--font-heading)] text-2xl font-bold text-primary mb-6">
                Envíanos un mensaje
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" required placeholder="Nombre completo" value={formData.nombre} onChange={(e) => setFormData({ ...formData, nombre: e.target.value })} className="w-full px-4 py-3.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent" />
                  <input type="text" required placeholder="Empresa" value={formData.empresa} onChange={(e) => setFormData({ ...formData, empresa: e.target.value })} className="w-full px-4 py-3.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="tel" required placeholder="Teléfono / WhatsApp" value={formData.telefono} onChange={(e) => setFormData({ ...formData, telefono: e.target.value })} className="w-full px-4 py-3.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent" />
                  <input type="email" placeholder="Email (opcional)" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <select required value={formData.tipoFianza} onChange={(e) => setFormData({ ...formData, tipoFianza: e.target.value })} className="w-full px-4 py-3.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent appearance-none bg-white">
                    <option value="" disabled>Tipo de fianza</option>
                    <option value="Cumplimiento">Cumplimiento</option>
                    <option value="Anticipo">Anticipo</option>
                    <option value="Licitación">Licitación</option>
                    <option value="Vicios Ocultos">Vicios Ocultos</option>
                    <option value="No estoy seguro">No estoy seguro</option>
                  </select>
                  <input type="text" placeholder="Monto del contrato" value={formData.monto} onChange={(e) => setFormData({ ...formData, monto: e.target.value })} className="w-full px-4 py-3.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent" />
                </div>
                <textarea rows={4} placeholder="Mensaje adicional (opcional)" value={formData.mensaje} onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })} className="w-full px-4 py-3.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent resize-none" />
                <button type="submit" className="w-full bg-cta hover:bg-cta-hover text-white font-bold py-4 rounded-full transition-all duration-300 text-lg shadow-lg hover:shadow-xl">
                  Enviar información
                </button>
                <p className="text-xs text-text-muted text-center">
                  Tu información está protegida. Consulta nuestro{" "}
                  <Link href="/aviso-privacidad" className="text-secondary underline">Aviso de Privacidad</Link>.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
