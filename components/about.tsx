"use client"

import { useLanguage } from "@/components/language-provider"

const skills = [
  {
    title: "Investigación y descubrimiento",
    body: "Hablo con usuarios reales, mapeo sus flujos y llego a la raíz del problema antes de dibujar una sola pantalla.",
    icon: (
      <>
        <circle cx="42" cy="42" r="22" stroke="currentColor" strokeWidth="5" />
        <path
          d="M58 58 L78 78"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M42 20 v-6 M20 42 h-6 M64 42 h6 M42 64 v6"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </>
    ),
  },
  {
    title: "Prototipado y diseño",
    body: "Una librería mental de patrones de interfaz me permite iterar rápido y validar la mejor solución para cada caso.",
    icon: (
      <>
        <rect
          x="16"
          y="20"
          width="68"
          height="52"
          rx="6"
          stroke="currentColor"
          strokeWidth="5"
        />
        <path
          d="M16 34 h68 M30 48 h24 M30 58 h34"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </>
    ),
  },
  {
    title: "Sistemas de diseño",
    body: "Construyo sistemas escalables y accesibles para que los equipos diseñen y desarrollen con consistencia y velocidad.",
    icon: (
      <>
        <circle cx="30" cy="30" r="12" stroke="currentColor" strokeWidth="5" />
        <rect
          x="54"
          y="18"
          width="24"
          height="24"
          rx="4"
          stroke="currentColor"
          strokeWidth="5"
        />
        <path
          d="M30 54 L18 74 h24 z"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinejoin="round"
        />
        <circle cx="66" cy="62" r="12" stroke="currentColor" strokeWidth="5" />
      </>
    ),
  },
  {
    title: "Diseño con IA",
    body: "Uso herramientas de inteligencia artificial para explorar ideas, acelerar iteraciones y convertir conceptos en experiencias más completas.",
    icon: (
      <>
        <path
          d="M48 14 54 30 70 36 54 42 48 58 42 42 26 36 42 30 Z"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinejoin="round"
        />
        <path
          d="m76 56 3 8 8 3-8 3-3 8-3-8-8-3 8-3 Z"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinejoin="round"
        />
      </>
    ),
  },
  {
    title: "HTML y CSS",
    body: "Conozco HTML y CSS para entender mejor el desarrollo, crear interfaces más realistas y trabajar con mayor fluidez junto a equipos técnicos.",
    icon: (
      <>
        <path
          d="m18 16 12 12-12 12 M78 16 66 28l12 12 M54 12 42 52"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M26 72h44"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
        />
      </>
    ),
  },
]

const skillBodiesEn: Record<string, string> = {
  "Investigación y descubrimiento": "I talk to real users, map their journeys, and find the root of a problem before drawing a single screen.",
  "Prototipado y diseño": "A mental library of interface patterns helps me iterate quickly and validate the best solution for each case.",
  "Sistemas de diseño": "I build scalable and accessible systems so teams can design and develop with consistency and speed.",
  "Diseño con IA": "I use artificial intelligence tools to explore ideas, speed up iterations, and turn concepts into more complete experiences.",
  "HTML y CSS": "I know HTML and CSS to better understand development, create more realistic interfaces, and collaborate smoothly with technical teams.",
}

export function About() {
  const { language } = useLanguage()

  return (
    <section id="sobre-mi" className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Stacked polaroid photo */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-2 -rotate-6 rounded-lg bg-primary-foreground/15" />
              <div className="absolute -inset-2 rotate-3 rounded-lg bg-primary-foreground/25" />
              <div className="relative -rotate-2 rounded-lg bg-primary-foreground p-3 pb-10 shadow-2xl">
                <img
                  src="/images/luismiguel.jpg"
                  alt="Luismiguel sonriendo al aire libre frente a una cascada de piedra"
                  className="h-80 w-72 rounded-sm object-cover"
                />
                <p className="absolute bottom-3 left-0 right-0 text-center font-caveat text-2xl text-primary">
                  ¡Hola! Soy Luismiguel
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="font-caveat text-2xl text-primary-foreground/90">
              {language === "es" ? "Un poco sobre mí" : "A little about me"}
            </p>
            <h2 className="mt-1 font-marker text-4xl md:text-5xl">
              {language === "es" ? "Sobre mí" : "About me"}
            </h2>
            <p className="mt-6 text-pretty leading-relaxed text-primary-foreground/90">
              <span className="font-bold">
                {language === "es" ? "Soy Luismiguel, diseñador UX/UI" : "I’m Luismiguel, a UX/UI designer"}
              </span>{" "}
              {language === "es"
                ? " con foco en productos digitales que resuelven problemas reales. Me obsesiona el pensamiento centrado en el usuario y profundizar en los enunciados del problema hasta entenderlos de verdad."
                : " focused on digital products that solve real problems. I’m driven by user-centered thinking and by understanding problem statements deeply."}
            </p>
            <p className="mt-4 font-marker text-xl leading-snug">
              {language === "es" ? "Hazlo simple. Hazlo útil. Hazlo real." : "Make it simple. Make it useful. Make it real."}
            </p>
            <p className="mt-4 text-pretty leading-relaxed text-primary-foreground/90">
              {language === "es"
                ? "Trabajo entre la investigación y la interfaz: paso de una hoja en blanco a experiencias claras, accesibles y con personalidad."
                : "I work between research and interface design, turning a blank page into clear, accessible experiences with personality."}
            </p>

            <div className="mt-6">
              <a
                href="/sobre-mi"
                className="inline-flex items-center gap-2 rounded-full border-2 border-primary-foreground/50 bg-primary-foreground/10 px-4 py-2 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-primary"
              >
                {language === "es" ? "Conoce más sobre mí" : "Learn more about me"}
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Primary skills as sketchy badges */}
        <div id="skills" className="mt-24 scroll-mt-24">
          <h3 className="text-center font-marker text-3xl md:text-4xl">
            {language === "es" ? "Lo que hago mejor" : "What I do best"}
          </h3>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {skills.map((skill) => (
              <div key={skill.title} className="text-center">
                <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-primary-foreground text-primary">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 96 96"
                    fill="none"
                    className="h-16 w-16"
                  >
                    {skill.icon}
                  </svg>
                </div>
                <h4 className="mt-5 font-marker text-xl">
                  <span className="marker-underline-accent">
                    {language === "es"
                      ? skill.title
                      : skill.title === "Investigación y descubrimiento"
                        ? "Research and discovery"
                        : skill.title === "Prototipado y diseño"
                          ? "Prototyping and design"
                          : skill.title === "Sistemas de diseño"
                            ? "Design systems"
                            : skill.title === "Diseño con IA"
                              ? "AI-powered design"
                              : "HTML and CSS"}
                  </span>
                </h4>
                <p className="mt-3 text-pretty leading-relaxed text-primary-foreground/85">
                  {language === "es" ? skill.body : skillBodiesEn[skill.title]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
