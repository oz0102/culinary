'use client'

import * as React from "react"

const Separator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    orientation?: "horizontal" | "vertical"
    decorative?: boolean
  }
>(
  (
    { className, orientation = "horizontal", decorative = true, ...props },
    ref
  ) => {
    const baseStyles = "shrink-0 bg-border"
    const orientationStyles = {
      horizontal: "h-[1px] w-full",
      vertical: "h-full w-[1px]"
    }
    
    const combinedClassName = [
      baseStyles,
      orientationStyles[orientation],
      className
    ].filter(Boolean).join(" ")
    
    return (
      <div
        ref={ref}
        className={combinedClassName}
        {...props}
        role={decorative ? "none" : "separator"}
        aria-orientation={decorative ? undefined : orientation}
      />
    )
  }
)
Separator.displayName = "Separator"

export { Separator }
