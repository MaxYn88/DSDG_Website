import { Instagram } from "lucide-react"

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
          {/* TODO: Replace "#" with your link */}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/20 px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
          >
            Link
          </a>
        </div>
      </div>
    </section>
  )
}
