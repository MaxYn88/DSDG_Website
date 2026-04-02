import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function CTA() {
  return (
    <section className="bg-accent py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-accent-foreground md:text-4xl">
            Ready to Start Your Data Science Journey?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-accent-foreground/90">
            Join DSDG today and be part of a thriving community of data enthusiasts. 
            No prior experience required - just bring your curiosity!
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://forms.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Sign Up Now
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              href="/events"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-accent-foreground/30 px-6 py-3 font-medium text-accent-foreground transition-colors hover:bg-accent-foreground/10"
            >
              View Upcoming Events
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
