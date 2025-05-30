'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { nigerianDishes, continentalDishes, desserts } from '@/lib/data-utils'

export default function Home() {
  // Get featured dishes (first one from each category)
  const featuredNigerian = nigerianDishes[0]
  const featuredContinental = continentalDishes[0]
  const featuredDessert = desserts[0]
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/hero-image.jpg" 
            alt="Beautifully plated dishes" 
            fill 
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container relative z-10 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Culinary Canvas: The Art of Food Plating
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl">
            Explore 90 dishes with professional plating techniques showcasing the rich culinary heritage of Nigerian, Continental, and Dessert cuisines.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/techniques">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Explore Techniques
              </Button>
            </Link>
            <Link href="/nigerian">
              <Button size="lg" variant="outline" className="bg-background/20 hover:bg-background/30 backdrop-blur-sm">
                Browse Dishes
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Featured Dishes Section */}
      <section className="py-16 container">
        <h2 className="text-3xl font-bold mb-8">Featured Plating Techniques</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Nigerian Featured */}
          <div className="bg-muted rounded-lg overflow-hidden">
            <div className="relative aspect-video">
              <Image 
                src={featuredNigerian.imageSrc} 
                alt={featuredNigerian.name} 
                fill 
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{featuredNigerian.name}</h3>
              <p className="text-muted-foreground mb-4 line-clamp-3">{featuredNigerian.description}</p>
              <Link href={`/nigerian/${featuredNigerian.id}`}>
                <Button variant="outline" className="w-full">View Plating Ideas</Button>
              </Link>
            </div>
          </div>
          
          {/* Continental Featured */}
          <div className="bg-muted rounded-lg overflow-hidden">
            <div className="relative aspect-video">
              <Image 
                src={featuredContinental.imageSrc} 
                alt={featuredContinental.name} 
                fill 
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{featuredContinental.name}</h3>
              <p className="text-muted-foreground mb-4 line-clamp-3">{featuredContinental.description}</p>
              <Link href={`/continental/${featuredContinental.id}`}>
                <Button variant="outline" className="w-full">View Plating Ideas</Button>
              </Link>
            </div>
          </div>
          
          {/* Dessert Featured */}
          <div className="bg-muted rounded-lg overflow-hidden">
            <div className="relative aspect-video">
              <Image 
                src={featuredDessert.imageSrc} 
                alt={featuredDessert.name} 
                fill 
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{featuredDessert.name}</h3>
              <p className="text-muted-foreground mb-4 line-clamp-3">{featuredDessert.description}</p>
              <Link href={`/desserts/${featuredDessert.id}`}>
                <Button variant="outline" className="w-full">View Plating Ideas</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Search Section */}
      <section className="py-16 bg-muted">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-8">Find Plating Inspiration</h2>
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Input 
                type="text" 
                placeholder="Search for dishes or techniques..." 
                className="pr-10 h-12"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="py-16 container">
        <h2 className="text-3xl font-bold mb-8">Explore by Category</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link href="/nigerian" className="group">
            <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
              <Image 
                src="/images/nigerian-placeholder.jpg" 
                alt="Nigerian Dishes" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">Nigerian Dishes</h3>
              </div>
            </div>
            <p className="text-muted-foreground">Explore 30 traditional Nigerian dishes with various plating techniques.</p>
          </Link>
          
          <Link href="/continental" className="group">
            <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
              <Image 
                src="/images/continental-placeholder.jpg" 
                alt="Continental Dishes" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">Continental Dishes</h3>
              </div>
            </div>
            <p className="text-muted-foreground">Discover 30 exquisite continental dishes with professional plating techniques.</p>
          </Link>
          
          <Link href="/desserts" className="group">
            <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
              <Image 
                src="/images/desserts-placeholder.jpg" 
                alt="Desserts" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">Desserts</h3>
              </div>
            </div>
            <p className="text-muted-foreground">Indulge in 30 delightful desserts from around the world with elegant plating techniques.</p>
          </Link>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="mt-auto py-8 px-4 border-t">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-2">Culinary Canvas</h2>
          <p className="text-muted-foreground mb-4">The Art of Food Plating</p>
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Culinary Canvas. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
