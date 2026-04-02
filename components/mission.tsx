import { Target, Lightbulb, Rocket } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To bridge the gap between classroom learning and industry practice by providing UIUC students with practical data science experience through collaborative projects and professional consulting.",
  },
  {
    icon: Lightbulb,
    title: "Our Vision",
    description:
      "To cultivate the next generation of data science leaders who drive innovation and make data-informed decisions that positively impact society.",
  },
  {
    icon: Rocket,
    title: "Our Impact",
    description:
      "Over 200 active members, 15+ completed consulting projects, partnerships with leading tech companies, and alumni at top data science roles nationwide.",
  },
]

export function Mission() {
  return (
    <section className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-8 md:grid-cols-3">
          {values.map((value) => (
            <div key={value.title} className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <value.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-foreground">
                {value.title}
              </h3>
              <p className="mt-3 text-pretty text-muted-foreground">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
