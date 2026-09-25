"use client"

import { useLanguage } from "@/components/language-provider"

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/luismiguel-calderón-hernández-285600404/",
  },
  { label: "WhatsApp", href: "https://wa.me/584247559468" },
  { label: "Email", href: "mailto:luismiguelcalderonh@gmail.com" },
]

export function SiteFooter() {
  const { language } = useLanguage()

  return (
    <footer className="border-t-2 border-foreground bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 py-12 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <p className="font-marker text-2xl text-foreground">Luismiguel</p>
          <p className="mt-1 text-sm text-muted-foreground">
            {language === "es"
              ? "Diseñador UX/UI · Hazlo simple, hazlo real."
              : "UX/UI designer · Make it simple, make it real."}
          </p>
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-5">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel={social.href.startsWith("http") ? "noreferrer" : undefined}
              className="text-sm font-semibold text-foreground transition-colors hover:text-primary"
            >
              {social.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        {language === "es" ? "Luismiguel. Diseñando con amor." : "Luismiguel. Designing with love."}
      </div>
    </footer>
  )
}
