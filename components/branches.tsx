import { Brain, Shield, Palette, BarChart3, Users, Award } from "lucide-react"

const branches = [
  {
    title: "AI/ML",
    description:
      "Build machine learning models and explore artificial intelligence applications with real-world datasets.",
    icon: Brain,
    color: "bg-blue-500",
  },
  {
    title: "Cybersecurity",
    description:
      "Learn about data security, privacy, and protection while working on security-focused projects.",
    icon: Shield,
    color: "bg-green-500",
  },
  {
    title: "UI/UX",
    description:
      "Design intuitive interfaces and create compelling data visualizations that tell stories.",
    icon: Palette,
    color: "bg-purple-500",
  },
  {
    title: "Data Analytics",
    description:
      "Dive deep into data analysis, statistical modeling, and business intelligence solutions.",
    icon: BarChart3,
    color: "bg-accent",
  },
]

const features = [
  {
    title: "Connect with Mentors",
    description: "Work with industry professionals and faculty advisors who guide you through real projects.",
    icon: Users,
  },
  {
    title: "Showcase Your Work",
    description: "Present your projects at our end-of-semester Showcase Day to peers, faculty, and recruiters.",
    icon: Award,
  },
]

export function Branches() {
  return (
    <section id="what-we-do" className="bg-primary py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="text-center">
          <p className="text-sm font-medium tracking-wide text-primary-foreground/70">What We Offer</p>
          <h2 className="mt-2 text-4xl font-black tracking-tight text-primary-foreground md:text-5xl">
            Collaborate on Projects
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-primary-foreground/80">
            Join one of our specialized branches and work on real projects that build your skills and portfolio.
          </p>
        </div>

        {/* Branches Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {branches.map((branch) => (
            <div
              key={branch.title}
              className="group rounded-xl bg-white p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg ${branch.color} text-white`}>
                <branch.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-primary">
                {branch.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {branch.description}
              </p>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex gap-4 rounded-xl border-2 border-accent/30 bg-primary-foreground/5 p-6"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <feature.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-primary-foreground">{feature.title}</h3>
                <p className="mt-1 text-primary-foreground/80">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
