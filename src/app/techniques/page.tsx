'use client'

import React from 'react'
import { Navbar } from '@/components/navbar'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Image from 'next/image'
import Link from 'next/link'

export default function Techniques() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Category Header */}
      <div className="category-header">
        <div className="container">
          <h1 className="text-4xl font-bold mb-4">Plating Techniques</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Master the art of food presentation with these 10 essential plating techniques from professional chefs.
          </p>
        </div>
      </div>
      
      {/* Techniques Grid */}
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Technique 1 */}
          <Card className="technique-card">
            <div className="relative aspect-video mb-4 overflow-hidden rounded-md">
              <Image 
                src="/images/superbowl-technique.jpg" 
                alt="Creating Height" 
                fill 
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Creating Height</h3>
            <p className="text-muted-foreground mb-4">
              Build from the bottom up to create visually appealing height on your plate. Use structural elements and careful stacking to create dimension.
            </p>
            <ul className="text-sm space-y-1 mb-4">
              <li>• Use ring moulds for structured bases</li>
              <li>• Layer ingredients strategically</li>
              <li>• Consider structural integrity</li>
            </ul>
            <Button asChild className="w-full">
              <Link href="/techniques/creating-height">Learn More</Link>
            </Button>
          </Card>

          {/* Technique 2 */}
          <Card className="technique-card">
            <div className="relative aspect-video mb-4 overflow-hidden rounded-md">
              <Image 
                src="/images/freeform-technique.jpg" 
                alt="Horizontal Cutting" 
                fill 
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Horizontal Cutting</h3>
            <p className="text-muted-foreground mb-4">
              Slice meat on a 45-degree bias against the grain to showcase quality and tenderness. This technique works for proteins and vegetables.
            </p>
            <ul className="text-sm space-y-1 mb-4">
              <li>• Cut against the grain for tenderness</li>
              <li>• Fan out slices to showcase interior</li>
              <li>• Maintain consistent thickness</li>
            </ul>
            <Button asChild className="w-full">
              <Link href="/techniques/horizontal-cutting">Learn More</Link>
            </Button>
          </Card>

          {/* Technique 3 */}
          <Card className="technique-card">
            <div className="relative aspect-video mb-4 overflow-hidden rounded-md">
              <Image 
                src="/images/organic-technique.jpg" 
                alt="Texture Play" 
                fill 
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Texture Play</h3>
            <p className="text-muted-foreground mb-4">
              Incorporate contrasting textures, foams, and sauces to create interest and enhance the dining experience.
            </p>
            <ul className="text-sm space-y-1 mb-4">
              <li>• Combine crispy with smooth elements</li>
              <li>• Use foams for light texture contrast</li>
              <li>• Consider mouthfeel in each bite</li>
            </ul>
            <Button asChild className="w-full">
              <Link href="/techniques/texture-play">Learn More</Link>
            </Button>
          </Card>

          {/* Technique 4 */}
          <Card className="technique-card">
            <div className="relative aspect-video mb-4 overflow-hidden rounded-md">
              <Image 
                src="/images/landscape-technique.jpg" 
                alt="Color Contrasting" 
                fill 
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Color Contrasting</h3>
            <p className="text-muted-foreground mb-4">
              Use naturally colorful ingredients to create visual appeal and make dishes more appetizing through contrast.
            </p>
            <ul className="text-sm space-y-1 mb-4">
              <li>• Use seasonal produce for natural color</li>
              <li>• Consider color wheel principles</li>
              <li>• Avoid artificial coloring</li>
            </ul>
            <Button asChild className="w-full">
              <Link href="/techniques/color-contrasting">Learn More</Link>
            </Button>
          </Card>

          {/* Technique 5 */}
          <Card className="technique-card">
            <div className="relative aspect-video mb-4 overflow-hidden rounded-md">
              <Image 
                src="/images/bathing-technique.jpg" 
                alt="Thematic Presentation" 
                fill 
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Thematic Presentation</h3>
            <p className="text-muted-foreground mb-4">
              Match your plating style to the restaurant's atmosphere and cuisine type for a cohesive dining experience.
            </p>
            <ul className="text-sm space-y-1 mb-4">
              <li>• Align with cuisine origin</li>
              <li>• Consider dining context</li>
              <li>• Maintain brand consistency</li>
            </ul>
            <Button asChild className="w-full">
              <Link href="/techniques/thematic-presentation">Learn More</Link>
            </Button>
          </Card>

          {/* Technique 6 */}
          <Card className="technique-card">
            <div className="relative aspect-video mb-4 overflow-hidden rounded-md">
              <Image 
                src="/images/hideandseek-technique.jpg" 
                alt="Plate Selection" 
                fill 
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Plate Selection</h3>
            <p className="text-muted-foreground mb-4">
              Choose the right plate size, color, and style to complement your dish and enhance its presentation.
            </p>
            <ul className="text-sm space-y-1 mb-4">
              <li>• Match plate size to portion</li>
              <li>• Consider color contrast with food</li>
              <li>• Select shapes that enhance the dish</li>
            </ul>
            <Button asChild className="w-full">
              <Link href="/techniques/plate-selection">Learn More</Link>
            </Button>
          </Card>
        </div>
      </div>
      
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
