"use client"

import { useLanguage } from "@/components/language-provider"

export function Hero() {
  const { language } = useLanguage()

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-primary text-primary-foreground"
    >
      {/* Big brush words layered behind the photo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex flex-col justify-center gap-2 text-center font-marker leading-[0.9] text-primary-foreground/15 select-none"
      >
        <span className="whitespace-nowrap text-[18vw] md:text-[15vw]">
          HAZLO SIMPLE
        </span>
        <span className="whitespace-nowrap text-[18vw] md:text-[15vw]">
          HAZLO ÚTIL
        </span>
        <span className="whitespace-nowrap text-[18vw] md:text-[15vw]">
          HAZLO REAL
        </span>
      </div>

      {/* Hand-drawn doodles */}
      <svg
        aria-hidden="true"
        className="doodle-float pointer-events-none absolute left-[8%] top-[22%] hidden h-24 w-24 text-primary-foreground/70 md:block"
        viewBox="0 0 100 100"
        fill="none"
      >
        <path
          d="M10 70 C 30 20, 70 20, 88 55"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="1 9"
        />
        <path
          d="M78 40 L88 55 L72 58"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <svg
        aria-hidden="true"
        className="doodle-float pointer-events-none absolute right-[10%] top-[30%] hidden h-20 w-20 text-primary-foreground/70 lg:block"
        viewBox="0 0 100 100"
        fill="none"
      >
        <circle cx="50" cy="38" r="20" stroke="currentColor" strokeWidth="3" />
        <path
          d="M42 60 h16 M44 68 h12"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M50 8 v-6 M74 22 l5 -4 M26 22 l-5 -4"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>

      <div className="relative mx-auto flex min-h-[88vh] max-w-5xl flex-col items-center justify-center px-5 py-24 text-center">
        <p className="reveal-up font-caveat text-2xl text-primary-foreground/90 md:text-3xl">
          {language === "es" ? "Hola, soy Luismiguel" : "Hi, I’m Luismiguel"}
        </p>
        <h1 className="reveal-up reveal-delay-1 mt-2 font-marker text-4xl leading-[1.05] tracking-wide sm:text-5xl md:text-6xl">
          {language === "es" ? "Diseñador UX/UI" : "UX/UI Designer"}
        </h1>

        <div className="relative mt-10">
          <div className="absolute -inset-3 -rotate-6 rounded-[2rem] bg-primary-foreground/10" />
          <div className="absolute -inset-3 rotate-3 rounded-[2rem] bg-primary-foreground/10" />
          <img
            src="/images/luismiguel.jpg"
            alt="Retrato de Luismiguel, diseñador UX/UI, sonriendo al aire libre"
            className="reveal-up reveal-delay-2 float-soft relative h-56 w-56 rounded-[1.75rem] border-4 border-primary-foreground object-cover shadow-2xl sm:h-64 sm:w-64"
          />
        </div>

        <p className="reveal-up reveal-delay-3 mt-10 max-w-xl text-pretty text-base leading-relaxed text-primary-foreground/85 md:text-lg">
          {language === "es"
            ? "Diseño productos digitales centrados en las personas. Investigo, prototipo y construyo sistemas de diseño que hacen que lo complejo se sienta simple."
            : "I design people-centered digital products. I research, prototype, and build design systems that make complex things feel simple."}
        </p>

        <div className="reveal-up reveal-delay-4 mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#proyectos"
            className="rounded-full bg-primary-foreground px-6 py-3 text-sm font-bold text-primary transition-transform hover:-translate-y-0.5"
          >
            {language === "es" ? "Ver proyectos" : "View projects"}
          </a>
          <a
            href="#contacto"
            className="rounded-full border-2 border-primary-foreground/60 px-6 py-3 text-sm font-bold transition-colors hover:bg-primary-foreground/10"
          >
            {language === "es" ? "Contáctame" : "Get in touch"}
          </a>
        </div>
      </div>
    </section>
  )
}
