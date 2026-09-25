"use client"

import { useLanguage } from "@/components/language-provider"

const posts = [
  {
    categoryEs: "Figma",
    categoryEn: "Figma",
    titleEs: "Novedades de Figma que quiero explorar",
    titleEn: "Figma updates I want to explore",
    bodyEs: "Un espacio para compartir nuevas funciones, recursos y aprendizajes que pueden mejorar el trabajo diario de diseño.",
    bodyEn: "A space to share new features, resources, and lessons that can improve everyday design work.",
    accent: "bg-primary",
  },
  {
    categoryEs: "UX + IA",
    categoryEn: "UX + AI",
    titleEs: "Cómo uso la IA en mi proceso de diseño",
    titleEn: "How I use AI in my design process",
    bodyEs: "Ideas y experimentos sobre cómo usar inteligencia artificial para investigar, explorar conceptos y acelerar iteraciones sin perder el criterio humano.",
    bodyEn: "Ideas and experiments on using artificial intelligence for research, concept exploration, and faster iterations without losing human judgment.",
    accent: "bg-foreground",
  },
  {
    categoryEs: "Investigación",
    categoryEn: "Research",
    titleEs: "Lo que aprendo al probar productos",
    titleEn: "What I learn from testing products",
    bodyEs: "Reflexiones sobre pruebas de usabilidad, entrevistas y pequeños hallazgos que ayudan a tomar mejores decisiones de diseño.",
    bodyEn: "Reflections on usability tests, interviews, and small findings that lead to better design decisions.",
    accent: "bg-[#e6a23c]",
  },
]

export function Blog() {
  const { language } = useLanguage()

  return (
    <section id="blog" className="bg-transparent text-primary-foreground">
      <div className="mx-auto max-w-6xl px-0 py-12 md:py-20">
        <div className="mb-14 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-caveat text-2xl text-primary">
              {language === "es" ? "Ideas, aprendizajes y recursos" : "Ideas, learnings, and resources"}
            </p>
            <h2 className="mt-1 font-marker text-4xl text-primary-foreground md:text-5xl">
              <span className="marker-underline">Blog</span>
            </h2>
          </div>
          <p className="max-w-sm text-pretty leading-relaxed text-muted-foreground md:text-right">
            {language === "es"
              ? "Un espacio para compartir lo que descubro mientras diseño y sigo aprendiendo."
              : "A space to share what I discover while designing and continuing to learn."}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {posts.map((post, index) => (
            <article
              key={post.titleEs}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border-2 border-foreground bg-card shadow-[6px_6px_0_0_var(--foreground)] transition-transform hover:-translate-y-1"
            >
              <div className={`${post.accent} relative flex h-36 items-end overflow-hidden p-5 text-primary-foreground`}>
                <span className="absolute -right-3 -top-8 font-marker text-[8rem] leading-none opacity-15">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="relative text-xs font-bold uppercase tracking-[0.2em]">
                  {language === "es" ? post.categoryEs : post.categoryEn}
                </p>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-marker text-2xl leading-tight text-foreground">
                  {language === "es" ? post.titleEs : post.titleEn}
                </h3>
                <p className="mt-4 flex-1 leading-relaxed text-muted-foreground">
                  {language === "es" ? post.bodyEs : post.bodyEn}
                </p>
                <span className="mt-5 text-sm font-bold text-primary">
                  {language === "es" ? "Próximamente" : "Coming soon"}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
