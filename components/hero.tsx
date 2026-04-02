import Image from "next/image"
import { ArrowRight, Instagram } from "lucide-react"

function SlackIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
    </svg>
  )
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center gap-12 md:flex-row md:justify-between">
          <div className="max-w-xl text-center md:text-left">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
              Data Science Discovery Group
            </h1>
            <p className="mt-6 text-pretty text-lg text-primary-foreground/80">
              Empowering UIUC students to explore, learn, and apply data science through hands-on projects, 
              collaborative research, and real-world consulting opportunities.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row md:items-start">
              <a
                href="https://forms.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-medium text-accent-foreground transition-colors hover:bg-accent/90"
              >
                Join DSDG
                <ArrowRight className="h-4 w-4" />
              </a>
              <div className="flex items-center gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-lg border border-primary-foreground/20 text-primary-foreground transition-colors hover:bg-primary-foreground/10"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://slack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-lg border border-primary-foreground/20 text-primary-foreground transition-colors hover:bg-primary-foreground/10"
                  aria-label="Slack"
                >
                  <SlackIcon className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative h-64 w-64 overflow-hidden rounded-2xl bg-primary-foreground/10 md:h-80 md:w-80">
              <Image
                src="/images/panda-mascot.jpg"
                alt="DSDG Panda Mascot"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
