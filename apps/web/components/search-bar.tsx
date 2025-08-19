// "use client"

// import React from "react"

// export default function SearchBar({
//   value,
//   onChange,
// }: {
//   value: string
//   onChange: (value: string) => void
// }) {
//   return (
//     <input
//       type="text"
      
//       placeholder="Search events..."
//       value={value}
//       onChange={(e) => onChange(e.target.value)}
//       className="w-full p-2 border rounded"
//     />
//   )
// }



"use client"
import { Search, Sparkles } from "lucide-react"

export default function SearchBar({
  value,
  onChange,
}: {
  value: string
  onChange: (value: string) => void
}) {
  return (
    <div className="relative group">
      <div className="relative bg-input border border-border rounded-2xl shadow-md overflow-hidden">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-hover:text-primary w-5 h-5 transition-colors duration-300" />

        <Sparkles className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground group-hover:text-primary w-4 h-4 transition-colors duration-300" />

        <input
          type="text"
          placeholder="✨ Search your amazing events..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full pl-12 pr-12 py-4 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-lg font-medium"
        />
      </div>
    </div>
  )
}



