import { EventsCalendar } from "@/components/events-calendar"

export const metadata = {
  title: "Events | UIUC Data Science Discovery Group",
  description: "View upcoming DSDG events including info sessions, socials, workshops, and our semester showcase.",
}

export default function EventsPage() {
  return <EventsCalendar />
}
