"use client"

import Link from "next/link"
import { useLanguage } from "@/components/language-provider"

const certs = [
  {
    title: "Certificado de IA",
    titleEn: "AI Certificate",
    image: "/certificados/Certificado IA.png",
    href: "/certificados/Certificado IA.png",
  },
  {
    title: "Certificado de metodologías ágiles",
    titleEn: "Agile Methodologies Certificate",
    image: "/certificados/certificado-scrum.png",
    href: "/certificados/certificado-scrum.png",
  },
  {
    title: "Diplomatura en Diseño UX/UI",
    titleEn: "UX/UI Design Diploma",
    image: "/certificados/IMG_2433 2.jpg",
    href: "/certificados/IMG_2433 2.jpg",
  },
  {
    title: "Certificado personal",
    titleEn: "Personal Certificate",
    image: "/certificados/Luismiguel Calderón Hernández CERTIFICADO.pdf",
    href: "/certificados/Luismiguel Calderón Hernández CERTIFICADO.pdf",
  },
  {
    title: "Certificado en prototipado",
    titleEn: "Prototyping Certificate",
    image: "/certificados/Prototipado.pdf",
    href: "/certificados/Prototipado.pdf",
  },
]

export default function SobreMiPage() {
  const { language, toggleLanguage } = useLanguage()
  const isEnglish = language === "en"

  return (
    <main className="relative overflow-hidden bg-primary text-primary-foreground">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex flex-col justify-center gap-2 text-center font-marker leading-[0.82] text-primary-foreground/10 select-none"
      >
        <span className="whitespace-nowrap text-[18vw] md:text-[13vw]">
          {isEnglish ? "KEEP IT SIMPLE" : "HAZLO SIMPLE"}
        </span>
        <span className="whitespace-nowrap text-[18vw] md:text-[13vw]">
          {isEnglish ? "MAKE IT USEFUL" : "HAZLO ÚTIL"}
        </span>
        <span className="whitespace-nowrap text-[18vw] md:text-[13vw]">
          {isEnglish ? "MAKE IT REAL" : "HAZLO REAL"}
        </span>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <div className="mb-10 flex items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 bg-primary-foreground/5 px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-primary"
          >
            {isEnglish ? "← Back" : "← Volver"}
          </Link>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={toggleLanguage}
              aria-label={isEnglish ? "Switch to Spanish" : "Cambiar a inglés"}
              className="rounded-full border border-primary-foreground/40 px-3 py-2 text-xs font-bold"
            >
              {isEnglish ? "ES" : "EN"}
            </button>
            <span className="font-marker text-xl">Luismiguel</span>
          </div>
        </div>

        <header className="mb-12 text-center">
          <h1 className="mt-1 font-marker text-4xl md:text-6xl">{isEnglish ? "About me" : "Sobre mí"}</h1>
        </header>

        <div className="mb-6 text-center">
          <h2 className="font-marker text-2xl md:text-3xl">{isEnglish ? "The short version" : "Versión corta"}</h2>
        </div>

        <section className="grid gap-8 rounded-[2rem] border-2 border-foreground bg-card p-6 shadow-[6px_6px_0_0_var(--foreground)] md:grid-cols-[1.15fr_0.85fr] md:p-8">
          <div className="order-2 flex flex-col justify-center">
            <p className="text-pretty leading-relaxed text-muted-foreground">
              {isEnglish
                ? "I'm Luismiguel, a UX/UI designer obsessed with creating useful, clear, meaningful experiences. I like getting to the root of a problem, listening to people, and turning that understanding into solutions that work in real life."
                : "Soy Luismiguel, diseñador UX/UI con una obsesión por crear experiencias útiles, claras y con sentido. Me gusta entender la raíz del problema, escuchar a las personas y transformar esa comprensión en soluciones que realmente funcionen en la vida real."}
            </p>
            <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
              {isEnglish
                ? "My work sits at the intersection of research, strategy, and design. I'm interested in how people feel when interacting with a product and how a thoughtful experience can change the way a brand connects with people."
                : "Mi camino está entre la investigación, la estrategia y el diseño. Me interesa cómo se siente una persona al interactuar con un producto y cómo una buena experiencia puede cambiar la forma en que una marca se conecta con la gente."}
            </p>
          </div>

          <div className="order-1 mx-auto w-full max-w-sm overflow-hidden rounded-[1.5rem] border-2 border-foreground bg-card p-2 shadow-[6px_6px_0_0_var(--foreground)]">
            <img
              src="/IMG_2447.jpg"
              alt={isEnglish ? "Luismiguel in front of a monumental fountain" : "Luismiguel frente a una fuente monumental"}
              className="h-64 w-full rounded-[1rem] object-cover md:h-80"
            />
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border-2 border-primary-foreground/30 bg-primary-foreground/10 p-6 md:p-8">
          <h2 className="font-marker text-2xl md:text-3xl">{isEnglish ? "The longer story" : "Versión larga"}</h2>
          <div className="mt-6 grid items-center gap-8 md:grid-cols-[0.8fr_1.2fr]">
            <div className="overflow-hidden rounded-[1.5rem] border-2 border-foreground bg-card p-2 shadow-[6px_6px_0_0_var(--foreground)]">
              <img
                src="/IMG_2458.JPG"
                alt={isEnglish ? "Illustration of Mérida's cable car above the Venezuelan Andes" : "Ilustración del teleférico de Mérida sobre los Andes venezolanos"}
                className="h-72 w-full rounded-[1rem] object-cover"
              />
            </div>
            <div className="space-y-4 leading-relaxed text-primary-foreground/90">
              <p>
                {isEnglish
                  ? "My name is Luismiguel Calderón. I'm 30 years old and from Mérida, Venezuela, a city in the Venezuelan Andes."
                  : "Mi nombre es Luismiguel Calderón, tengo 30 años y soy de Mérida, Venezuela, una ciudad de los Andes venezolanos."}
              </p>
              <p>
                {isEnglish
                  ? "Growing up in a city surrounded by mountains taught me to notice details and value the stories behind every person and place. That curiosity is part of how I work: before designing, I listen, research, and understand the context."
                  : "Crecer en una ciudad rodeada de montañas me enseñó a observar los detalles y a valorar las historias que hay detrás de cada persona y cada lugar. Esa curiosidad también está presente en mi forma de trabajar: antes de diseñar, me gusta escuchar, investigar y entender el contexto."}
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10 grid items-center gap-8 rounded-[2rem] border-2 border-primary-foreground/30 bg-primary-foreground/10 p-6 md:grid-cols-[1.2fr_0.8fr] md:p-8">
          <div className="order-1 space-y-4 leading-relaxed text-primary-foreground/90">
            <p>
              {isEnglish
                ? "My passion for technology began when I was eight. I grew up among mountains, far from computers, so I took every chance I had to get close to one."
                : "Mi pasión por la tecnología comenzó a los 8 años. Crecí entre montañas y bastante alejado de las computadoras, así que solía aprovechar cada oportunidad que tenía para acercarme a una."}
            </p>
            <p>
              {isEnglish
                ? "As a child, I played with PowerPoint, making animations and small games. That curiosity grew into a lasting passion for animation and sharpened my eye for visual detail."
                : "De niño, jugaba con PowerPoint creando animaciones y pequeños juegos. Esa curiosidad se convirtió en una pasión duradera por la animación y agudizó mi mirada para los detalles visuales."}
            </p>
          </div>
          <div className="order-2 overflow-hidden rounded-[1.5rem] border-2 border-foreground bg-card p-2 shadow-[6px_6px_0_0_var(--foreground)]">
            <img
              src="/IMG_2459.jpg"
              alt={isEnglish ? "Illustration of a child exploring technology on a computer" : "Ilustración de un niño explorando la tecnología en una computadora"}
              className="h-72 w-full rounded-[1rem] object-cover"
            />
          </div>
        </section>

        <section className="mt-10 grid items-center gap-8 rounded-[2rem] border-2 border-primary-foreground/30 bg-primary-foreground/10 p-6 md:grid-cols-[0.8fr_1.2fr] md:p-8">
          <div className="order-1 overflow-hidden rounded-[1.5rem] border-2 border-foreground bg-card p-2 shadow-[6px_6px_0_0_var(--foreground)]">
            <img
              src="/IMG_2460.JPG"
              alt={isEnglish ? "Illustration of Luismiguel's first coffee website" : "Ilustración del primer sitio web de café de Luismiguel"}
              className="h-72 w-full rounded-[1rem] object-cover"
            />
          </div>
          <div className="order-2 space-y-4 leading-relaxed text-primary-foreground/90">
            <p>
              {isEnglish
                ? "I created my first website at 13. The internet felt new and exciting, making it the perfect place to explore my interests and curiosity."
                : "A los 13 años creé mi primer sitio web. Internet me parecía algo novedoso y emocionante, así que se convirtió en el canal perfecto para explorar mis intereses y mi curiosidad."}
            </p>
            <p>
                {isEnglish
                  ? "My first site was about coffee, inspired by my family's plantations. Later, I made fan pages about Disney, Harry Potter, and other things I loved."
                  : "Mi primer sitio fue una página sobre el café, inspirada en las plantaciones de mi familia. Después creé páginas de fans sobre Disney, Harry Potter y otros temas que me apasionaban."}
            </p>
            <p>
              {isEnglish
                ? "Through that process, I discovered how much I loved creating content and expressing my interests and knowledge online. It strengthened my interest in visual storytelling and digital experiences."
                : "En ese proceso descubrí que me encantaba crear contenido y que podía encontrar formas de expresar mis pasiones y conocimientos en internet. Esa etapa fortaleció mi interés por lo visual, la narrativa y la creación de experiencias digitales."}
            </p>
          </div>
        </section>

        <section className="mt-10 grid items-center gap-8 rounded-[2rem] border-2 border-primary-foreground/30 bg-primary-foreground/10 p-6 md:grid-cols-[1.2fr_0.8fr] md:p-8">
          <div className="order-1 space-y-4 leading-relaxed text-primary-foreground/90">
            <p>
              {isEnglish
                ? "Over time, I devoted myself to my family's coffee business. It took me to places and introduced me to people around the world I never imagined meeting, and helped me understand everything behind a cup of coffee."
                : "Con el tiempo me dediqué de lleno al negocio familiar del café. Este trabajo me llevó a conocer lugares y personas alrededor del mundo que nunca imaginé visitar, y me permitió entender todo lo que existe detrás de una taza de café."}
            </p>
            <p>
              {isEnglish
                ? "Coffee also taught me to work as a team, listen, adapt to different contexts, and care for every detail. Without realizing it at the time, I was developing a sensibility closely connected to user experience."
                : "El café también me enseñó a trabajar en equipo, a escuchar, a adaptarme a distintos contextos y a cuidar cada detalle del proceso. Aunque en ese momento no lo veía así, estaba desarrollando una sensibilidad muy cercana a la experiencia de usuario."}
            </p>
            <p>
              {isEnglish
                ? "I learned that every interaction matters: from how a product is presented to how someone feels when they receive it. Today, I bring that perspective to digital product design."
                : "Aprendí que cada interacción importa: desde la forma en que se presenta un producto hasta la manera en que una persona se siente al recibirlo. Hoy llevo esa mirada al diseño de productos digitales."}
            </p>
          </div>
          <div className="order-2 overflow-hidden rounded-[1.5rem] border-2 border-foreground bg-card p-2 shadow-[6px_6px_0_0_var(--foreground)]">
            <img
              src="/IMG_2461.JPG"
              alt={isEnglish ? "Illustration of a café and the family coffee business" : "Ilustración de una cafetería y el negocio familiar del café"}
              className="h-72 w-full rounded-[1rem] object-cover"
            />
          </div>
        </section>

        <section className="mt-10 grid items-center gap-8 rounded-[2rem] border-2 border-primary-foreground/30 bg-primary-foreground/10 p-6 md:grid-cols-[0.8fr_1.2fr] md:p-8">
          <div className="order-2 overflow-hidden rounded-[1.5rem] border-2 border-foreground bg-card p-2 shadow-[6px_6px_0_0_var(--foreground)] md:order-1">
            <img
              src="/IMG_2465.jpg"
              alt={isEnglish ? "Illustration of Luismiguel as a UX/UI designer" : "Ilustración de Luismiguel como diseñador UX/UI"}
              className="h-72 w-full rounded-[1rem] object-cover"
            />
          </div>
          <div className="order-1 space-y-5 md:order-2">
            <h2 className="font-marker text-4xl leading-tight md:text-6xl">
              {isEnglish ? "And that brings us to today!" : "¡Y eso nos trae al día de hoy!"}
            </h2>
            <div className="space-y-4 leading-relaxed text-primary-foreground/90">
              <p>
                {isEnglish
                  ? "I decided to study UX/UI at Coderhouse, and since then I've worked as a freelancer on personal projects, exploring ways to turn ideas into clear, useful digital experiences."
                  : "Decidí cursar el Diplomado en UX/UI de Coderhouse y, desde entonces, he trabajado como freelancer en proyectos personales, explorando distintas formas de convertir ideas en experiencias digitales claras y útiles."}
              </p>
              <p>
                {isEnglish
                  ? "The parts of the process I enjoy most are product discovery, user testing, prototyping, workshop facilitation, and interaction design. Every experience has shaped the UX designer I am today."
                  : "Las etapas del proceso que más disfruto son el descubrimiento del producto, las pruebas con usuarios, la creación de prototipos, la facilitación de talleres y el diseño de interacción. Cada experiencia de mi trayectoria me ha formado como el diseñador UX que soy hoy."}
              </p>
              <p>
                {isEnglish
                  ? "I also take courses regularly and look for new ways to update my knowledge, keep growing, and bring better solutions to every project."
                  : "Además, realizo cursos constantemente y busco nuevas formas de actualizar mis conocimientos para seguir creciendo y aportar mejores soluciones en cada proyecto."}
              </p>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <div className="mb-8 text-center">
            <p className="font-caveat text-2xl text-primary-foreground/90">{isEnglish ? "Education and credentials" : "Formación y credenciales"}</p>
            <h2 className="mt-1 font-marker text-3xl md:text-4xl">
              <span className="marker-underline">{isEnglish ? "Certificates" : "Certificados"}</span>
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {certs.map((cert) => (
              <a
                key={cert.title}
                href={cert.href}
                target="_blank"
                rel="noreferrer"
                className="group overflow-hidden rounded-[1.5rem] border-2 border-foreground bg-card shadow-[6px_6px_0_0_var(--foreground)] transition-transform hover:-translate-y-1"
              >
                <div className="overflow-hidden bg-secondary/40">
                  {cert.image.toLowerCase().endsWith(".pdf") ? (
                    <object
                      data={cert.image}
                      type="application/pdf"
                      aria-label={isEnglish ? cert.titleEn : cert.title}
                      className="pointer-events-none h-56 w-full"
                    >
                      <div className="flex h-56 items-center justify-center p-4 text-center text-sm text-muted-foreground">
                        {isEnglish ? "Open the certificate to view it" : "Abre el certificado para verlo"}
                      </div>
                    </object>
                  ) : (
                    <img
                      src={cert.image}
                      alt={isEnglish ? cert.titleEn : cert.title}
                      className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  )}
                </div>
                <div className="p-4">
                  <p className="font-marker text-xl text-foreground">{isEnglish ? cert.titleEn : cert.title}</p>
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
