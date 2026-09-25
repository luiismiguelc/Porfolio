"use client"

import { useState } from "react"
import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { useLanguage } from "@/components/language-provider"

const links = [
  { es: "Sobre mí", en: "About me", href: "#sobre-mi" },
  { es: "Proyectos", en: "Projects", href: "#proyectos" },
  { es: "Habilidades", en: "Skills", href: "#skills" },
  { es: "Blog", en: "Blog", href: "/blog" },
  { es: "Contacto", en: "Contact", href: "#contacto" },
]

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const { language, toggleLanguage } = useLanguage()
  const pathname = usePathname()

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const shouldUseDark = savedTheme ? savedTheme === "dark" : prefersDark

    setDarkMode(shouldUseDark)
    document.documentElement.classList.toggle("dark", shouldUseDark)
  }, [])

  function toggleTheme() {
    const nextDarkMode = !darkMode

    setDarkMode(nextDarkMode)
    document.documentElement.classList.toggle("dark", nextDarkMode)
    window.localStorage.setItem("theme", nextDarkMode ? "dark" : "light")
  }

  return (
    <header className="sticky top-0 z-50 bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-8">
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href.startsWith("#") && pathname !== "/" ? `/${link.href}` : link.href}
              className="opacity-90 transition-opacity hover:opacity-100"
            >
              {language === "es" ? link.es : link.en}
            </a>
          ))}
        </nav>
        <button
          type="button"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/40 text-xl md:hidden"
        >
          <span aria-hidden="true">{menuOpen ? "×" : "☰"}</span>
        </button>
        <a
          href="#top"
          className="font-marker text-xl tracking-wide md:absolute md:left-1/2 md:-translate-x-1/2"
        >
          Luismiguel
        </a>
        <div className="ml-auto flex items-center gap-3 md:ml-0">
          <button
            type="button"
            aria-label={darkMode ? "Activar modo claro" : "Activar modo oscuro"}
            aria-pressed={darkMode}
            title={darkMode ? "Modo claro" : "Modo oscuro"}
            onClick={toggleTheme}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/40 text-lg transition-colors hover:bg-primary-foreground hover:text-primary"
          >
            <span aria-hidden="true">{darkMode ? "☀" : "☾"}</span>
          </button>
          <button
            type="button"
            aria-label={language === "es" ? "Cambiar a inglés" : "Switch to Spanish"}
            title={language === "es" ? "English" : "Español"}
            onClick={toggleLanguage}
            className="inline-flex h-10 min-w-10 items-center justify-center rounded-full border border-primary-foreground/40 px-2 text-xs font-bold transition-colors hover:bg-primary-foreground hover:text-primary"
          >
            {language === "es" ? "EN" : "ES"}
          </button>
        <a
          href="#contacto"
          className="hidden rounded-full border border-primary-foreground/40 px-4 py-1.5 text-sm font-semibold transition-colors hover:bg-primary-foreground hover:text-primary sm:inline-flex"
        >
              {language === "es" ? "Trabajemos juntos" : "Let’s work together"}
        </a>
        </div>
      </div>

      {menuOpen ? (
        <nav
          id="mobile-navigation"
          className="border-t border-primary-foreground/20 px-5 py-4 md:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1 text-sm font-semibold">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href.startsWith("#") && pathname !== "/" ? `/${link.href}` : link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-3 py-3 transition-colors hover:bg-primary-foreground/10"
              >
                {language === "es" ? link.es : link.en}
              </a>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  )
}
