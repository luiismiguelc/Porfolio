"use client"

import { createContext, useContext, useEffect, useState } from "react"

export type Language = "es" | "en"

type LanguageContextValue = {
  language: Language
  toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("es")

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem("language")
    const nextLanguage: Language = savedLanguage === "en" ? "en" : "es"

    setLanguage(nextLanguage)
    document.documentElement.lang = nextLanguage
  }, [])

  function toggleLanguage() {
    const nextLanguage: Language = language === "es" ? "en" : "es"

    setLanguage(nextLanguage)
    document.documentElement.lang = nextLanguage
    window.localStorage.setItem("language", nextLanguage)
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider")
  }

  return context
}
