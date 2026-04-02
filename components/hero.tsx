import { Instagram } from "lucide-react"
import Image from "next/image"

function DotPattern({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="grid grid-cols-5 gap-1.5">
        {Array.from({ length: 25 }).map((_, i) => (
          <div key={i} className="h-1.5 w-1.5 rounded-full bg-accent" />
        ))}
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] overflow-hidden bg-primary">
      {/* Orange diagonal shape */}
      <div className="absolute bottom-0 right-0 h-full w-1/3 origin-bottom-right skew-x-[-12deg] translate-x-20 bg-accent" />
      
      {/* Content container */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl flex-col justify-between px-6 py-10 lg:flex-row lg:items-center lg:px-12">
        {/* Left content */}
        <div className="flex-1 lg:max-w-xl">
          <p className="text-sm font-medium tracking-wide text-primary-foreground/80">UIUC Presents:</p>
          
          <h1 className="mt-2 text-6xl font-black tracking-tight text-primary-foreground md:text-7xl lg:text-8xl">
            DSDG
          </h1>
          
          <p className="mt-1 text-sm font-semibold tracking-widest text-accent md:text-base">
            DATA SCIENCE DEVELOPMENT GROUP
          </p>

          <div className="mt-10 space-y-8">
            {/* Collaborate on Projects */}
            <div>
              <h2 className="text-lg font-bold text-primary-foreground md:text-xl">Collaborate on Projects</h2>
              <p className="mt-2 text-primary-foreground/90">Branches:</p>
              <ul className="mt-1 ml-4 list-disc space-y-0.5 text-primary-foreground/90">
                <li>AI/ML</li>
                <li>Cybersecurity</li>
                <li>UI/UX</li>
                <li>Data Analytics</li>
              </ul>
            </div>

            {/* Connect with Mentors */}
            <div>
              <h2 className="text-lg font-bold text-primary-foreground md:text-xl">Connect with Mentors</h2>
              <p className="mt-2 text-primary-foreground/90">
                Work with industry<br />professionals + faculty
              </p>
            </div>

            {/* Showcase Your Work */}
            <div>
              <h2 className="text-lg font-bold text-primary-foreground md:text-xl">Showcase Your Work</h2>
              <p className="mt-2 text-primary-foreground/90">
                Present your project at<br />our end-of-sem<br />Showcase Day!
              </p>
            </div>
          </div>

          {/* Decorative dots - bottom left */}
          <DotPattern className="mt-12 hidden lg:block" />
        </div>

        {/* Right content - Panda logo */}
        <div className="mt-10 flex flex-1 items-center justify-center lg:mt-0 lg:justify-end lg:pr-20">
          <div className="relative flex h-56 w-56 items-center justify-center rounded-full bg-white shadow-2xl md:h-72 md:w-72 lg:h-80 lg:w-80">
            <Image
              src="/images/panda-logo.png"
              alt="DSDG Panda Logo"
              width={280}
              height={280}
              className="h-auto w-4/5"
              priority
            />
          </div>
        </div>

        {/* Decorative dots - top right */}
        <DotPattern className="absolute right-[35%] top-8 hidden lg:block" />
      </div>

      {/* Bottom bar with social */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
          {/* Decorative dots - bottom left (mobile) */}
          <DotPattern className="lg:hidden" />
          
          {/* Social links */}
          <div className="ml-auto flex items-center gap-4 rounded-lg bg-accent px-5 py-3">
            <a
              href="https://www.instagram.com/dsdg.illinois/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-medium text-accent-foreground transition-opacity hover:opacity-80"
            >
              <Instagram className="h-5 w-5" />
              <span>@dsdg.illinois</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
