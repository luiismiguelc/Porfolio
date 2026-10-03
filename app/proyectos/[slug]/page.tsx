import Link from "next/link"
import { notFound } from "next/navigation"
import { projects } from "@/components/projects"
import { LanguageToggle, LocalizedText } from "@/components/language-controls"

const projectCopyEn: Record<string, {
  tag: string
  challenge: string
  solution: string
  result: string
  process: string[]
}> = {
  "binance-web": {
    tag: "UX/UI · Web",
    challenge: "Many people in Latin America look for ways to protect the value of their money. Binance offers an option through USDT, but the extensive information architecture and complex platform made the process confusing and difficult to navigate.",
    solution: "I reorganized the information architecture, simplified key flows, and designed a clearer visual system to support decision-making and product understanding.",
    result: "The product became clearer, cognitive load was reduced, and a more scalable foundation was created for future iterations of the digital ecosystem.",
    process: [
      "User research and task analysis",
      "Card sorting and tree testing to reorganize information",
      "Redesign of reusable components and patterns",
      "Validation of high-priority flows",
    ],
  },
  "my-valentine": {
    tag: "UI/UX · App",
    challenge: "The product needed to feel emotional and personal without compromising clear navigation or creating friction in the conversion journey.",
    solution: "I designed a more human flow, with microinteractions, clear segmentation, and a visual narrative that guided users through the purchase or sign-up process.",
    result: "The experience became more emotional and memorable, strengthening the connection with the brand and improving the flow of key actions.",
    process: [
      "Definition of visual tone and personality",
      "Design of the user's emotional journey",
      "Prototyping of key interactions",
      "Visual refinements balancing intimacy and usability",
    ],
  },
  "ramon-en-la-via": {
    tag: "Mobile App · Automotive",
    challenge: "The app needed to resolve real emergencies quickly, clearly, and reliably without frustrating people under pressure or stress.",
    solution: "I defined user personas, prioritized the immediate-help flow, and designed an interface for quick decisions, clear status updates, and guidance throughout the assistance process.",
    result: "The solution became more useful in critical situations, emphasizing empathy, speed, and confidence when making decisions during emergencies.",
    process: [
      "Research into user needs and context",
      "Mapping of emergency scenarios",
      "Visual hierarchy for critical actions",
      "Validation of the primary flow and its clarity",
    ],
  },
  "aura-velas": {
    tag: "Branding · Web",
    challenge: "The brand needed a digital presence that conveyed calm, subtle luxury, and a more emotional experience to stand apart from generic stores.",
    solution: "I designed a stronger visual identity and a premium landing page narrative that reinforces the brand through a serene, elegant, and memorable composition.",
    result: "The experience became more immersive, with a distinctive visual direction aligned with the brand's premium positioning.",
    process: [
      "Definition of brand personality",
      "Visual structure and narrative design",
      "Landing page design focused on conversion",
      "Visual refinement for a warm, premium aesthetic",
    ],
  },
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const resolvedParams = await params
  const project = projects.find((item) => item.slug === resolvedParams.slug)

  if (!project) {
    notFound()
  }

  const englishCopy = projectCopyEn[project.slug]

  return (
    <main className="relative overflow-hidden bg-primary text-primary-foreground">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex flex-col justify-center gap-2 text-center font-marker leading-[0.82] text-primary-foreground/10 select-none"
      >
        <span className="whitespace-nowrap text-[18vw] md:text-[13vw]">
          <LocalizedText es="HAZLO SIMPLE" en="KEEP IT SIMPLE" />
        </span>
        <span className="whitespace-nowrap text-[18vw] md:text-[13vw]">
          <LocalizedText es="HAZLO ÚTIL" en="MAKE IT USEFUL" />
        </span>
        <span className="whitespace-nowrap text-[18vw] md:text-[13vw]">
          <LocalizedText es="HAZLO REAL" en="MAKE IT REAL" />
        </span>
      </div>

      <div className="relative mx-auto max-w-5xl px-5 py-10 md:px-8 md:py-14">
        <div className="mb-8 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 bg-primary-foreground/5 px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-primary"
          >
            <LocalizedText es="← Volver al inicio" en="← Back to home" />
          </Link>

          <div className="flex items-center gap-4">
            <LanguageToggle />
            <span className="font-marker text-xl tracking-wide">Luismiguel</span>
          </div>
        </div>

        <header className="mb-10 text-center md:mb-12">
          <p className="font-caveat text-2xl text-primary-foreground/90">
            <LocalizedText es={project.tag} en={englishCopy.tag} />
          </p>
          <h1 className="mt-2 font-marker text-4xl text-primary-foreground md:text-5xl">
            {project.title}
          </h1>
        </header>

        <div className="overflow-hidden rounded-[2rem] border-2 border-foreground bg-card shadow-[6px_6px_0_0_var(--foreground)]">
          <img
            src={project.image}
            alt={project.title}
            className="h-[320px] w-full object-contain bg-card p-6 md:h-[500px]"
          />
        </div>

        {project.prototypeUrl ? (
          <div className="mt-6 flex justify-center md:justify-start">
            <a
              href={project.prototypeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary-foreground px-5 py-3 text-sm font-bold text-primary transition-transform hover:-translate-y-0.5"
            >
              <LocalizedText
                es={project.slug === "aura-velas" ? "Ver sitio web" : "Ver prototipo"}
                en={project.slug === "aura-velas" ? "View website" : "View prototype"}
              />
              <span aria-hidden="true">→</span>
            </a>
          </div>
        ) : null}

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          <div className="rounded-3xl border-2 border-foreground bg-card p-5 shadow-[6px_6px_0_0_var(--foreground)]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              <LocalizedText es="Problema" en="Challenge" />
            </p>
            <p className="mt-3 text-pretty leading-relaxed text-foreground">
              <LocalizedText es={project.challenge} en={englishCopy.challenge} />
            </p>
          </div>

          <div className="rounded-3xl border-2 border-foreground bg-card p-5 shadow-[6px_6px_0_0_var(--foreground)]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              <LocalizedText es="Solución" en="Solution" />
            </p>
            <p className="mt-3 text-pretty leading-relaxed text-foreground">
              <LocalizedText es={project.solution} en={englishCopy.solution} />
            </p>
          </div>

          <div className="rounded-3xl border-2 border-foreground bg-card p-5 shadow-[6px_6px_0_0_var(--foreground)]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              <LocalizedText es="Resultado" en="Outcome" />
            </p>
            <p className="mt-3 text-pretty leading-relaxed text-foreground">
              <LocalizedText es={project.result} en={englishCopy.result} />
            </p>
          </div>
        </div>

        <div className="mt-12 rounded-3xl border-2 border-foreground bg-card p-6 shadow-[6px_6px_0_0_var(--foreground)] md:p-8">
          <h2 className="font-marker text-3xl text-foreground">
            <LocalizedText es="Proceso" en="Process" />
          </h2>
          <ul className="mt-6 space-y-3 text-foreground/90">
            {project.process.map((step, index) => (
              <li key={step} className="flex gap-3 leading-relaxed">
                <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-primary" />
                <span><LocalizedText es={step} en={englishCopy.process[index]} /></span>
              </li>
            ))}
          </ul>
        </div>

        {project.slug === "binance-web" ? (
          <section className="mt-12 rounded-3xl border-2 border-foreground bg-card p-6 shadow-[6px_6px_0_0_var(--foreground)] md:p-8">
            <div className="mb-6">
              <p className="font-caveat text-2xl text-primary">
                <LocalizedText es="Validación" en="Validation" />
              </p>
              <h2 className="mt-1 font-marker text-3xl text-foreground md:text-4xl">
                <LocalizedText es="Resultados de la prueba de usabilidad" en="Usability test results" />
              </h2>
              <p className="mt-3 max-w-3xl leading-relaxed text-muted-foreground">
                <LocalizedText
                  es="La prueba realizada en Maze mostró que los participantes completaron con éxito las tareas principales del rediseño, con tiempos de recorrido medidos para cada flujo."
                  en="Testing in Maze showed that participants successfully completed the redesign's main tasks, with completion times recorded for each flow."
                />
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl border-2 border-border bg-white p-2">
              <img
                src="/Group 91.png"
                alt="Resultados de la prueba de usabilidad de Binance en Maze"
                className="mx-auto h-auto max-h-[520px] max-w-full object-contain md:max-h-[560px]"
              />
            </div>
          </section>
        ) : null}
      </div>
    </main>
  )
}
