'use client'

import React from 'react'
import { Navbar } from '@/components/navbar'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Image from 'next/image'
import Link from 'next/link'

export default function DishDetail() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Dish Header */}
      <div className="relative h-[40vh] min-h-[300px]">
        <Image 
          src="/dish-detail-placeholder.jpg" 
          alt="Jollof Rice" 
          fill 
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-end">
          <div className="container py-8">
            <h1 className="text-4xl font-bold text-white mb-2">Jollof Rice</h1>
            <p className="text-lg text-white/80 max-w-2xl">
              A flavorful West African rice dish cooked with tomatoes, peppers, and aromatic spices.
            </p>
          </div>
        </div>
      </div>
      
      {/* Dish Content */}
      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Dish Info */}
          <div className="lg:col-span-1">
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">About Jollof Rice</h2>
              <p className="text-muted-foreground mb-4">
                Jollof Rice is a one-pot rice dish popular in many West African countries, particularly Nigeria. It's made with rice, tomatoes, onions, peppers, and various spices. The dish is often served at parties and special occasions.
              </p>
              
              <h3 className="text-lg font-medium mt-6 mb-2">Origin</h3>
              <p className="text-muted-foreground mb-4">
                Nigeria (West Africa)
              </p>
              
              <h3 className="text-lg font-medium mt-6 mb-2">Key Ingredients</h3>
              <ul className="list-disc pl-5 text-muted-foreground space-y-1 mb-4">
                <li>Long grain rice</li>
                <li>Tomatoes and tomato paste</li>
                <li>Red bell peppers</li>
                <li>Scotch bonnet peppers</li>
                <li>Onions</li>
                <li>Vegetable oil</li>
                <li>Curry powder, thyme, bay leaves</li>
                <li>Chicken or vegetable stock</li>
              </ul>
              
              <h3 className="text-lg font-medium mt-6 mb-2">Plating Considerations</h3>
              <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                <li>Vibrant red-orange color is a key visual element</li>
                <li>Often paired with protein (chicken, beef, fish)</li>
                <li>Commonly served with fried plantains (dodo)</li>
                <li>Can be molded for height or served family-style</li>
              </ul>
            </Card>
          </div>
          
          {/* Right Column - Plating Techniques */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold mb-6">Plating Techniques</h2>
            
            <Tabs defaultValue="technique1" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="technique1">Classic Elevation</TabsTrigger>
                <TabsTrigger value="technique2">Deconstructed</TabsTrigger>
                <TabsTrigger value="technique3">Modern Minimalist</TabsTrigger>
              </TabsList>
              
              {/* Technique 1 */}
              <TabsContent value="technique1" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image 
                      src="/technique1-placeholder.jpg" 
                      alt="Classic Elevation Plating" 
                      fill 
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Classic Elevation</h3>
                    <p className="text-muted-foreground mb-4">
                      This technique creates height by molding the jollof rice into a cylindrical shape, topped with protein, and surrounded by complementary elements.
                    </p>
                    
                    <h4 className="font-medium mt-4 mb-2">Steps:</h4>
                    <div className="space-y-3">
                      <div className="plating-step">
                        <div className="plating-step-number">1</div>
                        <div>
                          <p>Use a ring mold to create a cylindrical shape with the jollof rice in the center of the plate.</p>
                        </div>
                      </div>
                      <div className="plating-step">
                        <div className="plating-step-number">2</div>
                        <div>
                          <p>Carefully remove the mold, ensuring the rice maintains its shape.</p>
                        </div>
                      </div>
                      <div className="plating-step">
                        <div className="plating-step-number">3</div>
                        <div>
                          <p>Place a piece of grilled chicken or protein on top of the rice.</p>
                        </div>
                      </div>
                      <div className="plating-step">
                        <div className="plating-step-number">4</div>
                        <div>
                          <p>Arrange fried plantains in a fan pattern on one side of the plate.</p>
                        </div>
                      </div>
                      <div className="plating-step">
                        <div className="plating-step-number">5</div>
                        <div>
                          <p>Add a small amount of sauce around the base of the rice for color contrast.</p>
                        </div>
                      </div>
                      <div className="plating-step">
                        <div className="plating-step-number">6</div>
                        <div>
                          <p>Garnish with micro greens or herb sprigs for freshness and height.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <Button asChild>
                        <Link href="#">Watch Video Tutorial</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              {/* Technique 2 */}
              <TabsContent value="technique2" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image 
                      src="/technique2-placeholder.jpg" 
                      alt="Deconstructed Plating" 
                      fill 
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Deconstructed</h3>
                    <p className="text-muted-foreground mb-4">
                      This modern approach separates the components of the dish, allowing each element to shine while creating a visually striking presentation.
                    </p>
                    
                    <h4 className="font-medium mt-4 mb-2">Steps:</h4>
                    <div className="space-y-3">
                      <div className="plating-step">
                        <div className="plating-step-number">1</div>
                        <div>
                          <p>Create a swoosh of tomato sauce on one side of the plate.</p>
                        </div>
                      </div>
                      <div className="plating-step">
                        <div className="plating-step-number">2</div>
                        <div>
                          <p>Place a small mound of jollof rice on the opposite side.</p>
                        </div>
                      </div>
                      <div className="plating-step">
                        <div className="plating-step-number">3</div>
                        <div>
                          <p>Arrange sliced grilled chicken or protein in the center.</p>
                        </div>
                      </div>
                      <div className="plating-step">
                        <div className="plating-step-number">4</div>
                        <div>
                          <p>Add crispy fried plantain chips vertically for height and texture.</p>
                        </div>
                      </div>
                      <div className="plating-step">
                        <div className="plating-step-number">5</div>
                        <div>
                          <p>Dot the plate with herb oil for color contrast.</p>
                        </div>
                      </div>
                      <div className="plating-step">
                        <div className="plating-step-number">6</div>
                        <div>
                          <p>Finish with micro herbs and edible flowers for elegance.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <Button asChild>
                        <Link href="#">Watch Video Tutorial</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              {/* Technique 3 */}
              <TabsContent value="technique3" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image 
                      src="/technique3-placeholder.jpg" 
                      alt="Modern Minimalist Plating" 
                      fill 
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Modern Minimalist</h3>
                    <p className="text-muted-foreground mb-4">
                      This technique focuses on clean lines, negative space, and precise placement for an elegant, contemporary presentation.
                    </p>
                    
                    <h4 className="font-medium mt-4 mb-2">Steps:</h4>
                    <div className="space-y-3">
                      <div className="plating-step">
                        <div className="plating-step-number">1</div>
                        <div>
                          <p>Use a rectangular plate with ample negative space.</p>
                        </div>
                      </div>
                      <div className="plating-step">
                        <div className="plating-step-number">2</div>
                        <div>
                          <p>Place a quenelle of jollof rice off-center on the plate.</p>
                        </div>
                      </div>
                      <div className="plating-step">
                        <div className="plating-step-number">3</div>
                        <div>
                          <p>Position a small piece of perfectly cooked protein beside the rice.</p>
                        </div>
                      </div>
                      <div className="plating-step">
                        <div className="plating-step-number">4</div>
                        <div>
                          <p>Add three small dots of pepper sauce in a line for visual rhythm.</p>
                        </div>
                      </div>
                      <div className="plating-step">
                        <div className="plating-step-number">5</div>
                        <div>
                          <p>Place a single thin plantain chip for height and texture.</p>
                        </div>
                      </div>
                      <div className="plating-step">
                        <div className="plating-step-number">6</div>
                        <div>
                          <p>Finish with a single herb leaf for a touch of green.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <Button asChild>
                        <Link href="#">Watch Video Tutorial</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
        
        {/* Related Dishes */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-6">Related Dishes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i} className="overflow-hidden">
                <div className="relative aspect-square">
                  <Image 
                    src={`/related-${i}-placeholder.jpg`}
                    alt="Related Dish"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg">Fried Rice</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Nigerian style fried rice with vegetables and protein
                  </p>
                  <Button asChild size="sm" variant="outline">
                    <Link href="/nigerian/fried-rice">View Plating Ideas</Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
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
