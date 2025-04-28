'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Navbar } from '@/components/navbar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { nigerianDishes } from '@/lib/data-utils'
import { 
  LandscapeTechnique, 
  FreeFormTechnique, 
  OrganicMaterialsTechnique,
  HideAndSeekTechnique,
  BathingTechnique,
  SuperBowlTechnique
} from '@/components/plating-techniques'

export default function DishDetail({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState(0)
  
  // Find the dish by ID
  const dish = nigerianDishes.find(d => d.id === params.id)
  
  if (!dish) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="container py-12 flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Dish Not Found</h1>
            <p className="text-muted-foreground mb-6">The dish you're looking for doesn't exist or has been removed.</p>
            <Button onClick={() => router.push('/nigerian')}>
              Back to Nigerian Dishes
            </Button>
          </div>
        </div>
      </div>
    )
  }
  
  // Get the current plating technique based on active tab
  const currentTechnique = dish.platingTechniques[activeTab]
  
  // Find related dishes
  const relatedDishes = dish.relatedDishes
    .map(id => nigerianDishes.find(d => d.id === id))
    .filter(Boolean)
  
  // Map technique type to component
  const getTechniqueComponent = (technique: any) => {
    const props = {
      title: technique.name,
      description: technique.description,
      steps: technique.steps,
      imageSrc: technique.imageSrc,
      altText: `${dish.name} with ${technique.name} plating`
    }
    
    switch (technique.techniqueType) {
      case 'landscape':
        return <LandscapeTechnique {...props} />
      case 'freeform':
        return <FreeFormTechnique {...props} />
      case 'organic':
        return <OrganicMaterialsTechnique {...props} />
      case 'hideandseek':
        return <HideAndSeekTechnique {...props} />
      case 'bathing':
        return <BathingTechnique {...props} />
      case 'superbowl':
        return <SuperBowlTechnique {...props} />
      default:
        return (
          <div className="p-6 bg-muted rounded-lg">
            <h3 className="text-xl font-semibold mb-3">{technique.name}</h3>
            <p className="text-muted-foreground mb-6">{technique.description}</p>
            <div className="relative aspect-video rounded-lg overflow-hidden mb-6">
              <Image 
                src={technique.imageSrc} 
                alt={`${dish.name} with ${technique.name} plating`}
                fill
                className="object-cover"
              />
            </div>
            <h4 className="font-medium mb-3">Plating Steps:</h4>
            <ol className="space-y-2 mb-6">
              {technique.steps.map((step: string, index: number) => (
                <li key={index} className="pl-6 relative">
                  <span className="absolute left-0 font-medium">{index + 1}.</span>
                  {step}
                </li>
              ))}
            </ol>
            <h4 className="font-medium mb-3">Tips:</h4>
            <ul className="space-y-2">
              {technique.tips.map((tip: string, index: number) => (
                <li key={index} className="pl-6 relative">
                  <span className="absolute left-0">•</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        )
    }
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src={dish.imageSrc} 
            alt={dish.name} 
            fill 
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            {dish.name}
          </h1>
          <p className="text-lg md:text-xl mb-4 max-w-2xl">
            {dish.description}
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-primary/20 backdrop-blur-sm rounded-full text-sm">
              {dish.category.charAt(0).toUpperCase() + dish.category.slice(1)}
            </span>
            {dish.subcategory && (
              <span className="px-3 py-1 bg-primary/20 backdrop-blur-sm rounded-full text-sm">
                {dish.subcategory.charAt(0).toUpperCase() + dish.subcategory.slice(1)}
              </span>
            )}
            <span className="px-3 py-1 bg-primary/20 backdrop-blur-sm rounded-full text-sm">
              {dish.origin}
            </span>
          </div>
        </div>
      </section>
      
      {/* Dish Details */}
      <section className="py-12 container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6">Plating Techniques</h2>
            
            {/* Technique Tabs */}
            <div className="flex overflow-x-auto mb-6 pb-2 gap-2">
              {dish.platingTechniques.map((technique, index) => (
                <button
                  key={technique.id}
                  onClick={() => setActiveTab(index)}
                  className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                    activeTab === index 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-muted hover:bg-muted/80'
                  }`}
                >
                  {technique.name}
                </button>
              ))}
            </div>
            
            {/* Technique Content */}
            <div className="mb-8">
              {getTechniqueComponent(currentTechnique)}
            </div>
            
            <Separator className="my-8" />
            
            {/* Ingredients */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">Ingredients</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {dish.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Sidebar */}
          <div>
            <div className="bg-muted rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold mb-4">About {dish.name}</h3>
              <p className="text-muted-foreground mb-4">{dish.description}</p>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium">Origin</h4>
                  <p className="text-muted-foreground">{dish.origin}</p>
                </div>
                <div>
                  <h4 className="font-medium">Category</h4>
                  <p className="text-muted-foreground capitalize">{dish.category}</p>
                </div>
                {dish.subcategory && (
                  <div>
                    <h4 className="font-medium">Type</h4>
                    <p className="text-muted-foreground capitalize">{dish.subcategory}</p>
                  </div>
                )}
              </div>
            </div>
            
            {/* Related Dishes */}
            {relatedDishes.length > 0 && (
              <div>
                <h3 className="text-xl font-bold mb-4">Related Dishes</h3>
                <div className="space-y-4">
                  {relatedDishes.map(related => related && (
                    <div 
                      key={related.id}
                      className="group cursor-pointer"
                      onClick={() => router.push(`/nigerian/${related.id}`)}
                    >
                      <div className="flex gap-3 items-center">
                        <div className="relative h-16 w-16 rounded-md overflow-hidden flex-shrink-0">
                          <Image 
                            src={related.imageSrc} 
                            alt={related.name} 
                            fill 
                            className="object-cover group-hover:scale-110 transition-transform"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium group-hover:text-primary transition-colors">{related.name}</h4>
                          <p className="text-sm text-muted-foreground line-clamp-1">{related.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
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
