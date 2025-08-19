// "use client"

// import React from "react"
// import { Event } from "@/app/event/page"



// export default function EventList({
//   events,
//   onDelete,
// }: {
//   events: Event[]
//   onDelete: (id: string) => void
// }) {
//   if (events.length === 0) {
//     return <p className="text-center text-gray-500">No events yet</p>
//   }

//   return (
//     <ul className="space-y-2">
//       {events.map((event) => (
//         <li
//           key={event.id}
//           className="flex justify-between items-center border p-2 rounded bg-gray-50"
//         >
//           <span>
//             {event.name} –{" "}
//             <span className="text-sm text-gray-600">{event.date}</span>
//           </span>
//           <button
//             onClick={() => onDelete(event.id)}
//             className="text-red-500 hover:underline"
//           >
//             Delete
//           </button>
//         </li>
//       ))}
//     </ul>
//   )
// }


"use client"
import type { Event } from "@/components/events-page"
import { Trash2, Calendar, Clock, Sparkles } from "lucide-react"

export default function EventList({
  events,
  onDelete,
}: {
  events: Event[]
  onDelete: (id: string) => void
}) {
  if (events.length === 0) {
    return (
      <div className="text-center py-12 space-y-4">
        <div className="flex justify-center mb-4">
          <Calendar className="w-16 h-16 text-muted-foreground" />
        </div>
        <p className="text-muted-foreground text-xl font-medium">🌟 No events yet - let's create something amazing!</p>
        <p className="text-muted-foreground text-sm">Start by adding your first event above</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-foreground mb-2 flex items-center justify-center gap-2">
          <Sparkles className="w-6 h-6 text-primary" />
          Your Events ({events.length})
        </h2>
        <p className="text-muted-foreground">Manage your upcoming activities</p>
      </div>

      <ul className="space-y-4">
        {events.map((event) => (
          <li key={event.id} className="group relative">
            <div className="relative bg-secondary border border-border p-6 rounded-2xl hover:bg-secondary/80 transition-all duration-300">
              <div className="flex justify-between items-center">
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    <h3 className="font-bold text-foreground text-lg">{event.name}</h3>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">{event.date}</span>
                  </div>
                </div>

                <button
                  onClick={() => onDelete(event.id)}
                  className="flex items-center gap-2 px-4 py-2 bg-destructive/20 hover:bg-destructive/30 text-destructive hover:text-destructive-foreground font-semibold rounded-xl border border-destructive/30 transition-all duration-300"
                >
                  <Trash2 className="w-4 h-4" />
                  <span className="hidden sm:inline">Delete</span>
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}


