export default function SchemaMarkup() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Fianzify",
    description:
      "Fianzas rápidas, claras y sin complicaciones. Fianzas de cumplimiento, arrendamiento, judiciales y administrativas en México.",
    url: "https://fianzify.com",
    telephone: "+525512345678",
    email: "finanzifyfianzas@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ciudad de México",
      addressRegion: "CDMX",
      addressCountry: "MX",
    },
    areaServed: [
      { "@type": "Country", name: "México" },
    ],
    openingHours: "Mo-Fr 09:00-18:00",
    priceRange: "$$",
  };

  const services = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Fianza de Cumplimiento",
      description:
        "Garantiza el cumplimiento de obligaciones en contratos públicos o privados.",
      provider: { "@type": "LocalBusiness", name: "Fianzify" },
      areaServed: "México",
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Fianza de Arrendamiento",
      description:
        "Protege al arrendador garantizando el cumplimiento de las obligaciones del contrato de arrendamiento.",
      provider: { "@type": "LocalBusiness", name: "Fianzify" },
      areaServed: "México",
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Fianza Judicial",
      description:
        "Garantías requeridas en procesos judiciales como libertad caucional, pensiones alimenticias y otras obligaciones legales.",
      provider: { "@type": "LocalBusiness", name: "Fianzify" },
      areaServed: "México",
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Fianza Administrativa",
      description:
        "Avala el cumplimiento de obligaciones ante autoridades administrativas, permisos y concesiones.",
      provider: { "@type": "LocalBusiness", name: "Fianzify" },
      areaServed: "México",
    },
  ];

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué es una fianza?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Es un contrato de garantía emitido por una afianzadora que asegura el cumplimiento de obligaciones contractuales. Si el contratista no cumple, la afianzadora responde económicamente ante el beneficiario.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuánto cuesta una fianza en México?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La prima va del 1% al 3% del monto del contrato, dependiendo del perfil financiero, tipo de fianza e historial crediticio.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué tipos de fianzas existen?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Las principales son: fianza de cumplimiento, de arrendamiento, judicial y administrativa. Cada una protege un aspecto diferente de las obligaciones.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuánto tiempo tarda obtener una fianza?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La cotización toma menos de 2 horas. La emisión de la fianza se realiza en 24 a 48 horas con documentación completa.",
        },
      },
      {
        "@type": "Question",
        name: "¿Puedo obtener fianza si mi Buró no es perfecto?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, trabajamos con múltiples afianzadoras con diferentes criterios de evaluación. Analizamos tu caso para encontrar la mejor opción.",
        },
      },
    ],
  };

  // Note: dangerouslySetInnerHTML is safe here because the content is
  // hardcoded JSON schema data, not user-supplied input
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      {services.map((service, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
        />
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
    </>
  );
}
