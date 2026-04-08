import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aviso de Privacidad | Grupo Afianzador MX",
  description: "Aviso de privacidad de Grupo Afianzador MX conforme a la LFPDPPP.",
};

export default function AvisoPrivacidadPage() {
  return (
    <>
      <div className="bg-bg-alt border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="text-sm text-text-muted flex items-center gap-2">
            <Link href="/" className="hover:text-secondary transition-colors">Inicio</Link>
            <span>/</span>
            <span className="text-primary font-medium">Aviso de Privacidad</span>
          </nav>
        </div>
      </div>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-[var(--font-heading)] text-3xl md:text-4xl font-extrabold text-primary mb-8">
            Aviso de Privacidad
          </h1>

          <div className="prose max-w-none text-text-body leading-relaxed space-y-6">
            <p>
              <strong>Grupo Afianzador MX</strong> (MB Asociados), con domicilio en la Ciudad de México, es responsable del tratamiento de los datos personales que nos proporcione, los cuales serán protegidos conforme a lo dispuesto por la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) y demás normatividad aplicable.
            </p>

            <h2 className="font-[var(--font-heading)] text-xl font-bold text-primary mt-8">¿Qué datos personales recabamos?</h2>
            <p>Para las finalidades señaladas en el presente aviso de privacidad, podemos recabar los siguientes datos personales:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Nombre completo</li>
              <li>Denominación o razón social de la empresa</li>
              <li>Teléfono y/o número de WhatsApp</li>
              <li>Correo electrónico</li>
              <li>Tipo de fianza requerida</li>
              <li>Monto del contrato</li>
              <li>Información financiera proporcionada voluntariamente para la evaluación</li>
            </ul>

            <h2 className="font-[var(--font-heading)] text-xl font-bold text-primary mt-8">¿Para qué fines utilizamos sus datos personales?</h2>
            <p>Los datos personales que recabamos serán utilizados para las siguientes finalidades:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Evaluar la viabilidad de emisión de fianzas</li>
              <li>Contactarlo para dar seguimiento a su solicitud</li>
              <li>Proporcionarle cotizaciones y opciones de fianzas</li>
              <li>Gestionar el trámite de fianzas ante las afianzadoras</li>
              <li>Cumplir con obligaciones legales y regulatorias</li>
            </ul>

            <h2 className="font-[var(--font-heading)] text-xl font-bold text-primary mt-8">¿Con quién compartimos su información?</h2>
            <p>
              Sus datos personales podrán ser compartidos con las afianzadoras con las que trabajamos, exclusivamente para los fines de evaluación y emisión de fianzas. No vendemos ni compartimos su información con terceros para fines comerciales o publicitarios.
            </p>

            <h2 className="font-[var(--font-heading)] text-xl font-bold text-primary mt-8">Derechos ARCO</h2>
            <p>
              Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las condiciones del uso que les damos (Acceso). Asimismo, es su derecho solicitar la corrección de su información personal en caso de que esté desactualizada, sea inexacta o incompleta (Rectificación); que la eliminemos de nuestros registros o bases de datos cuando considere que la misma no está siendo utilizada adecuadamente (Cancelación); así como oponerse al uso de sus datos personales para fines específicos (Oposición).
            </p>
            <p>
              Para el ejercicio de cualquiera de los derechos ARCO, puede enviar un correo electrónico a <strong>contacto@afianzadormx.com</strong>.
            </p>

            <h2 className="font-[var(--font-heading)] text-xl font-bold text-primary mt-8">Cambios al aviso de privacidad</h2>
            <p>
              Nos reservamos el derecho de efectuar en cualquier momento modificaciones o actualizaciones al presente aviso de privacidad. Estas modificaciones estarán disponibles en nuestro sitio web.
            </p>

            <p className="text-text-muted text-sm mt-8">
              Última actualización: Abril 2026
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
