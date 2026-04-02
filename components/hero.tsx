import { Instagram } from "lucide-react"

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
    <section className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-primary">
      <div className="mx-auto max-w-4xl px-4 py-16 text-center">
        <h1 className="text-balance text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
          Data Science Discovery Group
        </h1>
        
        <div className="mx-auto mt-10 max-w-3xl">
          <h2 className="text-2xl font-semibold text-accent md:text-3xl">Our Mission</h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-primary-foreground/90">
            To bridge the gap between classroom learning and industry practice by providing UIUC students 
            with practical data science experience through collaborative projects and professional consulting. 
            We cultivate the next generation of data science leaders who drive innovation and make 
            data-informed decisions that positively impact society.
          </p>
        </div>

        <div className="mt-10 flex items-center justify-center gap-3">
          <a
            href="https://forms.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 font-medium text-accent-foreground transition-colors hover:bg-accent/90"
          >
            Join DSDG
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary-foreground/20 text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href="https://slack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary-foreground/20 text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            aria-label="Slack"
          >
            <SlackIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
