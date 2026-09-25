import { ProjectsInteractive } from "@/components/projects-interactive"

export const projects = [
  {
    slug: "binance-web",
    tag: "UX/UI · Web",
    title: "Binance Web",
    description:
      "Rediseño integral de la plataforma web de Binance. Investigación de usuarios, card sorting, tree testing y sistema de diseño atómico.",
    image: "/binance-web.png",
    prototypeUrl:
      "https://www.figma.com/proto/gHZDlLemDeWAAXw4VbDBTw/Proto-2.0?node-id=1-558&p=f&viewport=-81%2C128%2C0.03&t=ccuUAG3tFrgEQkPr-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A558&show-proto-sidebar=1&page-id=0%3A1",
    challenge:
      "Muchas personas en Latinoamérica buscan alternativas para proteger el valor de su dinero. Binance ofrece una opción mediante la adquisición de USDT, pero quienes intentaban completar este proceso se encontraban con una arquitectura de información extensa y una plataforma compleja, lo que generaba confusión y dificultaba la navegación.",
    solution:
      "Reorganicé la arquitectura de la información, simplifiqué los flujos clave y diseñé un sistema visual más claro para facilitar la toma de decisiones y la comprensión del producto.",
    result:
      "Se mejoró la claridad del producto, se redujo la carga cognitiva y se creó una base más escalable para futuras iteraciones del ecosistema digital.",
    process: [
      "Investigación con usuarios y análisis de tareas",
      "Card sorting y tree testing para reorganizar la información",
      "Rediseño de componentes y patrones reutilizables",
      "Validación de flujos de alta prioridad",
    ],
  },
  {
    slug: "my-valentine",
    tag: "UI/UX · App",
    title: "My Valentine",
    description:
      "Diseño de una experiencia digital para crear momentos especiales, con una interfaz cercana, intuitiva y recorridos personalizados.",
    image: "/myvalentine.png",
    prototypeUrl:
      "https://www.figma.com/proto/OvY6sgS7DSeNJ026l8Xror/Prototipo-Myvalentine?node-id=974-3658&p=f&viewport=4216%2C-6898%2C0.28&t=YvWk8eZPNeZ4hM3I-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=135%3A855&show-proto-sidebar=1&page-id=0%3A1",
    challenge:
      "El producto necesitaba reflejar un tono emocional y cercano sin perder claridad en la navegación ni generar fricción en la conversión de la experiencia.",
    solution:
      "Diseñé un flujo más humano, con microinteracciones, segmentación clara y una narrativa visual que acompañaba al usuario durante todo el proceso de compra o registro.",
    result:
      "Se logró una experiencia más emocional y memorable, con mayor conexión del usuario con la marca y mejor fluidez en las principales acciones.",
    process: [
      "Definición de tono visual y personalidad",
      "Diseño de recorrido emocional del usuario",
      "Prototipado de interacciones clave",
      "Ajuste visual para un balance entre intimidad y usabilidad",
    ],
  },
  {
    slug: "ramon-en-la-via",
    tag: "App Móvil · Automotriz",
    title: "Ramón en la vía",
    description:
      "Diseño de experiencia, user personas y layouts de interfaz para la aplicación móvil de asistencia vial 24/7.",
    image: "/ramon-en-la-via.png",
    challenge:
      "La aplicación debía resolver emergencias reales de forma rápida, clara y confiable, sin frustrar al usuario en momentos de presión o estrés.",
    solution:
      "Definí personas, prioricé el flujo de ayuda inmediata y preparé una interfaz orientada a decisiones rápidas, visualización clara del estado y acompañamiento del usuario durante la asistencia.",
    result:
      "Se creó una solución más útil en situaciones críticas, con un enfoque de empatía, rapidez y confianza para la toma de decisiones en contexto de emergencias.",
    process: [
      "Investigación de necesidades y contexto de uso",
      "Mapeo de escenarios de emergencia",
      "Diseño de jerarquía visual para acciones críticas",
      "Validación de claridad y flujo principal",
    ],
  },
  {
    slug: "aura-velas",
    tag: "Branding · Web",
    title: "Aura Velas",
    description:
      "Landing page premium para una marca de velas artesanales con una identidad espiritual, cálida y elegante.",
    image: "/AURA.png",
    prototypeUrl: "https://luiismiguelc.github.io/Aura-velas/index.html",
    challenge:
      "La marca necesitaba una presencia digital que transmitiera calma, lujo sutil y una experiencia más emocional para diferenciarse de tiendas genéricas.",
    solution:
      "Diseñé una identidad visual más alta y una landing page con narrativa premium que refuerza la esencia de la marca a través de una composición serena, elegante y memorable.",
    result:
      "Se generó una experiencia más envolvente, con una propuesta visual mucho más distintiva y alineada con la percepción premium de la marca.",
    process: [
      "Definición de la personalidad de marca",
      "Diseño de estructura y narrativa visual",
      "Diseño de landing page con foco en conversión",
      "Ajuste visual para una estética premium y cálida",
    ],
  },
]

export function Projects() {
  return (
    <section id="proyectos" className="bg-background paper-grain">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <ProjectsInteractive projects={projects} />
      </div>
    </section>
  )
}
