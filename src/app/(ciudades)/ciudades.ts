export type Ciudad = {
  slug: string;
  nombre: string;
  nombreCorto: string;
  metaTitle: string;
  metaDescription: string;
  heroSubtitle: string;
  intro: string;
  contexto: string;
  zonas: string[];
  keywords: string;
};

export const CIUDADES: Record<string, Ciudad> = {
  "fianzas-cdmx": {
    slug: "fianzas-cdmx",
    nombre: "Ciudad de México",
    nombreCorto: "CDMX",
    metaTitle: "Fianzas en CDMX | Cumplimiento, Licitación y Más | Fianzify",
    metaDescription:
      "Fianzas en la Ciudad de México: cumplimiento, anticipo, licitación, arrendamiento y judicial. Cotización en menos de 2 horas con afianzadoras autorizadas.",
    heroSubtitle:
      "Emitimos fianzas para empresas y proveedores de gobierno en toda la Ciudad de México con respuesta en menos de 2 horas.",
    intro:
      "Si tu empresa participa en licitaciones, firma contratos con dependencias o necesita garantizar una obligación en la Ciudad de México, en Fianzify te ayudamos a obtener tu fianza de forma rápida y sin complicaciones. Trabajamos con las principales afianzadoras autorizadas por la CNSF para conseguirte las mejores condiciones.",
    contexto:
      "La Ciudad de México concentra la mayor cantidad de contratos públicos y privados del país. Desde obra pública en las 16 alcaldías hasta contratos de servicios con dependencias federales, las fianzas son un requisito constante para proveedores y contratistas. Nuestro equipo conoce los requerimientos de las dependencias que operan en la CDMX y agiliza tu trámite para que no pierdas oportunidades por temas de tiempo.",
    zonas: [
      "Benito Juárez",
      "Cuauhtémoc",
      "Miguel Hidalgo",
      "Álvaro Obregón",
      "Coyoacán",
      "Gustavo A. Madero",
    ],
    keywords:
      "fianzas CDMX, fianza de cumplimiento Ciudad de México, fianzas para licitaciones CDMX, afianzadora CDMX",
  },
  "fianzas-estado-de-mexico": {
    slug: "fianzas-estado-de-mexico",
    nombre: "Estado de México",
    nombreCorto: "Edo. de México",
    metaTitle: "Fianzas en el Estado de México | Cotiza en 2 hrs | Fianzify",
    metaDescription:
      "Fianzas en el Estado de México para contratistas y proveedores de gobierno. Cumplimiento, anticipo, licitación y más. Cotización rápida con Fianzify.",
    heroSubtitle:
      "Fianzas para empresas y proveedores en todo el Estado de México, con asesoría personalizada y emisión ágil.",
    intro:
      "En Fianzify emitimos fianzas para empresas que operan en el Estado de México: contratistas de obra, proveedores de gobierno municipal y estatal, arrendadores y despachos. Te conseguimos la fianza que necesitas con las afianzadoras autorizadas con las que trabajamos, en menos tiempo del que crees.",
    contexto:
      "El Estado de México es uno de los mercados con mayor actividad de licitaciones y obra pública del país, con decenas de municipios que contratan proveedores constantemente. Empresas de construcción, suministro y servicios necesitan fianzas de cumplimiento, anticipo y sostenimiento de propuesta para participar. Conocemos los tiempos y requisitos de los municipios mexiquenses y te acompañamos para que tu trámite no se detenga.",
    zonas: [
      "Naucalpan",
      "Tlalnepantla",
      "Ecatepec",
      "Toluca",
      "Cuautitlán Izcalli",
      "Atizapán",
    ],
    keywords:
      "fianzas Estado de México, fianza de cumplimiento EdoMex, fianzas para licitaciones Estado de México, afianzadora Toluca",
  },
  "fianzas-naucalpan": {
    slug: "fianzas-naucalpan",
    nombre: "Naucalpan",
    nombreCorto: "Naucalpan",
    metaTitle: "Fianzas en Naucalpan | Cumplimiento y Licitación | Fianzify",
    metaDescription:
      "Fianzas en Naucalpan para empresas de la zona industrial y proveedores de gobierno. Cumplimiento, anticipo y licitación. Cotiza en menos de 2 horas.",
    heroSubtitle:
      "Fianzas para empresas de la zona industrial de Naucalpan y proveedores del municipio, con emisión rápida.",
    intro:
      "Naucalpan concentra una de las zonas industriales más importantes del Estado de México. Si tu empresa firma contratos, participa en licitaciones del municipio o necesita garantizar el cumplimiento de una obligación, en Fianzify te emitimos la fianza que requieres con respaldo de afianzadoras autorizadas.",
    contexto:
      "Con un fuerte tejido industrial y comercial, las empresas de Naucalpan participan constantemente en contratos de suministro, obra y servicios, tanto privados como con el gobierno municipal. Las fianzas de cumplimiento y de anticipo son las más solicitadas en la zona. Te ayudamos a tramitarlas rápido para que mantengas tus proyectos en marcha.",
    zonas: [
      "Zona industrial Alce Blanco",
      "Naucalpan Centro",
      "Satélite",
      "San Mateo Nopala",
      "Industrial Tlatilco",
    ],
    keywords:
      "fianzas Naucalpan, fianza de cumplimiento Naucalpan, fianzas zona industrial Naucalpan, afianzadora Naucalpan",
  },
  "fianzas-ecatepec": {
    slug: "fianzas-ecatepec",
    nombre: "Ecatepec",
    nombreCorto: "Ecatepec",
    metaTitle: "Fianzas en Ecatepec | Proveedores de Gobierno | Fianzify",
    metaDescription:
      "Fianzas en Ecatepec para contratistas y proveedores del municipio. Cumplimiento, anticipo y sostenimiento de propuesta. Cotización rápida con Fianzify.",
    heroSubtitle:
      "Fianzas para proveedores y contratistas que participan en licitaciones y contratos en Ecatepec.",
    intro:
      "Ecatepec es uno de los municipios con mayor actividad de licitaciones del Estado de México. Si participas en concursos públicos o firmas contratos con el municipio, necesitarás fianzas de sostenimiento de propuesta, cumplimiento o anticipo. En Fianzify te las emitimos con rapidez y te asesoramos en cada paso.",
    contexto:
      "Como uno de los municipios más poblados del país, Ecatepec genera un volumen alto de contratos de obra y servicios públicos. Los proveedores que quieren participar necesitan garantizar la seriedad de sus propuestas y el cumplimiento de sus contratos mediante fianzas. Conocemos los requerimientos locales y agilizamos tu trámite.",
    zonas: [
      "Ecatepec Centro",
      "San Cristóbal",
      "Las Américas",
      "Ciudad Azteca",
      "Santa Clara",
    ],
    keywords:
      "fianzas Ecatepec, fianza de cumplimiento Ecatepec, fianzas para licitaciones Ecatepec, afianzadora Ecatepec",
  },
  "fianzas-tlalnepantla": {
    slug: "fianzas-tlalnepantla",
    nombre: "Tlalnepantla",
    nombreCorto: "Tlalnepantla",
    metaTitle: "Fianzas en Tlalnepantla | Empresas y Gobierno | Fianzify",
    metaDescription:
      "Fianzas en Tlalnepantla para empresas industriales y proveedores de gobierno. Cumplimiento, anticipo y licitación. Cotiza en menos de 2 horas con Fianzify.",
    heroSubtitle:
      "Fianzas para empresas y proveedores de gobierno en Tlalnepantla, con asesoría y emisión ágil.",
    intro:
      "Tlalnepantla es un polo industrial y de servicios clave en la zona norte del Valle de México. Si tu empresa firma contratos, participa en licitaciones o necesita garantizar una obligación, en Fianzify te ayudamos a obtener tu fianza con las mejores condiciones del mercado.",
    contexto:
      "Con una amplia base de empresas industriales y proveedores que trabajan con dependencias de gobierno, Tlalnepantla es una zona donde las fianzas de cumplimiento y anticipo son parte del día a día de los contratistas. Te ayudamos a tramitarlas sin demoras para que tus proyectos avancen.",
    zonas: [
      "Tlalnepantla Centro",
      "Zona industrial",
      "San Juan Ixhuatepec",
      "La Loma",
      "Los Reyes Iztacala",
    ],
    keywords:
      "fianzas Tlalnepantla, fianza de cumplimiento Tlalnepantla, fianzas zona industrial Tlalnepantla, afianzadora Tlalnepantla",
  },
  "fianzas-guadalajara": {
    slug: "fianzas-guadalajara",
    nombre: "Guadalajara",
    nombreCorto: "Guadalajara",
    metaTitle: "Fianzas en Guadalajara, Jalisco | Cotiza en 2 hrs | Fianzify",
    metaDescription:
      "Fianzas en Guadalajara y zona metropolitana para empresas y proveedores de gobierno. Cumplimiento, anticipo y licitación. Cotización rápida con Fianzify.",
    heroSubtitle:
      "Fianzas para empresas y proveedores de gobierno en Guadalajara y su zona metropolitana, con respuesta en menos de 2 horas.",
    intro:
      "Guadalajara es uno de los principales centros económicos del país y un mercado muy activo en licitaciones y contratos de obra. Si tu empresa participa en concursos públicos o firma contratos con dependencias en Jalisco, en Fianzify te emitimos la fianza que necesitas con respaldo de afianzadoras autorizadas por la CNSF.",
    contexto:
      "La zona metropolitana de Guadalajara concentra una fuerte actividad industrial, tecnológica y de construcción. Empresas de los sectores de obra pública, suministro y servicios necesitan fianzas de cumplimiento, anticipo y sostenimiento de propuesta de forma constante. Te ayudamos a tramitarlas a distancia, con la misma rapidez y acompañamiento que en cualquier otra plaza del país.",
    zonas: [
      "Guadalajara Centro",
      "Zapopan",
      "Tlaquepaque",
      "Tonalá",
      "Tlajomulco",
      "El Salto",
    ],
    keywords:
      "fianzas Guadalajara, fianza de cumplimiento Guadalajara, fianzas para licitaciones Jalisco, afianzadora Guadalajara",
  },
  "fianzas-monterrey": {
    slug: "fianzas-monterrey",
    nombre: "Monterrey",
    nombreCorto: "Monterrey",
    metaTitle: "Fianzas en Monterrey, Nuevo León | Cotiza en 2 hrs | Fianzify",
    metaDescription:
      "Fianzas en Monterrey y su zona metropolitana para empresas y contratistas. Cumplimiento, anticipo y licitación. Cotización en menos de 2 horas con Fianzify.",
    heroSubtitle:
      "Fianzas para empresas industriales y proveedores de gobierno en Monterrey y su zona metropolitana.",
    intro:
      "Monterrey es el principal polo industrial del norte del país. Si tu empresa firma contratos de obra, suministro o servicios, o participa en licitaciones en Nuevo León, en Fianzify te conseguimos la fianza que requieres con las mejores condiciones y emisión ágil.",
    contexto:
      "Con una de las economías más dinámicas de México, la zona metropolitana de Monterrey genera un alto volumen de contratos industriales y de obra, tanto privados como con el gobierno estatal y municipal. Las fianzas de cumplimiento y de anticipo son indispensables para los proveedores de la región. Te acompañamos en todo el proceso a distancia, sin que tengas que trasladarte.",
    zonas: [
      "Monterrey Centro",
      "San Pedro Garza García",
      "San Nicolás",
      "Apodaca",
      "Guadalupe",
      "Santa Catarina",
    ],
    keywords:
      "fianzas Monterrey, fianza de cumplimiento Monterrey, fianzas para licitaciones Nuevo León, afianzadora Monterrey",
  },
  "fianzas-puebla": {
    slug: "fianzas-puebla",
    nombre: "Puebla",
    nombreCorto: "Puebla",
    metaTitle: "Fianzas en Puebla | Empresas y Gobierno | Fianzify",
    metaDescription:
      "Fianzas en Puebla para empresas, contratistas y proveedores de gobierno. Cumplimiento, anticipo y sostenimiento de propuesta. Cotización rápida con Fianzify.",
    heroSubtitle:
      "Fianzas para empresas y proveedores de gobierno en Puebla, con asesoría personalizada y emisión rápida.",
    intro:
      "Puebla es un importante centro industrial y de servicios del centro del país. Si tu empresa participa en licitaciones o firma contratos con dependencias de gobierno en el estado, en Fianzify te ayudamos a obtener tu fianza de forma rápida y sin complicaciones.",
    contexto:
      "Con una sólida base industrial —automotriz, textil y manufacturera— y una intensa actividad de obra pública, Puebla es una plaza donde las fianzas de cumplimiento, anticipo y licitación son un requisito frecuente. Conocemos los procesos de las dependencias estatales y municipales, y agilizamos tu trámite a distancia.",
    zonas: [
      "Puebla Centro",
      "Angelópolis",
      "Cholula",
      "San Andrés Cholula",
      "Atlixco",
      "Cuautlancingo",
    ],
    keywords:
      "fianzas Puebla, fianza de cumplimiento Puebla, fianzas para licitaciones Puebla, afianzadora Puebla",
  },
  "fianzas-queretaro": {
    slug: "fianzas-queretaro",
    nombre: "Querétaro",
    nombreCorto: "Querétaro",
    metaTitle: "Fianzas en Querétaro | Cotiza en 2 hrs | Fianzify",
    metaDescription:
      "Fianzas en Querétaro para empresas industriales y proveedores de gobierno. Cumplimiento, anticipo y licitación. Cotización en menos de 2 horas con Fianzify.",
    heroSubtitle:
      "Fianzas para empresas y proveedores de gobierno en Querétaro, una de las plazas industriales de mayor crecimiento del país.",
    intro:
      "Querétaro es uno de los estados con mayor crecimiento industrial y de inversión en México. Si tu empresa firma contratos, participa en licitaciones o necesita garantizar una obligación, en Fianzify te emitimos la fianza que requieres con respaldo de afianzadoras autorizadas.",
    contexto:
      "Con un fuerte sector aeroespacial, automotriz y logístico, Querétaro atrae empresas que constantemente firman contratos de obra, suministro y servicios. Las fianzas de cumplimiento y de anticipo son parte esencial de su operación. Te ayudamos a tramitarlas con rapidez y acompañamiento, sin importar dónde te encuentres.",
    zonas: [
      "Santiago de Querétaro",
      "El Marqués",
      "Corregidora",
      "Juriquilla",
      "El Pueblito",
      "San Juan del Río",
    ],
    keywords:
      "fianzas Querétaro, fianza de cumplimiento Querétaro, fianzas para licitaciones Querétaro, afianzadora Querétaro",
  },
};

export const CIUDAD_SLUGS = Object.keys(CIUDADES);
