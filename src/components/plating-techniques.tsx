'use client'

import React from 'react'
import Image from 'next/image'

// Landscape Technique Component
export function LandscapeTechnique({ 
  title, 
  description, 
  steps, 
  imageSrc, 
  altText 
}: {
  title: string
  description: string
  steps: string[]
  imageSrc: string
  altText: string
}) {
  const [currentStep, setCurrentStep] = React.useState(0)
  
  return (
    <div className="p-6 bg-muted rounded-lg">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground mb-6">{description}</p>
      
      <div className="relative aspect-video rounded-lg overflow-hidden mb-6">
        <Image 
          src={imageSrc} 
          alt={altText}
          fill
          className="object-cover"
        />
      </div>
      
      <div className="mb-4">
        <h4 className="font-medium mb-3">Step {currentStep + 1} of {steps.length}</h4>
        <p>{steps[currentStep]}</p>
      </div>
      
      <div className="flex overflow-x-auto pb-2 gap-2">
        {steps.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentStep(index)}
            className={`w-8 h-1 rounded-full transition-colors ${
              currentStep === index 
                ? 'bg-primary' 
                : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
            }`}
            aria-label={`View step ${index + 1}`}
          />
        ))}
      </div>
      
      <div className="flex justify-between mt-4">
        <button
          onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))}
          disabled={currentStep === 0}
          className="px-4 py-2 rounded-md bg-background hover:bg-accent disabled:opacity-50 disabled:pointer-events-none"
        >
          Previous
        </button>
        <button
          onClick={() => setCurrentStep(prev => Math.min(steps.length - 1, prev + 1))}
          disabled={currentStep === steps.length - 1}
          className="px-4 py-2 rounded-md bg-background hover:bg-accent disabled:opacity-50 disabled:pointer-events-none"
        >
          Next
        </button>
      </div>
    </div>
  )
}

// Free-form Technique Component
export function FreeFormTechnique({ 
  title, 
  description, 
  steps, 
  imageSrc, 
  altText 
}: {
  title: string
  description: string
  steps: string[]
  imageSrc: string
  altText: string
}) {
  return (
    <div className="p-6 bg-muted rounded-lg">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground mb-6">{description}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="relative aspect-square rounded-lg overflow-hidden">
          <Image 
            src={imageSrc} 
            alt={altText}
            fill
            className="object-cover"
          />
        </div>
        
        <div>
          <h4 className="font-medium mb-3">Plating Steps:</h4>
          <ol className="space-y-2">
            {steps.map((step, index) => (
              <li key={index} className="pl-6 relative">
                <span className="absolute left-0 font-medium">{index + 1}.</span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </div>
      
      <div className="p-4 bg-background rounded-lg">
        <h4 className="font-medium mb-3">Interactive Canvas</h4>
        <p className="text-sm text-muted-foreground mb-4">
          This interactive canvas allows you to experiment with free-form plating techniques.
          Drag elements to create your own artistic arrangement.
        </p>
        <div className="aspect-video bg-accent/20 rounded-lg flex items-center justify-center">
          <p className="text-muted-foreground">Interactive canvas would be displayed here</p>
        </div>
      </div>
    </div>
  )
}

// Organic Materials Technique Component
export function OrganicMaterialsTechnique({ 
  title, 
  description, 
  steps, 
  imageSrc, 
  altText 
}: {
  title: string
  description: string
  steps: string[]
  imageSrc: string
  altText: string
}) {
  const [selectedMaterial, setSelectedMaterial] = React.useState('wood')
  
  const materials = [
    { id: 'wood', name: 'Wooden Board', description: 'Adds rustic charm and warmth' },
    { id: 'slate', name: 'Slate Plate', description: 'Creates dramatic contrast with food' },
    { id: 'ceramic', name: 'Ceramic Dish', description: 'Traditional and versatile option' },
    { id: 'stone', name: 'Stone Platter', description: 'Natural texture and earthy feel' }
  ]
  
  return (
    <div className="p-6 bg-muted rounded-lg">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground mb-6">{description}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <h4 className="font-medium mb-3">Select Serving Material:</h4>
          <div className="grid grid-cols-2 gap-2 mb-4">
            {materials.map(material => (
              <button
                key={material.id}
                onClick={() => setSelectedMaterial(material.id)}
                className={`p-3 rounded-lg text-left transition-colors ${
                  selectedMaterial === material.id 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-background hover:bg-accent'
                }`}
              >
                <div className="font-medium">{material.name}</div>
                <div className="text-xs mt-1 opacity-80">{material.description}</div>
              </button>
            ))}
          </div>
        </div>
        
        <div className="relative aspect-video rounded-lg overflow-hidden">
          <Image 
            src={imageSrc} 
            alt={altText}
            fill
            className="object-cover"
          />
        </div>
      </div>
      
      <div>
        <h4 className="font-medium mb-3">Plating Steps:</h4>
        <ol className="space-y-2">
          {steps.map((step, index) => (
            <li key={index} className="pl-6 relative">
              <span className="absolute left-0 font-medium">{index + 1}.</span>
              {step}
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

// Hide and Seek Technique Component
export function HideAndSeekTechnique({ 
  title, 
  description, 
  steps, 
  imageSrc, 
  altText 
}: {
  title: string
  description: string
  steps: string[]
  imageSrc: string
  altText: string
}) {
  const [revealed, setRevealed] = React.useState(false)
  
  return (
    <div className="p-6 bg-muted rounded-lg">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground mb-6">{description}</p>
      
      <div className="mb-6">
        <div className="relative aspect-video rounded-lg overflow-hidden">
          <Image 
            src={imageSrc} 
            alt={altText}
            fill
            className={`object-cover transition-all duration-1000 ${
              revealed ? 'opacity-100' : 'opacity-50'
            }`}
          />
          
          {!revealed && (
            <div className="absolute inset-0 flex items-center justify-center bg-background/50 backdrop-blur-sm transition-opacity duration-1000">
              <button
                onClick={() => setRevealed(true)}
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium"
              >
                Reveal the Hidden Elements
              </button>
            </div>
          )}
        </div>
      </div>
      
      <div className={`transition-all duration-500 ${revealed ? 'opacity-100' : 'opacity-0'}`}>
        <h4 className="font-medium mb-3">Plating Steps:</h4>
        <ol className="space-y-2">
          {steps.map((step, index) => (
            <li key={index} className="pl-6 relative">
              <span className="absolute left-0 font-medium">{index + 1}.</span>
              {step}
            </li>
          ))}
        </ol>
      </div>
      
      {revealed && (
        <button
          onClick={() => setRevealed(false)}
          className="mt-4 px-4 py-2 bg-background hover:bg-accent rounded-md"
        >
          Reset Demonstration
        </button>
      )}
    </div>
  )
}

// Bathing Technique Component
export function BathingTechnique({ 
  title, 
  description, 
  steps, 
  imageSrc, 
  altText 
}: {
  title: string
  description: string
  steps: string[]
  imageSrc: string
  altText: string
}) {
  const [pourLevel, setPourLevel] = React.useState(0)
  
  return (
    <div className="p-6 bg-muted rounded-lg">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground mb-6">{description}</p>
      
      <div className="mb-6">
        <div className="relative aspect-video rounded-lg overflow-hidden bg-background">
          <Image 
            src={imageSrc} 
            alt={altText}
            fill
            className="object-cover"
          />
          
          <div 
            className="absolute bottom-0 left-0 right-0 bg-amber-600/70 transition-all duration-1000"
            style={{ height: `${pourLevel * 20}%` }}
          ></div>
        </div>
        
        <div className="mt-4">
          <label htmlFor="pour-level" className="block text-sm font-medium mb-2">
            Sauce Level: {pourLevel * 20}%
          </label>
          <input
            id="pour-level"
            type="range"
            min="0"
            max="5"
            value={pourLevel}
            onChange={(e) => setPourLevel(parseInt(e.target.value))}
            className="w-full h-2 bg-background rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>
      
      <div>
        <h4 className="font-medium mb-3">Plating Steps:</h4>
        <ol className="space-y-2">
          {steps.map((step, index) => (
            <li key={index} className="pl-6 relative">
              <span className="absolute left-0 font-medium">{index + 1}.</span>
              {step}
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

// Super Bowl Technique Component
export function SuperBowlTechnique({ 
  title, 
  description, 
  steps, 
  imageSrc, 
  altText 
}: {
  title: string
  description: string
  steps: string[]
  imageSrc: string
  altText: string
}) {
  const [activeLayer, setActiveLayer] = React.useState(0)
  
  const layers = [
    { name: 'Base Layer', color: 'bg-amber-200' },
    { name: 'Main Component', color: 'bg-amber-400' },
    { name: 'Secondary Elements', color: 'bg-amber-600' },
    { name: 'Sauce or Dressing', color: 'bg-amber-800' },
    { name: 'Garnish', color: 'bg-green-500' }
  ]
  
  return (
    <div className="p-6 bg-muted rounded-lg">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground mb-6">{description}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <h4 className="font-medium mb-3">Bowl Layers:</h4>
          <div className="space-y-2">
            {layers.map((layer, index) => (
              <button
                key={index}
                onClick={() => setActiveLayer(index)}
                className={`w-full p-3 rounded-lg text-left transition-colors ${
                  activeLayer === index 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-background hover:bg-accent'
                }`}
              >
                {layer.name}
              </button>
            ))}
          </div>
        </div>
        
        <div className="relative aspect-square rounded-lg overflow-hidden bg-background flex items-center justify-center">
          <div className="w-3/4 h-3/4 rounded-full bg-gray-100 shadow-inner relative flex items-center justify-center">
            {layers.slice(0, activeLayer + 1).map((layer, index) => (
              <div 
                key={index}
                className={`absolute rounded-full ${layer.color} transition-all duration-500`}
                style={{ 
                  width: `${85 - index * 15}%`, 
                  height: `${85 - index * 15}%`,
                  zIndex: index
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
      
      <div>
        <h4 className="font-medium mb-3">Current Step: {steps[activeLayer]}</h4>
        <div className="mt-4 flex justify-between">
          <button
            onClick={() => setActiveLayer(prev => Math.max(0, prev - 1))}
            disabled={activeLayer === 0}
            className="px-4 py-2 rounded-md bg-background hover:bg-accent disabled:opacity-50 disabled:pointer-events-none"
          >
            Previous Layer
          </button>
          <button
            onClick={() => setActiveLayer(prev => Math.min(layers.length - 1, prev + 1))}
            disabled={activeLayer === layers.length - 1}
            className="px-4 py-2 rounded-md bg-background hover:bg-accent disabled:opacity-50 disabled:pointer-events-none"
          >
            Add Next Layer
          </button>
        </div>
      </div>
    </div>
  )
}
