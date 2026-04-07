"use client"

import Link from "next/link"
import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { formatPrice } from "@/lib/format"

const featuredProducts = [
  {
    id: "1",
    name: "Urban Classic Hoodie",
    price: 249000,
    originalPrice: 299000,
    image: "/images/product-1.jpg",
    category: "Hoodie",
    isNew: true,
    isSale: false,
  },
  {
    id: "2",
    name: "Streetwear Cargo Pants",
    price: 199000,
    originalPrice: null,
    image: "/images/product-2.jpg",
    category: "Bottoms",
    isNew: true,
    isSale: false,
  },
  {
    id: "3",
    name: "Essential Oversized Tee",
    price: 89000,
    originalPrice: 119000,
    image: "/images/product-3.jpg",
    category: "T-Shirt",
    isNew: false,
    isSale: true,
  },
  {
    id: "4",
    name: "Bomber Jacket Premium",
    price: 349000,
    originalPrice: null,
    image: "/images/product-4.jpg",
    category: "Outerwear",
    isNew: true,
    isSale: false,
  },
  {
    id: "5",
    name: "Urban Jogger Pants",
    price: 179000,
    originalPrice: null,
    image: "/images/product-5.jpg",
    category: "Bottoms",
    isNew: false,
    isSale: false,
  },
  {
    id: "6",
    name: "Minimalist Crewneck",
    price: 199000,
    originalPrice: 249000,
    image: "/images/product-6.jpg",
    category: "Tops",
    isNew: false,
    isSale: true,
  },
]

export function FeaturedProducts() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
              Curated for you
            </span>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl font-medium tracking-tight text-foreground">
              Featured Products
            </h2>
          </div>
          <Link
            href="/products"
            className="mt-4 md:mt-0 text-sm tracking-wider uppercase text-foreground hover:text-muted-foreground transition-colors"
          >
            View All Products &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {featuredProducts.map((product) => (
            <article key={product.id} className="group">
              <Link href={`/products/${product.id}`} className="block">
                {/* Image container */}
                <div className="relative aspect-[3/4] bg-secondary overflow-hidden mb-4">
                  {/* Placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                    <svg className="w-12 h-12 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  
                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {product.isNew && (
                      <span className="bg-foreground text-background px-2 py-1 text-xs tracking-wider uppercase">
                        New
                      </span>
                    )}
                    {product.isSale && (
                      <span className="bg-accent text-accent-foreground px-2 py-1 text-xs tracking-wider uppercase">
                        Sale
                      </span>
                    )}
                  </div>

                  {/* Wishlist button */}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-3 right-3 bg-background/80 hover:bg-background opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={(e) => {
                      e.preventDefault()
                      // Add to wishlist logic
                    }}
                  >
                    <Heart className="h-4 w-4" />
                  </Button>

                  {/* Quick add overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <Button className="w-full bg-background text-foreground hover:bg-secondary border border-border text-xs tracking-wider uppercase">
                      Quick Add
                    </Button>
                  </div>
                </div>

                {/* Product info */}
                <div>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">
                    {product.category}
                  </span>
                  <h3 className="mt-1 text-sm font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                    {product.name}
                  </h3>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-sm font-medium text-foreground">
                      {formatPrice(product.price)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        {formatPrice(product.originalPrice)}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
