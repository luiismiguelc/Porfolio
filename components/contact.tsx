"use client"

import { useState } from "react"
import { useLanguage } from "@/components/language-provider"

export function Contact() {
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(false)
  const { language } = useLanguage()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSending(true)
    setError(false)

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: new FormData(e.currentTarget),
          headers: {
            Accept: "application/json",
          },
        },
      )
      const result = await response.json()

      if (!response.ok || !result.success) {
        throw new Error("No se pudo enviar el formulario")
      }

      setSent(true)
    } catch {
      setError(true)
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contacto" className="bg-background paper-grain">
      <div className="mx-auto max-w-2xl px-5 py-20 md:py-28">
        <div className="mb-10 text-center">
          <p className="font-caveat text-2xl text-primary">
            {language === "es" ? "¿Hacemos algo juntos?" : "Shall we build something together?"}
          </p>
          <h2 className="mt-1 font-marker text-4xl text-foreground md:text-5xl">
            <span className="marker-underline">{language === "es" ? "Hablemos" : "Let’s talk"}</span>
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            {language === "es"
              ? "Cuéntame sobre tu proyecto o idea. Respondo en menos de 24 horas."
              : "Tell me about your project or idea. I reply within 24 hours."}
          </p>
        </div>

        {sent ? (
          <div className="rounded-3xl border-2 border-foreground bg-card p-10 text-center shadow-[6px_6px_0_0_var(--foreground)]">
            <p className="font-marker text-3xl text-primary">{language === "es" ? "¡Gracias!" : "Thank you!"}</p>
            <p className="mt-2 text-muted-foreground">
              {language === "es"
                ? "Tu mensaje fue enviado. Te escribo muy pronto."
                : "Your message was sent. I’ll get back to you soon."}
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border-2 border-foreground bg-card p-6 shadow-[6px_6px_0_0_var(--foreground)] md:p-8"
          >
            <input
              type="hidden"
              name="access_key"
              value="c34c0f70-98e5-425b-9521-84cdd778fef1"
            />
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-semibold">
                  {language === "es" ? "Nombre" : "Name"}
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder={language === "es" ? "Tu nombre" : "Your name"}
                  className="rounded-xl border-2 border-border bg-background px-4 py-3 outline-none transition-colors focus:border-primary"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-semibold">
                  {language === "es" ? "Correo" : "Email"}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder={language === "es" ? "tu@correo.com" : "you@email.com"}
                  className="rounded-xl border-2 border-border bg-background px-4 py-3 outline-none transition-colors focus:border-primary"
                />
              </div>
            </div>
            <div className="mt-5 flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-semibold">
                {language === "es" ? "Mensaje" : "Message"}
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder={language === "es" ? "¿En qué estás pensando?" : "What are you thinking about?"}
                className="resize-none rounded-xl border-2 border-border bg-background px-4 py-3 outline-none transition-colors focus:border-primary"
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="mt-6 w-full rounded-full bg-primary px-6 py-4 font-bold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              {sending
                ? language === "es"
                  ? "Enviando..."
                  : "Sending..."
                : language === "es"
                  ? "Enviar mensaje"
                  : "Send message"}
            </button>
            {error ? (
              <p className="mt-4 text-center text-sm text-destructive">
                {language === "es"
                  ? "No se pudo enviar el mensaje. Inténtalo de nuevo."
                  : "The message could not be sent. Please try again."}
              </p>
            ) : null}
          </form>
        )}
      </div>
    </section>
  )
}
