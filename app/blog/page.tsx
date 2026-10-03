"use client"

import Link from "next/link"
import { Blog } from "@/components/blog"
import { useLanguage } from "@/components/language-provider"

export default function BlogPage() {
  const { language, toggleLanguage } = useLanguage()

  return (
    <main className="relative min-h-screen overflow-hidden bg-primary text-primary-foreground">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex flex-col justify-center gap-2 text-center font-marker leading-[0.82] text-primary-foreground/10 select-none"
      >
        <span className="whitespace-nowrap text-[18vw] md:text-[13vw]">IDEAS</span>
        <span className="whitespace-nowrap text-[18vw] md:text-[13vw]">{language === "es" ? "DISEÑO" : "DESIGN"}</span>
        <span className="whitespace-nowrap text-[18vw] md:text-[13vw]">{language === "es" ? "APRENDIZAJE" : "LEARNING"}</span>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-5 py-10 md:px-8 md:py-14">
        <div className="mb-8 flex items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 bg-primary-foreground/5 px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-primary"
          >
            {language === "es" ? "← Volver al inicio" : "← Back to home"}
          </Link>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={toggleLanguage}
              aria-label={language === "es" ? "Cambiar a inglés" : "Switch to Spanish"}
              className="rounded-full border border-primary-foreground/40 px-3 py-2 text-xs font-bold"
            >
              {language === "es" ? "EN" : "ES"}
            </button>
            <span className="font-marker text-xl tracking-wide">Luismiguel</span>
          </div>
        </div>

        <Blog />
      </div>
    </main>
  )
}
