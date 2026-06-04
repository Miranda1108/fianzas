export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "cta"; text: string }
  | { type: "quote"; text: string };

export type Article = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  category: string;
  date: string;
  dateISO: string;
  readingTime: string;
  /** related fianza pages for internal linking */
  related: { href: string; label: string }[];
  content: Block[];
};

export const ARTICLES: Article[] = [
  {
    slug: "documentos-para-fianza-de-cumplimiento",
    title: "¿Qué documentos necesito para una fianza de cumplimiento?",
    metaTitle:
      "¿Qué documentos necesito para una fianza de cumplimiento? | Fianzify",
    metaDescription:
      "Lista completa de documentos para tramitar una fianza de cumplimiento en México: acta constitutiva, estados financieros, RFC y más. Guía actualizada 2025.",
    excerpt:
      "Reúne estos documentos antes de tramitar tu fianza de cumplimiento y acelera el proceso. Te explicamos qué pide cada afianzadora y por qué.",
    category: "Requisitos",
    date: "3 de junio de 2025",
    dateISO: "2025-06-03",
    readingTime: "6 min de lectura",
    related: [
      { href: "/fianza-de-cumplimiento", label: "Fianza de cumplimiento" },
      { href: "/fianza-de-anticipo", label: "Fianza de anticipo" },
      { href: "/fianza-de-licitacion", label: "Fianza de licitación" },
    ],
    content: [
      {
        type: "p",
        text: "Si te adjudicaron un contrato de obra pública o privada, lo más probable es que te exijan una fianza de cumplimiento. La buena noticia: tener la documentación lista desde el inicio puede reducir el tiempo de emisión de varios días a apenas unas horas. En esta guía te decimos exactamente qué documentos necesitas y por qué los pide la afianzadora.",
      },
      {
        type: "h2",
        text: "¿Por qué la afianzadora pide tantos documentos?",
      },
      {
        type: "p",
        text: "Una fianza de cumplimiento es una garantía: la afianzadora se compromete a responder económicamente si tu empresa no cumple el contrato. Por eso necesita evaluar dos cosas: que tu empresa existe legalmente y que tiene la capacidad financiera para respaldar la obligación. Los documentos se dividen justamente en esos dos grupos.",
      },
      {
        type: "h2",
        text: "Documentos legales de la empresa",
      },
      {
        type: "ul",
        items: [
          "Acta constitutiva de la empresa (con todas sus modificaciones).",
          "Poder notarial del representante legal que firmará la fianza.",
          "Identificación oficial vigente del representante legal (INE o pasaporte).",
          "Constancia de Situación Fiscal (RFC) actualizada.",
          "Comprobante de domicilio fiscal reciente (no mayor a 3 meses).",
        ],
      },
      {
        type: "h2",
        text: "Documentos financieros",
      },
      {
        type: "p",
        text: "Aquí la afianzadora confirma que tu empresa tiene solvencia. Mientras más sólida sea tu situación financiera, mejores condiciones y prima podrás obtener.",
      },
      {
        type: "ul",
        items: [
          "Estados financieros del ejercicio anterior (balance y estado de resultados).",
          "Estados financieros parciales del año en curso.",
          "Declaración anual del último ejercicio con su acuse de envío.",
          "Cédula profesional del contador que firma los estados financieros.",
          "En montos altos, puede solicitarse una garantía inmobiliaria adicional.",
        ],
      },
      {
        type: "h2",
        text: "Documentos del contrato a garantizar",
      },
      {
        type: "ul",
        items: [
          "Contrato fuente o fallo de adjudicación.",
          "Bases de la licitación, si aplica.",
          "Carátula o anexo donde se especifica el monto y porcentaje de la fianza requerida.",
        ],
      },
      {
        type: "h2",
        text: "¿Y si soy persona física?",
      },
      {
        type: "p",
        text: "Si operas como persona física con actividad empresarial, no necesitas acta constitutiva. En su lugar se piden tu identificación oficial, tu Constancia de Situación Fiscal, comprobante de domicilio, comprobante de ingresos o declaración anual, y el documento o contrato que vas a garantizar.",
      },
      {
        type: "h2",
        text: "Consejo para acelerar tu trámite",
      },
      {
        type: "p",
        text: "El error más común que retrasa una fianza es presentar documentación incompleta o desactualizada. Te recomendamos digitalizar todos los documentos en PDF legibles antes de iniciar y verificar que la Constancia de Situación Fiscal y el comprobante de domicilio sean recientes. Con todo en orden, en Fianzify te entregamos la cotización en menos de 2 horas y la emisión en 24 a 48 horas.",
      },
      {
        type: "cta",
        text: "¿Ya tienes tus documentos listos? Cotiza tu fianza de cumplimiento sin compromiso y recibe respuesta en menos de 2 horas.",
      },
    ],
  },
  {
    slug: "cuanto-cuesta-una-fianza-en-mexico",
    title: "¿Cuánto cuesta una fianza en México? Guía de precios 2025",
    metaTitle:
      "¿Cuánto cuesta una fianza en México? Precios y prima 2025 | Fianzify",
    metaDescription:
      "Descubre cuánto cuesta una fianza en México en 2025. Te explicamos la prima (1% a 3%), qué factores influyen en el precio y cómo calcular tu costo aproximado.",
    excerpt:
      "La prima de una fianza suele ir del 1% al 3% del monto garantizado. Te explicamos de qué depende el precio y cómo estimar tu costo.",
    category: "Costos",
    date: "3 de junio de 2025",
    dateISO: "2025-06-03",
    readingTime: "5 min de lectura",
    related: [
      { href: "/costos-fianzas", label: "Costos de fianzas" },
      { href: "/fianza-de-cumplimiento", label: "Fianza de cumplimiento" },
      { href: "/fianza-de-arrendamiento", label: "Fianza de arrendamiento" },
    ],
    content: [
      {
        type: "p",
        text: "Es la primera pregunta que hace todo cliente: ¿cuánto me va a costar la fianza? La respuesta corta es que pagas una prima que normalmente va del 1% al 3% del monto que vas a garantizar. La respuesta larga depende de varios factores que te explicamos a continuación.",
      },
      {
        type: "h2",
        text: "¿Qué es la prima de una fianza?",
      },
      {
        type: "p",
        text: "La prima es el costo que pagas a la afianzadora por emitir la garantía. No es un depósito ni se devuelve: es el precio del servicio, parecido a la prima de un seguro. Se calcula como un porcentaje del monto afianzado (el valor de la obligación que estás garantizando).",
      },
      {
        type: "h2",
        text: "¿Cuánto se paga? La regla del 1% al 3%",
      },
      {
        type: "p",
        text: "Como referencia general en México, la prima de la mayoría de las fianzas se ubica entre el 1% y el 3% anual sobre el monto garantizado. Por ejemplo:",
      },
      {
        type: "ul",
        items: [
          "Para un contrato de $1,000,000 MXN, la prima estimada va de $10,000 a $30,000 MXN.",
          "Para un contrato de $5,000,000 MXN, la prima estimada va de $50,000 a $150,000 MXN.",
          "Las fianzas de licitación suelen ser más baratas (desde 0.5%) por su corta vigencia.",
        ],
      },
      {
        type: "h2",
        text: "Factores que influyen en el precio",
      },
      {
        type: "ol",
        items: [
          "Tipo de fianza: una de licitación cuesta menos que una de cumplimiento o judicial.",
          "Monto garantizado: a mayor monto, mayor prima en términos absolutos.",
          "Vigencia: mientras más larga la vigencia, mayor el costo.",
          "Perfil financiero de la empresa: una empresa con buenos estados financieros e historial crediticio obtiene mejores tasas.",
          "Garantías adicionales: ofrecer una garantía inmobiliaria puede reducir la prima.",
        ],
      },
      {
        type: "h2",
        text: "¿Cómo estimar tu costo rápidamente?",
      },
      {
        type: "p",
        text: "Una forma sencilla de tener una idea: multiplica el monto de tu contrato por 0.01 (para el mínimo del 1%) y por 0.03 (para el máximo del 3%). Ese rango te da una estimación aproximada de la prima. Recuerda que el precio exacto depende de tu perfil y solo se confirma con una cotización formal.",
      },
      {
        type: "quote",
        text: "La prima exacta depende de tu perfil financiero e historial crediticio. Cotizar siempre es sin costo y sin compromiso.",
      },
      {
        type: "h2",
        text: "¿El costo más bajo es siempre el mejor?",
      },
      {
        type: "p",
        text: "No necesariamente. Como intermediarios, en Fianzify comparamos entre varias afianzadoras autorizadas para encontrar no solo el mejor precio, sino las condiciones más convenientes para tu caso: tiempos de emisión, requisitos y flexibilidad. A veces la opción más barata implica más requisitos o demoras que no te convienen si tienes un plazo ajustado.",
      },
      {
        type: "cta",
        text: "Obtén el costo exacto de tu fianza con una cotización gratuita. Respuesta en menos de 2 horas.",
      },
    ],
  },
  {
    slug: "diferencia-entre-fianza-y-seguro-de-caucion",
    title: "Diferencia entre fianza y seguro de caución en México",
    metaTitle:
      "Diferencia entre fianza y seguro de caución en México | Fianzify",
    metaDescription:
      "¿Fianza o seguro de caución? Te explicamos en qué se parecen, en qué se diferencian y cuál conviene según tu caso. Guía clara para empresas en México.",
    excerpt:
      "Fianza y seguro de caución cumplen una función parecida pero no son lo mismo. Te explicamos las diferencias clave para que elijas bien.",
    category: "Comparativa",
    date: "3 de junio de 2025",
    dateISO: "2025-06-03",
    readingTime: "5 min de lectura",
    related: [
      { href: "/fianza-de-cumplimiento", label: "Fianza de cumplimiento" },
      { href: "/fianza-administrativa", label: "Fianza administrativa" },
      { href: "/nosotros", label: "Conoce Fianzify" },
    ],
    content: [
      {
        type: "p",
        text: "Si estás buscando garantizar el cumplimiento de un contrato, probablemente te hayas topado con dos términos: fianza y seguro de caución. Se parecen mucho y a veces se usan como sinónimos, pero tienen diferencias importantes. Aquí te las explicamos en lenguaje claro.",
      },
      {
        type: "h2",
        text: "¿Qué tienen en común?",
      },
      {
        type: "p",
        text: "Ambas son garantías: respaldan económicamente que una obligación se cumpla. Si la parte obligada falla, un tercero (la afianzadora o aseguradora) responde ante el beneficiario. Las dos están reguladas en México por la Comisión Nacional de Seguros y Fianzas (CNSF) y se usan en contratos públicos y privados.",
      },
      {
        type: "h2",
        text: "La diferencia principal: quién las emite",
      },
      {
        type: "ul",
        items: [
          "La fianza la emite una afianzadora (institución especializada en fianzas).",
          "El seguro de caución lo emite una compañía de seguros.",
        ],
      },
      {
        type: "p",
        text: "En la práctica, ambas figuras conviven en el mercado mexicano y muchas instituciones están autorizadas para emitir las dos. La elección suele depender de lo que pida el beneficiario del contrato.",
      },
      {
        type: "h2",
        text: "Diferencias en su funcionamiento",
      },
      {
        type: "h3",
        text: "Naturaleza jurídica",
      },
      {
        type: "p",
        text: "La fianza es un contrato accesorio a la obligación principal: existe porque existe el contrato que garantiza. El seguro de caución se estructura como un contrato de seguro, con su propia lógica de póliza, prima y siniestro.",
      },
      {
        type: "h3",
        text: "Recuperación del pago",
      },
      {
        type: "p",
        text: "En la fianza, si la afianzadora paga al beneficiario, tiene derecho a recuperar ese dinero del fiado (tu empresa). En el seguro de caución ocurre algo similar: la aseguradora puede repetir contra el tomador. En ambos casos, la garantía no te exime de tu responsabilidad final.",
      },
      {
        type: "h2",
        text: "¿Cuál me conviene?",
      },
      {
        type: "p",
        text: "Para la mayoría de las empresas que participan en licitaciones o firman contratos de obra en México, la fianza sigue siendo la opción más solicitada y reconocida por las dependencias de gobierno. Lo más importante no es tanto la figura, sino que la institución que la emita esté autorizada por la CNSF y que las condiciones se ajusten a lo que exige tu contrato.",
      },
      {
        type: "quote",
        text: "Lo esencial: verifica siempre que la fianza o el seguro de caución sean emitidos por una institución autorizada por la CNSF.",
      },
      {
        type: "p",
        text: "En Fianzify trabajamos con las principales afianzadoras autorizadas del país y te ayudamos a identificar exactamente qué garantía necesita tu contrato, sin que tengas que volverte experto en el tema.",
      },
      {
        type: "cta",
        text: "¿No sabes si necesitas una fianza o un seguro de caución? Cuéntanos tu caso y te asesoramos sin compromiso.",
      },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}
