import * as React from "react"
import { cn } from "@/lib/utils"

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl"
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, maxWidth = "lg", ...props }, ref) => {
    const maxWidthClasses = {
      sm: "max-w-sm",
      md: "max-w-md", 
      lg: "max-w-4xl",
      xl: "max-w-6xl",
      "2xl": "max-w-7xl"
    }

    return (
      <div
        ref={ref}
        className={cn(
          "mx-auto w-full px-4 sm:px-6 lg:px-8",
          maxWidthClasses[maxWidth],
          className
        )}
        {...props}
      />
    )
  }
)
Container.displayName = "Container"

export { Container }