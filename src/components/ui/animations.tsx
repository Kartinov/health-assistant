import { cn } from "@/lib/utils"

interface FadeInProps {
  children: React.ReactNode
  className?: string
  duration?: "fast" | "medium" | "slow"
  delay?: "none" | "short" | "medium" | "long"
}

const durationClasses = {
  fast: "duration-300",
  medium: "duration-500",
  slow: "duration-700"
}

const delayClasses = {
  none: "delay-0",
  short: "delay-150",
  medium: "delay-300",
  long: "delay-500"
}

export function FadeIn({ 
  children, 
  className, 
  duration = "medium",
  delay = "none" 
}: FadeInProps) {
  return (
    <div
      className={cn(
        "animate-in fade-in-0 slide-in-from-bottom-4",
        durationClasses[duration],
        delayClasses[delay],
        className
      )}
    >
      {children}
    </div>
  )
}
