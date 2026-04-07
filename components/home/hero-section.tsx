"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-1.jpg"
          alt="UrbanWeave Fashion Collection"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <span className="inline-block text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
          New Collection 2026
        </span>
        
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-foreground leading-none">
          <span className="block">Weave Your</span>
          <span className="block mt-2 italic">Urban Style</span>
        </h1>
        
        <p className="mt-8 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Temukan koleksi streetwear premium yang memadukan kenyamanan dan gaya. 
          Dibuat untuk generasi urban Indonesia yang berani tampil beda.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-sm tracking-wider uppercase">
            <Link href="/products">
              Shop Collection
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-border text-foreground hover:bg-secondary px-8 py-6 text-sm tracking-wider uppercase">
            <Link href="/about">
              Our Story
            </Link>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs tracking-wider text-muted-foreground uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-muted-foreground to-transparent" />
      </div>
    </section>
  )
}
