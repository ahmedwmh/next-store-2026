"use client"

import { Calendar } from "@/components/ui/calendar"
import { cn } from "@/lib/utils"
import { useState } from "react"
import type { DateRange } from "react-day-picker"

type BookingCalndarProps = {
  className?: string
}

function BookingCalndar({ className }: BookingCalndarProps) {
  const currentDate = new Date()
  const defaultSelected = { from: undefined, to: undefined }
  const [range, setRange] = useState<DateRange | undefined>(defaultSelected)

  return (
    <Calendar
      className={cn(
        "w-full max-w-full rounded-lg border border-border bg-background p-2 [--cell-size:2.25rem]",
        className
      )}
      mode="range"
      selected={range}
      onSelect={setRange}
      defaultMonth={currentDate}
    />
  )
}

export default BookingCalndar