export default function SchemaMarkup() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Grupo Afianzador MX",
    description:
      "Especialistas en fianzas para proveedores de gobierno en CDMX y Estado de México. Fianzas de cumplimiento, anticipo, licitación y vicios ocultos.",
    url: "https://grupoafianzadormx.com",
    telephone: "+525512345678",
    email: "contacto@afianzadormx.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ciudad de México",
      addressRegion: "CDMX",
      addressCountry: "MX",
    },
    areaServed: [
      { "@type": "State", name: "Ciudad de México" },
      { "@type": "State", name: "Estado de México" },
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
        "Garantiza el cumplimiento total del contrato firmado con gobierno o particulares.",
      provider: { "@type": "LocalBusiness", name: "Grupo Afianzador MX" },
      areaServed: "CDMX y Estado de México",
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Fianza de Anticipo",
      description:
        "Respalda el uso correcto del anticipo recibido para iniciar trabajos.",
      provider: { "@type": "LocalBusiness", name: "Grupo Afianzador MX" },
      areaServed: "CDMX y Estado de México",
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Fianza de Licitación",
      description:
        "Requisito para participar en concursos y licitaciones públicas.",
      provider: { "@type": "LocalBusiness", name: "Grupo Afianzador MX" },
      areaServed: "CDMX y Estado de México",
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Fianza de Vicios Ocultos",
      description:
        "Cubre defectos posteriores a la entrega de obra por un plazo determinado.",
      provider: { "@type": "LocalBusiness", name: "Grupo Afianzador MX" },
      areaServed: "CDMX y Estado de México",
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
          text: "Las principales son: fianza de cumplimiento, de anticipo, de licitación y de vicios ocultos. Cada una protege un aspecto diferente del contrato.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuánto tiempo tarda obtener una fianza?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Con documentación completa, el proceso puede tomar de 24 a 72 horas. En casos urgentes, es posible acelerar el trámite.",
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
