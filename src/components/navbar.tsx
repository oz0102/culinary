'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Navbar() {
  const pathname = usePathname()
  
  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(`${path}/`)
  }
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">Culinary Canvas</span>
          </Link>
        </div>
        <nav className="flex items-center space-x-6 text-sm font-medium flex-1">
          <Link 
            href="/nigerian" 
            className={`transition-colors hover:text-foreground/80 ${
              isActive('/nigerian') ? 'text-foreground' : 'text-foreground/60'
            }`}
          >
            Nigerian
          </Link>
          <Link 
            href="/continental" 
            className={`transition-colors hover:text-foreground/80 ${
              isActive('/continental') ? 'text-foreground' : 'text-foreground/60'
            }`}
          >
            Continental
          </Link>
          <Link 
            href="/desserts" 
            className={`transition-colors hover:text-foreground/80 ${
              isActive('/desserts') ? 'text-foreground' : 'text-foreground/60'
            }`}
          >
            Desserts
          </Link>
          <Link 
            href="/techniques" 
            className={`transition-colors hover:text-foreground/80 ${
              isActive('/techniques') ? 'text-foreground' : 'text-foreground/60'
            }`}
          >
            Techniques
          </Link>
        </nav>
      </div>
    </header>
  )
}
