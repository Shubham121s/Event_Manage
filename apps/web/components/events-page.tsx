"use client"

import { useState, useEffect } from "react"
import EventForm from "@/components/event-form"
import EventList from "@/components/event-list"
import SearchBar from "@/components/search-bar"
import { CalendarDays, Stars, Zap } from "lucide-react"

export type Event = {
  id: string
  name: string
  date: string
}

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    const saved = localStorage.getItem("events")
    if (saved) setEvents(JSON.parse(saved))
  }, [])

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events))
  }, [events])

  const addEvent = (event: Event) => {
    setEvents((prev) => [...prev, event])
  }

  const deleteEvent = (id: string) => {
    setEvents((prev) => prev.filter((e) => e.id !== id))
  }

  const filteredEvents = events.filter((e) => e.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="min-h-screen bg-background">
      <div className="flex items-center justify-center min-h-screen p-6">
        <div className="max-w-4xl w-full space-y-8">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Stars className="w-8 h-8 text-primary" />
              <CalendarDays className="w-12 h-12 text-primary" />
              <Zap className="w-8 h-8 text-primary" />
            </div>

            <h1 className="text-6xl font-black text-foreground">Event Manager</h1>
            <p className="text-muted-foreground text-xl font-medium">✨ Organize your life with style and elegance</p>
          </div>

          <div className="bg-card border border-border shadow-lg rounded-3xl p-8 space-y-8">
            <EventForm onAddEvent={addEvent} />
            <SearchBar value={search} onChange={setSearch} />
            <EventList events={filteredEvents} onDelete={deleteEvent} />
          </div>
        </div>
      </div>
    </div>
  )
}
