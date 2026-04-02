import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="DSDG team collaborating"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary/40" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <h1 className="text-5xl font-bold text-primary-foreground md:text-6xl lg:text-7xl">
          Data Science Development Group
        </h1>
        
        <p className="mx-auto mt-6 max-w-2xl text-xl italic text-primary-foreground/90 md:text-2xl">
          &quot;Bridging the gap between classroom learning and industry practice&quot;
        </p>
        
        <p className="mt-3 text-lg font-medium text-primary-foreground/80">
          - DSDG @ UIUC
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/what-we-do"
            className="rounded bg-accent px-8 py-3 text-sm font-semibold uppercase tracking-wide text-accent-foreground transition-colors hover:bg-accent/90"
          >
            About Us
          </Link>
          <a
            href="https://forms.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded bg-accent px-8 py-3 text-sm font-semibold uppercase tracking-wide text-accent-foreground transition-colors hover:bg-accent/90"
          >
            Get Involved
          </a>
        </div>
      </div>
    </section>
  )
}
