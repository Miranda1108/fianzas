import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Términos y Condiciones | Fianzify",
  description:
    "Términos y condiciones de uso del sitio web y los servicios de intermediación de fianzas de Fianzify.",
  openGraph: {
    title: "Términos y Condiciones | Fianzify",
    description: "Términos y condiciones de uso del sitio web y los servicios de intermediación de fianzas de Fianzify.",
    type: "website",
  },
};

export default function TerminosYCondicionesPage() {
  return (
    <>
      <div className="bg-gray-bg border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="text-sm text-gray-muted flex items-center gap-2">
            <Link href="/" className="hover:text-brand transition-colors">Inicio</Link>
            <span>/</span>
            <span className="text-navy font-medium">Términos y Condiciones</span>
          </nav>
        </div>
      </div>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-[var(--font-heading)] text-3xl md:text-4xl font-extrabold text-navy mb-8">
            Términos y Condiciones
          </h1>

          <div className="prose max-w-none text-gray-text leading-relaxed space-y-6">
            <p>
              Al acceder y utilizar el sitio web de <strong>Fianzify</strong> y sus servicios,
              usted acepta los presentes Términos y Condiciones. Le recomendamos leerlos
              detenidamente. Si no está de acuerdo con ellos, le pedimos abstenerse de usar el sitio.
            </p>

            <h2 className="font-[var(--font-heading)] text-xl font-bold text-navy mt-8">1. Naturaleza del servicio</h2>
            <p>
              Fianzify es un intermediario que conecta a usuarios y empresas con afianzadoras
              autorizadas y reguladas por la Comisión Nacional de Seguros y Fianzas (CNSF) en México.
              Fianzify no emite fianzas directamente; la emisión, evaluación y aprobación final
              corresponde a cada afianzadora conforme a sus propios criterios.
            </p>

            <h2 className="font-[var(--font-heading)] text-xl font-bold text-navy mt-8">2. Cotizaciones</h2>
            <p>
              Las cotizaciones y estimaciones presentadas en el sitio son orientativas y no
              constituyen una oferta vinculante. La prima y las condiciones definitivas dependen
              de la evaluación de la afianzadora y del perfil financiero de cada solicitante.
            </p>

            <h2 className="font-[var(--font-heading)] text-xl font-bold text-navy mt-8">3. Información proporcionada por el usuario</h2>
            <p>
              El usuario se compromete a proporcionar información veraz, completa y actualizada.
              Fianzify no se hace responsable por retrasos o rechazos derivados de información
              incorrecta o documentación incompleta.
            </p>

            <h2 className="font-[var(--font-heading)] text-xl font-bold text-navy mt-8">4. Uso del sitio</h2>
            <p>
              El usuario se obliga a utilizar el sitio de manera lícita y a no realizar conductas
              que puedan dañar, inhabilitar o sobrecargar la plataforma, ni intentar acceder a
              áreas restringidas o a datos de otros usuarios.
            </p>

            <h2 className="font-[var(--font-heading)] text-xl font-bold text-navy mt-8">5. Propiedad intelectual</h2>
            <p>
              Los contenidos, marcas, logotipos y elementos gráficos del sitio son propiedad de
              Fianzify o de sus respectivos titulares. Los logotipos de las afianzadoras pertenecen
              a sus propietarios y se muestran únicamente con fines informativos.
            </p>

            <h2 className="font-[var(--font-heading)] text-xl font-bold text-navy mt-8">6. Limitación de responsabilidad</h2>
            <p>
              Fianzify no será responsable por daños directos o indirectos derivados del uso del
              sitio, de la imposibilidad de uso, o de las decisiones tomadas por las afianzadoras
              respecto a la emisión de fianzas.
            </p>

            <h2 className="font-[var(--font-heading)] text-xl font-bold text-navy mt-8">7. Modificaciones</h2>
            <p>
              Fianzify se reserva el derecho de modificar en cualquier momento estos Términos y
              Condiciones. Las modificaciones entrarán en vigor a partir de su publicación en este sitio.
            </p>

            <h2 className="font-[var(--font-heading)] text-xl font-bold text-navy mt-8">8. Legislación aplicable</h2>
            <p>
              Estos Términos y Condiciones se rigen por la legislación mexicana. Para cualquier
              controversia, las partes se someten a la jurisdicción de los tribunales competentes
              de la Ciudad de México.
            </p>

            <h2 className="font-[var(--font-heading)] text-xl font-bold text-navy mt-8">9. Contacto</h2>
            <p>
              Para dudas sobre estos Términos y Condiciones, escríbenos a{" "}
              <strong>finanzifyfianzas@gmail.com</strong>.
            </p>

            <p className="text-gray-muted text-sm mt-8">Última actualización: Mayo 2025</p>
          </div>
        </div>
      </section>
    </>
  );
}
