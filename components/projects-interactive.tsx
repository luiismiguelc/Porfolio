"use client"

import { useLanguage } from "@/components/language-provider"

const projectCopyEn: Record<string, { tag: string; title: string; description: string }> = {
  "binance-web": {
    tag: "UX/UI · Web",
    title: "Binance Web",
    description: "Comprehensive redesign of Binance’s web platform using user research, card sorting, tree testing, and an atomic design system.",
  },
  "my-valentine": {
    tag: "UI/UX · App",
    title: "My Valentine",
    description: "A digital experience for creating special moments, with a friendly interface and personalized journeys.",
  },
  "ramon-en-la-via": {
    tag: "Mobile App · Automotive",
    title: "Ramón en la vía",
    description: "Experience design, user personas, and interface layouts for a 24/7 roadside assistance mobile app.",
  },
  "aura-velas": {
    tag: "Branding · Web",
    title: "Aura Velas",
    description: "A premium landing page for an artisanal candle brand with a warm, spiritual, and elegant identity.",
  },
}

type Project = {
  slug: string
  tag: string
  title: string
  description: string
  image: string
}

export function ProjectsInteractive({ projects }: { projects: Project[] }) {
  const { language } = useLanguage()

  return (
    <>
      <div className="mb-14 text-center">
        <p className="font-caveat text-2xl text-primary">
          {language === "es" ? "Lo que he construido" : "What I’ve built"}
        </p>
        <h2 className="mt-1 font-marker text-4xl text-foreground md:text-5xl">
          <span className="marker-underline">
            {language === "es" ? "Proyectos destacados" : "Featured projects"}
          </span>
        </h2>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => {
          const copy = language === "es" ? project : projectCopyEn[project.slug]

          return (
            <article
              key={project.title}
              className={`reveal-up reveal-delay-${Math.min(index + 1, 4)} group relative flex h-full flex-col rounded-3xl border-2 border-foreground bg-card p-1 shadow-[6px_6px_0_0_var(--foreground)] transition-transform hover:-translate-y-1`}
            >
              <div className="relative h-52 w-full overflow-hidden rounded-[1.35rem] bg-secondary/30 p-2">
                <img
                  src={project.image}
                  alt={copy.title}
                  className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="min-h-5 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  {copy.tag}
                </p>
                <h3 className="mt-2 min-h-14 font-marker text-2xl leading-tight text-foreground">
                  {copy.title}
                </h3>
                <p className="mt-3 flex-1 text-pretty leading-relaxed text-muted-foreground">
                  {copy.description}
                </p>
                <a
                  href={`/proyectos/${project.slug}`}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-primary"
                >
                  {language === "es" ? "Ver caso de estudio" : "View case study"}
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </article>
          )
        })}
      </div>
    </>
  )
}
