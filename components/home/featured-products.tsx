"use client"

import Link from "next/link"
import Image from "next/image"
import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { formatPrice } from "@/lib/format"
import { products } from "@/lib/data/products"
import { useWishlistStore } from "@/lib/store/wishlist"
import { cn } from "@/lib/utils"

const featuredProducts = products.filter((p) => p.isFeatured).slice(0, 6)

export function FeaturedProducts() {
  const { addItem, removeItem, isInWishlist } = useWishlistStore()

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
          {featuredProducts.map((product) => {
            const wishlisted = isInWishlist(product.id)

            const handleWishlist = (e: React.MouseEvent) => {
              e.preventDefault()
              if (wishlisted) {
                removeItem(product.id)
              } else {
                addItem(product)
              }
            }

            return (
              <article key={product.id} className="group">
                <Link href={`/products/${product.slug}`} className="block">
                  {/* Image container */}
                  <div className="relative aspect-[3/4] bg-secondary overflow-hidden mb-4">
                    {product.images && product.images[0] ? (
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                        <svg className="w-12 h-12 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    )}

                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex flex-col gap-2 z-10">
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
                      className="absolute top-3 right-3 z-10 bg-background/80 hover:bg-background opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={handleWishlist}
                    >
                      <Heart className={cn("h-4 w-4", wishlisted ? "fill-red-500 text-red-500" : "")} />
                    </Button>

                    {/* Quick add overlay */}
                    <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-10">
                      <Button className="w-full bg-background text-foreground hover:bg-secondary border border-border text-xs tracking-wider uppercase">
                        Quick Add
                      </Button>
                    </div>
                  </div>

                  {/* Product info */}
                  <div>
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">
                      {product.subcategory}
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
            )
          })}
        </div>
      </div>
    </section>
  )
}
