import { BookOpen, Briefcase, Code, Users } from "lucide-react"

const branches = [
  {
    title: "Projects",
    description:
      "Work on real-world data science projects in teams. From machine learning models to data visualization, gain hands-on experience with cutting-edge technologies.",
    icon: Code,
  },
  {
    title: "Consulting",
    description:
      "Partner with companies and organizations to solve their data challenges. Build your professional portfolio while making an impact.",
    icon: Briefcase,
  },
  {
    title: "Education",
    description:
      "Learn from workshops, bootcamps, and peer mentorship. Whether you are a beginner or advanced, we have resources for your growth.",
    icon: BookOpen,
  },
  {
    title: "Community",
    description:
      "Connect with fellow data enthusiasts through socials, hackathons, and networking events. Build lasting relationships in the field.",
    icon: Users,
  },
]

export function Branches() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            What We Do
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
            DSDG operates through four interconnected branches, each designed to help you grow as a data scientist.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {branches.map((branch) => (
            <div
              key={branch.title}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-accent hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                <branch.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground">
                {branch.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {branch.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
