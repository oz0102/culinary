'use client'

import React from 'react'
import { Navbar } from '@/components/navbar'
import { 
  LandscapeTechnique, 
  FreeFormTechnique, 
  OrganicMaterialsTechnique,
  HideAndSeekTechnique,
  BathingTechnique,
  SuperBowlTechnique
} from '@/components/plating-techniques'
import { Separator } from '@/components/ui/separator'

export default function PlatingTechniquesDemo() {
  // Sample data for the techniques
  const landscapeData = {
    title: "Landscape Technique",
    description: "Taking inspiration from landscape gardens, this linear arrangement of food is usually kept low and long, creating a natural flow across the plate.",
    steps: [
      "Start with a clean, preferably white rectangular plate to showcase the linear arrangement.",
      "Create a base sauce or puree in a straight line across the plate.",
      "Arrange the main protein elements in a row, slightly overlapping for continuity.",
      "Add height variation with taller elements like microgreens or vegetable crisps.",
      "Finish with small dots of contrasting sauce or oil along the arrangement.",
      "Ensure the composition maintains a horizontal flow from one side to the other."
    ],
    imageSrc: "/images/landscape-technique.jpg",
    altText: "Landscape plating technique example"
  }
  
  const freeFormData = {
    title: "Free-form Technique",
    description: "Like modern paintings, free-form plating may seem carelessly strewn across a plate, but each element is carefully placed to create an abstract yet intriguing composition.",
    steps: [
      "Choose a large plate with ample negative space to work with.",
      "Start with dots and smears of sauce as your base composition.",
      "Place the main elements with intentional asymmetry.",
      "Add smaller components at varying distances from the center.",
      "Use height and texture contrasts to create visual interest.",
      "Finish with precisely placed micro herbs or edible flowers."
    ],
    imageSrc: "/images/freeform-technique.jpg",
    altText: "Free-form plating technique example"
  }
  
  const organicData = {
    title: "Food on Organic Materials",
    description: "Using organic materials such as wood, slate, and stone as plating devices lends a rustic, back-to-nature feel to dishes.",
    steps: [
      "Select an appropriate organic surface that complements your dish.",
      "Consider the temperature needs of your food when choosing materials.",
      "Create a natural, seemingly effortless arrangement on the surface.",
      "Use the natural contours and textures of the material to enhance presentation.",
      "Add small vessels for sauces or accompaniments if needed.",
      "Incorporate natural garnishes like herbs or edible flowers to enhance the organic feel."
    ],
    imageSrc: "/images/organic-technique.jpg",
    altText: "Organic materials plating technique example"
  }
  
  const hideAndSeekData = {
    title: "Hide and Seek Technique",
    description: "Layering adds an element of playfulness and surprise to the dish, concealing delicious elements beneath others for a discovery experience.",
    steps: [
      "Start with a base layer that will be partially visible around the edges.",
      "Add your hidden element in the center - this could be a flavorful sauce or delicate ingredient.",
      "Cover with a contrasting element that complements the hidden component.",
      "Ensure the top layer can be easily moved or broken to reveal what's underneath.",
      "Add visual cues that suggest something is hidden beneath.",
      "Consider the reveal experience when designing the presentation."
    ],
    imageSrc: "/images/hideandseek-technique.jpg",
    altText: "Hide and seek plating technique example"
  }
  
  const bathingData = {
    title: "Bathing Technique",
    description: "Bathe fish, meat, or pasta in broth or sauce, creating a partially submerged presentation that highlights both the main element and the liquid component.",
    steps: [
      "Select a bowl or plate with enough depth to hold the liquid without spilling.",
      "Arrange the main elements in the center, creating height if possible.",
      "Pour the broth or sauce tableside for dramatic effect.",
      "Ensure the liquid level allows key elements to remain partially visible.",
      "Add floating garnishes like herb oils or micro greens after pouring.",
      "Consider temperature contrast between the solid elements and the liquid."
    ],
    imageSrc: "/images/bathing-technique.jpg",
    altText: "Bathing plating technique example"
  }
  
  const superBowlData = {
    title: "Super Bowl Technique",
    description: "Bowl food is a massive trend, with elegant styled bowls used for layered presentations that reveal different components as you eat.",
    steps: [
      "Choose a bowl that complements your dish in both size and style.",
      "Start with a base layer that provides a foundation for other ingredients.",
      "Add your starch or grain component as the middle layer.",
      "Position your protein element prominently on top.",
      "Add height with vertical garnishes or crisp elements.",
      "Consider how the diner will experience each layer as they eat."
    ],
    imageSrc: "/images/superbowl-technique.jpg",
    altText: "Super bowl plating technique example"
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Header */}
      <div className="bg-muted py-12">
        <div className="container">
          <h1 className="text-4xl font-bold mb-4">Plating Techniques Visualization</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Explore interactive demonstrations of modern plating techniques that can be applied to Nigerian, Continental, and Dessert dishes.
          </p>
        </div>
      </div>
      
      {/* Techniques */}
      <div className="container py-12">
        <div className="space-y-16">
          <section>
            <LandscapeTechnique {...landscapeData} />
            <Separator className="mt-12" />
          </section>
          
          <section>
            <FreeFormTechnique {...freeFormData} />
            <Separator className="mt-12" />
          </section>
          
          <section>
            <OrganicMaterialsTechnique {...organicData} />
            <Separator className="mt-12" />
          </section>
          
          <section>
            <HideAndSeekTechnique {...hideAndSeekData} />
            <Separator className="mt-12" />
          </section>
          
          <section>
            <BathingTechnique {...bathingData} />
            <Separator className="mt-12" />
          </section>
          
          <section>
            <SuperBowlTechnique {...superBowlData} />
          </section>
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
