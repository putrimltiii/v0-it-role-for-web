"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Reza Pratama",
    location: "Jakarta",
    rating: 5,
    text: "Kualitas hoodie-nya luar biasa! Bahannya tebal tapi tetap nyaman dipakai. Desainnya juga keren banget, beda dari yang lain. Definitely akan order lagi!",
    product: "Urban Classic Hoodie",
  },
  {
    id: 2,
    name: "Sinta Dewi",
    location: "Bandung",
    rating: 5,
    text: "Suka banget sama dress dari UrbanWeave! Potongannya pas di badan dan bahannya adem. Pengiriman juga cepat. Recommended!",
    product: "Midi A-line Dress",
  },
  {
    id: 3,
    name: "Ahmad Fauzi",
    location: "Surabaya",
    rating: 5,
    text: "Cargo pants-nya keren abis! Jahitannya rapi dan ukurannya sesuai size chart. Worth the price banget.",
    product: "Streetwear Cargo Pants",
  },
  {
    id: 4,
    name: "Maya Putri",
    location: "Bekasi",
    rating: 5,
    text: "Pertama kali beli di UrbanWeave dan langsung jatuh cinta! Bahannya premium, packagingnya juga bagus. Pasti bakal repeat order.",
    product: "Essential Oversized Tee",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
            Testimonials
          </span>
          <h2 className="mt-4 font-serif text-3xl md:text-4xl font-medium tracking-tight text-foreground">
            What Our Customers Say
          </h2>
        </div>

        <div className="relative">
          {/* Testimonial */}
          <div className="text-center">
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-xl md:text-2xl font-serif text-foreground leading-relaxed max-w-2xl mx-auto">
              &quot;{testimonials[currentIndex].text}&quot;
            </blockquote>

            {/* Author */}
            <div className="mt-8">
              <p className="font-medium text-foreground">
                {testimonials[currentIndex].name}
              </p>
              <p className="text-sm text-muted-foreground">
                {testimonials[currentIndex].location} &mdash; {testimonials[currentIndex].product}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="border-border text-foreground hover:bg-secondary"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-foreground" : "bg-border"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="border-border text-foreground hover:bg-secondary"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
