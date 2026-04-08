"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  role: "bot" | "user";
  text: string;
  options?: ChatOption[];
}

interface ChatOption {
  label: string;
  value: string;
}

const KNOWLEDGE_BASE: Record<string, { answer: string; options?: ChatOption[] }> = {
  greeting: {
    answer: "¡Hola! Soy el asistente virtual de **Grupo Afianzador MX**. Estoy aquí para ayudarte con información sobre fianzas para contratos de gobierno.\n\n¿En qué puedo ayudarte?",
    options: [
      { label: "Tipos de fianzas", value: "tipos" },
      { label: "¿Cuánto cuesta?", value: "costos" },
      { label: "Documentos necesarios", value: "documentos" },
      { label: "Quiero cotizar", value: "cotizar" },
    ],
  },
  tipos: {
    answer: "Gestionamos **4 tipos de fianzas** para contratos de gobierno:\n\n**1. Fianza de Cumplimiento** - Garantiza el cumplimiento total del contrato.\n\n**2. Fianza de Anticipo** - Respalda el uso correcto del anticipo recibido.\n\n**3. Fianza de Licitación** - Requisito para participar en concursos públicos.\n\n**4. Fianza de Vicios Ocultos** - Cubre defectos posteriores a la entrega de obra.\n\n¿Sobre cuál te gustaría saber más?",
    options: [
      { label: "Cumplimiento", value: "cumplimiento" },
      { label: "Anticipo", value: "anticipo" },
      { label: "Licitación", value: "licitacion" },
      { label: "Vicios Ocultos", value: "vicios" },
      { label: "¿Cuánto cuestan?", value: "costos" },
    ],
  },
  cumplimiento: {
    answer: "**Fianza de Cumplimiento**\n\nEs la más solicitada. Garantiza que cumplirás con todas las obligaciones de tu contrato de gobierno.\n\n- **Prima:** 1% al 3% del monto del contrato\n- **Vigencia:** Duración del contrato\n- **Cobertura:** 100% del valor del contrato\n\nPor ejemplo, para un contrato de $5M MXN, la fianza costaría entre $50,000 y $150,000 MXN.",
    options: [
      { label: "Documentos necesarios", value: "documentos" },
      { label: "Quiero cotizar", value: "cotizar" },
      { label: "Otros tipos de fianza", value: "tipos" },
    ],
  },
  anticipo: {
    answer: "**Fianza de Anticipo**\n\nRespalda el uso correcto del anticipo que te da la dependencia para iniciar trabajos.\n\n- **Prima:** 1% al 2.5%\n- **Vigencia:** Hasta amortización total del anticipo\n- **Cobertura:** Monto del anticipo otorgado\n\nSe libera conforme vas amortizando el anticipo con avances de obra.",
    options: [
      { label: "Documentos necesarios", value: "documentos" },
      { label: "Quiero cotizar", value: "cotizar" },
      { label: "Otros tipos de fianza", value: "tipos" },
    ],
  },
  licitacion: {
    answer: "**Fianza de Licitación**\n\nEs obligatoria para participar en licitaciones públicas. Garantiza la seriedad de tu propuesta.\n\n- **Prima:** 0.5% al 1.5% (la más económica)\n- **Vigencia:** Durante el proceso de licitación\n- **Se devuelve** si no ganas la licitación\n\nEs la fianza con menor costo y más rápida de tramitar.",
    options: [
      { label: "Quiero cotizar", value: "cotizar" },
      { label: "¿Qué documentos necesito?", value: "documentos" },
      { label: "Otros tipos de fianza", value: "tipos" },
    ],
  },
  vicios: {
    answer: "**Fianza de Vicios Ocultos**\n\nCubre defectos de construcción que aparezcan después de entregar la obra.\n\n- **Prima:** 1% al 2%\n- **Vigencia:** 12 a 24 meses post-entrega\n- **Se solicita** al momento de firmar el acta de entrega-recepción",
    options: [
      { label: "Quiero cotizar", value: "cotizar" },
      { label: "Documentos necesarios", value: "documentos" },
      { label: "Otros tipos de fianza", value: "tipos" },
    ],
  },
  costos: {
    answer: "**¿Cuánto cuesta una fianza?**\n\nEl costo se expresa como porcentaje del monto del contrato:\n\n| Tipo | Prima |\n|---|---|\n| Cumplimiento | 1% - 3% |\n| Anticipo | 1% - 2.5% |\n| Licitación | 0.5% - 1.5% |\n| Vicios Ocultos | 1% - 2% |\n\n**Ejemplo:** Contrato de $5M MXN con prima de 1.5% = **$75,000 MXN** (pago único).\n\nEl costo exacto depende de tu perfil financiero, historial crediticio y monto del contrato.",
    options: [
      { label: "¿Qué afecta el costo?", value: "factores_costo" },
      { label: "Quiero cotizar mi fianza", value: "cotizar" },
      { label: "Documentos necesarios", value: "documentos" },
    ],
  },
  factores_costo: {
    answer: "**Factores que afectan el costo:**\n\n1. **Monto del contrato** - A mayor monto, la prima puede reducirse\n2. **Perfil financiero** - Estados financieros sólidos = menor prima\n3. **Historial crediticio** - Buen Buró de Crédito ayuda\n4. **Tipo de fianza** - Licitación es la más económica\n5. **Experiencia previa** - Empresas con historial afianzable obtienen mejores tasas\n6. **Garantías** - Garantía inmobiliaria puede reducir la prima en montos > $2M MXN\n\nNosotros buscamos la mejor opción entre múltiples afianzadoras para darte el mejor precio.",
    options: [
      { label: "Quiero cotizar", value: "cotizar" },
      { label: "Ver tipos de fianza", value: "tipos" },
    ],
  },
  documentos: {
    answer: "**Documentos necesarios para cotizar:**\n\n1. Contrato fuente o fallo de adjudicación\n2. Acta constitutiva de la empresa\n3. INE del representante legal\n4. Constancia de situación fiscal vigente\n5. Estados financieros (último ejercicio + parciales)\n6. Declaración anual con acuse\n7. Cédula profesional del contador\n\n**Nota:** Para montos > $2M MXN puede requerirse garantía inmobiliaria.\n\nCon documentación completa, el trámite toma **24 a 72 horas**.",
    options: [
      { label: "Quiero cotizar ahora", value: "cotizar" },
      { label: "¿Y si mi Buró no es perfecto?", value: "buro" },
      { label: "Volver al inicio", value: "greeting" },
    ],
  },
  buro: {
    answer: "**¿Buró de Crédito no perfecto?**\n\n¡No te preocupes! Trabajamos con **múltiples afianzadoras** que tienen diferentes criterios de evaluación.\n\nAlgunas opciones:\n- Afianzadoras con criterios más flexibles\n- Complementar con garantía inmobiliaria\n- Presentar estados financieros sólidos que compensen\n- Obligado solidario en algunos casos\n\nEvaluamos tu caso particular para encontrar la mejor opción disponible. La evaluación es **sin costo y sin compromiso**.",
    options: [
      { label: "Quiero que evalúen mi caso", value: "cotizar" },
      { label: "¿Qué documentos necesito?", value: "documentos" },
      { label: "Volver al inicio", value: "greeting" },
    ],
  },
  tiempo: {
    answer: "**Tiempos de trámite:**\n\n- **Caso estándar:** 24 a 72 horas con documentación completa\n- **Caso urgente:** Mismo día o día siguiente (contactar por WhatsApp)\n- **Licitación:** Generalmente el más rápido (24 hrs)\n\n**Tip:** Tener toda la documentación lista acelera significativamente el proceso. Te recomendamos iniciar el trámite en cuanto recibas el fallo o contrato.",
    options: [
      { label: "Necesito fianza urgente", value: "urgente" },
      { label: "Ver documentos necesarios", value: "documentos" },
      { label: "Cotizar mi fianza", value: "cotizar" },
    ],
  },
  urgente: {
    answer: "**¿Fianza urgente?**\n\nEntendemos que los plazos de gobierno no esperan. Para casos urgentes:\n\n- Atención por **WhatsApp** para respuesta inmediata\n- Posibilidad de emisión en **24 horas**\n- Equipo dedicado a casos prioritarios\n\nTe recomiendo contactarnos directamente por WhatsApp para acelerar el proceso.",
    options: [
      { label: "Contactar por WhatsApp", value: "whatsapp" },
      { label: "Ver documentos necesarios", value: "documentos" },
      { label: "Volver al inicio", value: "greeting" },
    ],
  },
  cotizar: {
    answer: "**¡Excelente decisión!**\n\nTienes dos opciones para cotizar:\n\n**1. WhatsApp (más rápido):**\nEscríbenos directamente y un asesor te atenderá en minutos.\n\n**2. Formulario web:**\nLlena el formulario en nuestra página y te contactamos en menos de 24 hrs.\n\nLa evaluación es **100% gratuita y sin compromiso**. Analizamos tu caso con múltiples afianzadoras para darte la mejor opción.",
    options: [
      { label: "Contactar por WhatsApp", value: "whatsapp" },
      { label: "Ir al formulario", value: "formulario" },
      { label: "Tengo más preguntas", value: "greeting" },
    ],
  },
  whatsapp: {
    answer: "Te redirijo a nuestro WhatsApp Business. Un asesor especializado te atenderá de inmediato.\n\n**Horario:** Lun-Vie 9:00 a 18:00 hrs\n\n¡Te esperamos!",
    options: [
      { label: "Tengo más preguntas", value: "greeting" },
    ],
  },
  formulario: {
    answer: "Te llevo a nuestro formulario de evaluación. Solo necesitas:\n\n- Tu nombre y empresa\n- Teléfono o WhatsApp\n- Tipo de fianza\n- Monto del contrato\n\nNos pondremos en contacto contigo en menos de 24 hrs.",
    options: [
      { label: "Tengo más preguntas", value: "greeting" },
    ],
  },
  default: {
    answer: "Disculpa, no entendí tu pregunta. Pero puedo ayudarte con:\n\n- Información sobre tipos de fianzas\n- Costos y primas\n- Documentos necesarios\n- Proceso y tiempos\n- Cotización personalizada\n\n¿Sobre qué tema te gustaría saber más?",
    options: [
      { label: "Tipos de fianzas", value: "tipos" },
      { label: "Costos", value: "costos" },
      { label: "Documentos", value: "documentos" },
      { label: "Quiero cotizar", value: "cotizar" },
    ],
  },
};

function detectIntent(input: string): string {
  const lower = input.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  if (/hola|buenos dias|buenas tardes|saludos|hey/.test(lower)) return "greeting";
  if (/tipo|cuales|que fianza|clases/.test(lower)) return "tipos";
  if (/cumplimiento/.test(lower)) return "cumplimiento";
  if (/anticipo/.test(lower)) return "anticipo";
  if (/licitacion|licitar|concurso/.test(lower)) return "licitacion";
  if (/vicios|ocultos|defectos/.test(lower)) return "vicios";
  if (/costo|cuanto|precio|prima|cobr|pag|tar/.test(lower)) return "costos";
  if (/factor|afecta|depende|influye/.test(lower)) return "factores_costo";
  if (/documento|requisito|necesito|papeles|tramit/.test(lower)) return "documentos";
  if (/buro|credito|historial/.test(lower)) return "buro";
  if (/tiempo|tarda|rapido|demora|plazo|dias/.test(lower)) return "tiempo";
  if (/urgente|urgencia|ya|hoy|inmediato|rapido/.test(lower)) return "urgente";
  if (/cotiz|evalua|presupuesto|quiero|necesito fianza/.test(lower)) return "cotizar";
  if (/whatsapp|whats|wsp|mensaje/.test(lower)) return "whatsapp";
  if (/formulario|form|contacto/.test(lower)) return "formulario";

  return "default";
}

function formatMessage(text: string): string {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n/g, '<br/>')
    .replace(/\|(.*?)\|/g, '<span class="inline-block px-2">$1</span>');
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      simulateBotResponse("greeting");
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const simulateBotResponse = (intent: string) => {
    setIsTyping(true);
    const delay = 500 + Math.random() * 800;

    setTimeout(() => {
      const response = KNOWLEDGE_BASE[intent] || KNOWLEDGE_BASE.default;
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: response.answer, options: response.options },
      ]);
      setIsTyping(false);
    }, delay);
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages((prev) => [...prev, { role: "user", text: userMessage }]);
    setInput("");

    const intent = detectIntent(userMessage);
    simulateBotResponse(intent);
  };

  const handleOptionClick = (option: ChatOption) => {
    setMessages((prev) => [...prev, { role: "user", text: option.label }]);

    if (option.value === "whatsapp") {
      simulateBotResponse("whatsapp");
      setTimeout(() => {
        window.open(
          "https://wa.me/521XXXXXXXXXX?text=Hola%2C%20me%20interesa%20cotizar%20una%20fianza%20para%20mi%20contrato%20de%20gobierno.%20%C2%BFMe%20pueden%20apoyar%3F",
          "_blank"
        );
      }, 1500);
      return;
    }

    if (option.value === "formulario") {
      simulateBotResponse("formulario");
      setTimeout(() => {
        document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      }, 1500);
      return;
    }

    simulateBotResponse(option.value);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-24 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 ${
          isOpen
            ? "bg-red-500 hover:bg-red-600"
            : "bg-secondary hover:bg-primary"
        }`}
        aria-label={isOpen ? "Cerrar chat" : "Abrir asistente virtual"}
      >
        {isOpen ? (
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
          </svg>
        )}
      </button>

      {/* Label when closed */}
      {!isOpen && (
        <div className="fixed bottom-[106px] right-[84px] z-50 bg-white rounded-xl shadow-lg px-4 py-2 text-sm font-medium text-primary animate-fade-in-up hidden md:block">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-2 h-2 bg-white rotate-45 shadow-lg" />
          ¿Necesitas ayuda?
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-[168px] right-6 z-50 w-[380px] max-w-[calc(100vw-48px)] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden animate-scale-in" style={{ height: "520px" }}>
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-secondary p-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-white font-bold text-sm">Grupo Afianzador MX</h3>
              <p className="text-white/70 text-xs flex items-center gap-1">
                <span className="w-2 h-2 bg-green-400 rounded-full" />
                En línea
              </p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((msg, index) => (
              <div key={index} className="chatbot-message-enter">
                {msg.role === "bot" ? (
                  <div className="flex gap-2">
                    <div className="w-7 h-7 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div className="space-y-2 max-w-[85%]">
                      <div
                        className="bg-white rounded-2xl rounded-tl-sm p-3 text-sm text-text-body leading-relaxed shadow-sm border border-gray-100"
                        dangerouslySetInnerHTML={{ __html: formatMessage(msg.text) }}
                      />
                      {msg.options && (
                        <div className="flex flex-wrap gap-1.5">
                          {msg.options.map((opt, i) => (
                            <button
                              key={i}
                              onClick={() => handleOptionClick(opt)}
                              className="text-xs bg-white border border-secondary/30 text-secondary hover:bg-secondary hover:text-white rounded-full px-3 py-1.5 transition-all duration-200 font-medium"
                            >
                              {opt.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="flex justify-end">
                    <div className="bg-secondary text-white rounded-2xl rounded-tr-sm p-3 text-sm max-w-[80%]">
                      {msg.text}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2">
                <div className="w-7 h-7 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="bg-white rounded-2xl rounded-tl-sm p-3 shadow-sm border border-gray-100">
                  <div className="typing-indicator flex gap-1.5">
                    <span /><span /><span />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-white border-t border-gray-100">
            <form
              onSubmit={(e) => { e.preventDefault(); handleSend(); }}
              className="flex gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Escribe tu pregunta..."
                className="flex-1 px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="w-10 h-10 bg-secondary hover:bg-primary rounded-full flex items-center justify-center text-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
