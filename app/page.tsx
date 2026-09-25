import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Projects } from "@/components/projects"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
