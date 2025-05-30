'use client'

import React from 'react'
import { Navbar } from '@/components/navbar'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Image from 'next/image'
import Link from 'next/link'
import { nigerianDishes } from '@/lib/data-utils'

export default function NigerianDishes() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Category Header */}
      <div className="category-header">
        <div className="container">
          <h1 className="text-4xl font-bold mb-4">Nigerian Dishes</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore 30 traditional Nigerian dishes with various plating techniques that showcase the rich culinary heritage of Nigeria.
          </p>
        </div>
      </div>
      
      {/* Filters */}
      <div className="container py-8">
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          <button className="filter-button-active">All Dishes</button>
          <button className="filter-button">Rice Dishes</button>
          <button className="filter-button">Soups & Stews</button>
          <button className="filter-button">Street Food</button>
          <button className="filter-button">Staples</button>
        </div>
        
        <Tabs defaultValue="grid" className="w-full">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">{nigerianDishes.length} Nigerian Dishes</h2>
            <TabsList>
              <TabsTrigger value="grid">Grid</TabsTrigger>
              <TabsTrigger value="list">List</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="grid" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {nigerianDishes.map((dish) => (
                <Card key={dish.id} className="overflow-hidden">
                  <div className="relative aspect-square">
                    <Image 
                      src={dish.imageSrc}
                      alt={dish.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg">{dish.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-3">
                      {dish.description}
                    </p>
                    <Button asChild size="sm">
                      <Link href={`/nigerian/${dish.id}`}>View Plating Ideas</Link>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="list" className="mt-0">
            <div className="space-y-4">
              {nigerianDishes.map((dish) => (
                <Card key={dish.id} className="overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="relative w-full md:w-48 h-48 md:h-auto"> {/* Adjusted height for list view consistency */}
                      <Image 
                        src={dish.imageSrc}
                        alt={dish.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4 flex-1">
                      <h3 className="font-semibold text-lg">{dish.name}</h3>
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-3"> {/* Added line-clamp for consistency */}
                        {dish.description}
                      </p>
                      <Button asChild size="sm">
                        <Link href={`/nigerian/${dish.id}`}>View Plating Ideas</Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
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
