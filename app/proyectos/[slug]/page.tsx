import Link from "next/link"
import { notFound } from "next/navigation"
import { projects } from "@/components/projects"

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

  return (
    <main className="relative overflow-hidden bg-primary text-primary-foreground">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex flex-col justify-center gap-2 text-center font-marker leading-[0.82] text-primary-foreground/10 select-none"
      >
        <span className="whitespace-nowrap text-[18vw] md:text-[13vw]">
          HAZLO SIMPLE
        </span>
        <span className="whitespace-nowrap text-[18vw] md:text-[13vw]">
          HAZLO ÚTIL
        </span>
        <span className="whitespace-nowrap text-[18vw] md:text-[13vw]">
          HAZLO REAL
        </span>
      </div>

      <div className="relative mx-auto max-w-5xl px-5 py-10 md:px-8 md:py-14">
        <div className="mb-8 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 bg-primary-foreground/5 px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-primary"
          >
            ← Volver al inicio
          </Link>

          <span className="font-marker text-xl tracking-wide">Luismiguel</span>
        </div>

        <header className="mb-10 text-center md:mb-12">
          <p className="font-caveat text-2xl text-primary-foreground/90">{project.tag}</p>
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
              {project.slug === "aura-velas" ? "Ver sitio web" : "Ver prototipo"}
              <span aria-hidden="true">→</span>
            </a>
          </div>
        ) : null}

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          <div className="rounded-3xl border-2 border-foreground bg-card p-5 shadow-[6px_6px_0_0_var(--foreground)]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Problema
            </p>
            <p className="mt-3 text-pretty leading-relaxed text-foreground">
              {project.challenge}
            </p>
          </div>

          <div className="rounded-3xl border-2 border-foreground bg-card p-5 shadow-[6px_6px_0_0_var(--foreground)]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Solución
            </p>
            <p className="mt-3 text-pretty leading-relaxed text-foreground">
              {project.solution}
            </p>
          </div>

          <div className="rounded-3xl border-2 border-foreground bg-card p-5 shadow-[6px_6px_0_0_var(--foreground)]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Resultado
            </p>
            <p className="mt-3 text-pretty leading-relaxed text-foreground">
              {project.result}
            </p>
          </div>
        </div>

        <div className="mt-12 rounded-3xl border-2 border-foreground bg-card p-6 shadow-[6px_6px_0_0_var(--foreground)] md:p-8">
          <h2 className="font-marker text-3xl text-foreground">Proceso</h2>
          <ul className="mt-6 space-y-3 text-foreground/90">
            {project.process.map((step) => (
              <li key={step} className="flex gap-3 leading-relaxed">
                <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-primary" />
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>

        {project.slug === "binance-web" ? (
          <section className="mt-12 rounded-3xl border-2 border-foreground bg-card p-6 shadow-[6px_6px_0_0_var(--foreground)] md:p-8">
            <div className="mb-6">
              <p className="font-caveat text-2xl text-primary">Validación</p>
              <h2 className="mt-1 font-marker text-3xl text-foreground md:text-4xl">
                Resultados de la prueba de usabilidad
              </h2>
              <p className="mt-3 max-w-3xl leading-relaxed text-muted-foreground">
                La prueba realizada en Maze mostró que los participantes
                completaron con éxito las tareas principales del rediseño, con
                tiempos de recorrido medidos para cada flujo.
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
