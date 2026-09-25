"use client"

import { useLanguage } from "@/components/language-provider"

export function Blog() {
  const { language } = useLanguage()

  return (
    <section id="blog" className="bg-transparent text-primary-foreground">
      <div className="mx-auto max-w-6xl px-0 py-12 md:py-20">
        {/* Cabecera con ancho completo para el texto */}
        <div className="mb-14 flex flex-col items-start gap-4">
          <p className="font-caveat text-2xl text-primary">
            {language === "es" ? "Ideas, aprendizajes y recursos" : "Ideas, learnings, and resources"}
          </p>
          <h2 className="font-marker text-4xl text-primary-foreground md:text-5xl">
            <span className="marker-underline">Blog</span>
          </h2>
          <p className="mt-2 w-full text-lg leading-relaxed text-primary-foreground/95">
            {language === "es"
              ? "Un espacio para compartir lo que descubro mientras diseño y sigo aprendiendo."
              : "A space to share what I discover while designing and continuing to learn."}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Card 1 */}
          <article className="group flex h-full flex-col overflow-hidden rounded-3xl border-2 border-foreground bg-card shadow-[6px_6px_0_0_var(--foreground)] transition-transform hover:-translate-y-1">
            <div className="relative flex h-36 items-end overflow-hidden p-5 text-primary-foreground bg-primary">
              <span className="absolute -right-3 -top-8 font-marker text-[8rem] leading-none opacity-15">01</span>
              <p className="relative text-xs font-bold uppercase tracking-[0.2em]">
                {language === "es" ? "Figma" : "Figma"}
              </p>
            </div>
            <div className="flex flex-1 flex-col p-5">
              <h3 className="font-marker text-2xl leading-tight text-foreground">
                {language === "es" ? "Novedades de Figma que quiero explorar" : "Figma updates I want to explore"}
              </h3>
              <p className="mt-4 flex-1 leading-relaxed text-foreground/80">
                {language === "es"
                  ? "Un espacio para compartir nuevas funciones, recursos y aprendizajes que pueden mejorar el trabajo diario de diseño."
                  : "A space to share new features, resources, and lessons that can improve everyday design work."}
              </p>
              <span className="mt-5 text-sm font-bold text-primary">
                {language === "es" ? "Próximamente" : "Coming soon"}
              </span>
            </div>
          </article>

          {/* Card 2 */}
          <article className="group flex h-full flex-col overflow-hidden rounded-3xl border-2 border-foreground bg-card shadow-[6px_6px_0_0_var(--foreground)] transition-transform hover:-translate-y-1">
            <div className="relative flex h-36 items-end overflow-hidden p-5 text-primary-foreground bg-foreground">
              <span className="absolute -right-3 -top-8 font-marker text-[8rem] leading-none opacity-15">02</span>
              <p className="relative text-xs font-bold uppercase tracking-[0.2em]">
                {language === "es" ? "UX + IA" : "UX + AI"}
              </p>
            </div>
            <div className="flex flex-1 flex-col p-5">
              <h3 className="font-marker text-2xl leading-tight text-foreground">
                {language === "es" ? "Cómo uso la IA en mi proceso de diseño" : "How I use AI in my design process"}
              </h3>
              <p className="mt-4 flex-1 leading-relaxed text-foreground/80">
                {language === "es"
                  ? "Ideas y experimentos sobre cómo usar inteligencia artificial para investigar, explorar conceptos y acelerar iteraciones sin perder el criterio humano."
                  : "Ideas and experiments on using artificial intelligence for research, concept exploration, and faster iterations without losing human judgment."}
              </p>
              <span className="mt-5 text-sm font-bold text-primary">
                {language === "es" ? "Próximamente" : "Coming soon"}
              </span>
            </div>
          </article>

          {/* Card 3 */}
          <article className="group flex h-full flex-col overflow-hidden rounded-3xl border-2 border-foreground bg-card shadow-[6px_6px_0_0_var(--foreground)] transition-transform hover:-translate-y-1">
            <div className="relative flex h-36 items-end overflow-hidden p-5 text-primary-foreground bg-[#e6a23c]">
              <span className="absolute -right-3 -top-8 font-marker text-[8rem] leading-none opacity-15">03</span>
              <p className="relative text-xs font-bold uppercase tracking-[0.2em]">
                {language === "es" ? "Investigación" : "Research"}
              </p>
            </div>
            <div className="flex flex-1 flex-col p-5">
              <h3 className="font-marker text-2xl leading-tight text-foreground">
                {language === "es" ? "Lo que aprendo al probar productos" : "What I learn from testing products"}
              </h3>
              <p className="mt-4 flex-1 leading-relaxed text-foreground/80">
                {language === "es"
                  ? "Reflexiones sobre pruebas de usabilidad, entrevistas y pequeños hallazgos que ayudan a tomar mejores decisiones de diseño."
                  : "Reflections on usability tests, interviews, and small findings that lead to better design decisions."}
              </p>
              <span className="mt-5 text-sm font-bold text-primary">
                {language === "es" ? "Próximamente" : "Coming soon"}
              </span>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}