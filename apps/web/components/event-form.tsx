// "use client"

// import React, { useState } from "react"
// import { Event } from "@/app/event/page"
// import { generateId } from "@/lib/utils"

// export default function EventForm({
//   onAddEvent,
// }: {
//   onAddEvent: (event: Event) => void
// }) {
//   const [name, setName] = useState("")
//   const [date, setDate] = useState("")

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     if (!name || !date) return

//     onAddEvent({ id: generateId(), name, date })
//     setName("")
//     setDate("")
//   }

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="flex flex-col gap-3 p-4 border rounded-lg shadow-sm bg-white"
//     >
//       <input
//         type="text"
//         placeholder="Event name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         required
//         className="p-2 border rounded"
//       />
//       <input
//         type="date"
//         value={date}
//         onChange={(e) => setDate(e.target.value)}
//         required
//         className="p-2 border rounded"
//       />
//       <button
//         type="submit"
//         className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700  cursor-pointer transition"
//       >
//         Add Event
//       </button>
      


      
//     </form>
//   )
// }


"use client"

import type React from "react"
import { useState } from "react"
import type { Event } from "@/components/events-page"
import { generateId } from "@/lib/utils"
import { Plus, Calendar, Type, Sparkles } from "lucide-react"

export default function EventForm({
  onAddEvent,
}: {
  onAddEvent: (event: Event) => void
}) {
  const [name, setName] = useState("")
  const [date, setDate] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !date) return
    onAddEvent({ id: generateId(), name, date })
    setName("")
    setDate("")
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-foreground mb-2 flex items-center justify-center gap-2">
          <Plus className="w-6 h-6 text-primary" />
          Create New Event
        </h2>
        <p className="text-muted-foreground">Add something amazing to your calendar</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="relative group">
          <Type className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-hover:text-primary w-5 h-5 transition-colors duration-300" />
          <input
            type="text"
            placeholder="What's the event name?"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full pl-12 pr-4 py-4 bg-input border border-border rounded-2xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring transition-all duration-300 text-lg font-medium"
          />
        </div>

        <div className="relative group">
          <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-hover:text-primary w-5 h-5 transition-colors duration-300" />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            className="w-full pl-12 pr-4 py-4 bg-input border border-border rounded-2xl text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring transition-all duration-300 text-lg font-medium"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-2xl font-bold text-lg shadow-lg transition-all duration-300 hover:shadow-xl"
        >
          <div className="flex items-center justify-center gap-3">
            <Sparkles className="w-5 h-5" />✨ Add Event
            <Plus className="w-5 h-5" />
          </div>
        </button>
      </form>
    </div>
  )
}



