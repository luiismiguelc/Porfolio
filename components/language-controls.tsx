"use client"

import { useLanguage } from "@/components/language-provider"

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage()
  const isEnglish = language === "en"

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={isEnglish ? "Switch to Spanish" : "Cambiar a inglés"}
      className="rounded-full border border-primary-foreground/40 px-3 py-2 text-xs font-bold"
    >
      {isEnglish ? "ES" : "EN"}
    </button>
  )
}

export function LocalizedText({
  es,
  en,
}: {
  es: string
  en: string
}) {
  const { language } = useLanguage()

  return language === "es" ? es : en
}
