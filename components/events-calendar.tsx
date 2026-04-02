"use client"

import { useState } from "react"
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
  addMonths,
  subMonths,
  startOfWeek,
  endOfWeek,
} from "date-fns"
import { ChevronLeft, ChevronRight, MapPin, Clock, Users } from "lucide-react"

type Event = {
  id: string
  title: string
  date: Date
  time: string
  location: string
  type: "info-session" | "social" | "showcase" | "workshop"
  description: string
}

const events: Event[] = [
  {
    id: "1",
    title: "DSDG Info Session",
    date: new Date(2026, 3, 8),
    time: "6:00 PM - 7:00 PM",
    location: "Siebel Center 1404",
    type: "info-session",
    description: "Learn about DSDG, our projects, and how to get involved.",
  },
  {
    id: "2",
    title: "Data Science Social",
    date: new Date(2026, 3, 15),
    time: "5:00 PM - 7:00 PM",
    location: "Illini Union Room 210",
    type: "social",
    description: "Network with fellow data science enthusiasts over pizza and games.",
  },
  {
    id: "3",
    title: "Spring Showcase Day",
    date: new Date(2026, 3, 25),
    time: "3:00 PM - 6:00 PM",
    location: "ECEB Atrium",
    type: "showcase",
    description: "See presentations from all our project teams and consulting groups.",
  },
  {
    id: "4",
    title: "ML Workshop: Neural Networks",
    date: new Date(2026, 3, 18),
    time: "4:00 PM - 5:30 PM",
    location: "Siebel Center 1404",
    type: "workshop",
    description: "Hands-on workshop building neural networks with PyTorch.",
  },
  {
    id: "5",
    title: "Company Info Session",
    date: new Date(2026, 4, 5),
    time: "6:00 PM - 7:30 PM",
    location: "ECEB 3017",
    type: "info-session",
    description: "Learn about data science opportunities from industry partners.",
  },
  {
    id: "6",
    title: "End of Semester Celebration",
    date: new Date(2026, 4, 10),
    time: "6:00 PM - 9:00 PM",
    location: "Murphy's Pub",
    type: "social",
    description: "Celebrate the semester with food, drinks, and awards.",
  },
]

const eventTypeColors = {
  "info-session": "bg-blue-100 text-blue-800 border-blue-200",
  social: "bg-green-100 text-green-800 border-green-200",
  showcase: "bg-accent/20 text-accent border-accent/30",
  workshop: "bg-purple-100 text-purple-800 border-purple-200",
}

const eventTypeDotColors = {
  "info-session": "bg-blue-500",
  social: "bg-green-500",
  showcase: "bg-accent",
  workshop: "bg-purple-500",
}

export function EventsCalendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date(2026, 3, 1))
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  const monthStart = startOfMonth(currentMonth)
  const monthEnd = endOfMonth(currentMonth)
  const calendarStart = startOfWeek(monthStart)
  const calendarEnd = endOfWeek(monthEnd)

  const days = eachDayOfInterval({ start: calendarStart, end: calendarEnd })

  const getEventsForDay = (day: Date) => {
    return events.filter((event) => isSameDay(event.date, day))
  }

  const selectedDayEvents = selectedDate ? getEventsForDay(selectedDate) : []

  const upcomingEvents = events
    .filter((event) => event.date >= new Date(2026, 3, 1))
    .sort((a, b) => a.date.getTime() - b.date.getTime())
    .slice(0, 5)

  return (
    <div className="min-h-[calc(100vh-4rem)]">
      {/* Header */}
      <div className="bg-primary py-16 text-center">
        <div className="mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium tracking-wide text-primary-foreground/70">DSDG Events</p>
          <h1 className="mt-2 text-4xl font-black tracking-tight text-primary-foreground md:text-5xl">
            Upcoming Events
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
            Join us for info sessions, socials, workshops, and our semester showcase.
            All events are open to UIUC students.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Calendar */}
          <div className="lg:col-span-2">
            <div className="rounded-xl border border-border bg-card p-4 shadow-sm md:p-6">
              {/* Calendar Header */}
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-xl font-semibold text-card-foreground">
                  {format(currentMonth, "MMMM yyyy")}
                </h2>
                <div className="flex gap-2">
                  <button
                    onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    aria-label="Previous month"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    aria-label="Next month"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Day Headers */}
              <div className="mb-2 grid grid-cols-7 text-center text-sm font-medium text-muted-foreground">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                  <div key={day} className="py-2">
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-1">
                {days.map((day) => {
                  const dayEvents = getEventsForDay(day)
                  const isCurrentMonth = isSameMonth(day, currentMonth)
                  const isSelected = selectedDate && isSameDay(day, selectedDate)

                  return (
                    <button
                      key={day.toISOString()}
                      onClick={() => setSelectedDate(day)}
                      className={`relative flex min-h-[60px] flex-col items-center rounded-lg p-1 transition-colors md:min-h-[80px] md:p-2 ${
                        isCurrentMonth
                          ? "text-foreground hover:bg-muted"
                          : "text-muted-foreground/50"
                      } ${isSelected ? "bg-primary/10 ring-2 ring-primary" : ""}`}
                    >
                      <span
                        className={`text-sm md:text-base ${
                          isSelected ? "font-semibold" : ""
                        }`}
                      >
                        {format(day, "d")}
                      </span>
                      {dayEvents.length > 0 && (
                        <div className="mt-1 flex flex-wrap justify-center gap-0.5">
                          {dayEvents.slice(0, 3).map((event) => (
                            <div
                              key={event.id}
                              className={`h-1.5 w-1.5 rounded-full md:h-2 md:w-2 ${
                                eventTypeDotColors[event.type]
                              }`}
                            />
                          ))}
                        </div>
                      )}
                    </button>
                  )
                })}
              </div>

              {/* Legend */}
              <div className="mt-6 flex flex-wrap justify-center gap-4 border-t border-border pt-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="h-3 w-3 rounded-full bg-blue-500" />
                  Info Session
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                  Social
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="h-3 w-3 rounded-full bg-accent" />
                  Showcase
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="h-3 w-3 rounded-full bg-purple-500" />
                  Workshop
                </div>
              </div>
            </div>

            {/* Selected Day Events */}
            {selectedDate && (
              <div className="mt-6 rounded-xl border border-border bg-card p-4 shadow-sm md:p-6">
                <h3 className="mb-4 text-lg font-semibold text-card-foreground">
                  {format(selectedDate, "EEEE, MMMM d, yyyy")}
                </h3>
                {selectedDayEvents.length > 0 ? (
                  <div className="space-y-4">
                    {selectedDayEvents.map((event) => (
                      <div
                        key={event.id}
                        className={`rounded-lg border p-4 ${eventTypeColors[event.type]}`}
                      >
                        <h4 className="font-semibold">{event.title}</h4>
                        <p className="mt-1 text-sm opacity-80">{event.description}</p>
                        <div className="mt-3 flex flex-wrap gap-4 text-sm">
                          <div className="flex items-center gap-1.5">
                            <Clock className="h-4 w-4" />
                            {event.time}
                          </div>
                          <div className="flex items-center gap-1.5">
                            <MapPin className="h-4 w-4" />
                            {event.location}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground">No events scheduled for this day.</p>
                )}
              </div>
            )}
          </div>

          {/* Upcoming Events Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-xl border border-border bg-card p-4 shadow-sm md:p-6">
              <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-card-foreground">
                <Users className="h-5 w-5 text-accent" />
                Upcoming Events
              </h3>
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <button
                    key={event.id}
                    onClick={() => setSelectedDate(event.date)}
                    className="w-full rounded-lg border border-border p-3 text-left transition-colors hover:border-accent hover:bg-muted"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="font-medium text-card-foreground">
                          {event.title}
                        </p>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {format(event.date, "MMM d")} at {event.time.split(" - ")[0]}
                        </p>
                      </div>
                      <div
                        className={`h-2.5 w-2.5 shrink-0 rounded-full ${
                          eventTypeDotColors[event.type]
                        }`}
                      />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
