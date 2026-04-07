"use client"

import Link from "next/link"
import { Heart, Trash2 } from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { useWishlistStore } from "@/lib/store/wishlist"
import { formatPrice } from "@/lib/format"

export default function WishlistPage() {
  const { items, removeItem } = useWishlistStore()

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-24 pb-16">
        <div className="px-6 py-12 border-b border-border">
          <div className="max-w-7xl mx-auto">
            <h1 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-foreground">
              Wishlist
            </h1>
            <p className="mt-4 text-muted-foreground">
              {items.length} {items.length === 1 ? "item" : "items"} saved
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-12">
          {items.length === 0 ? (
            <div className="text-center py-16">
              <Heart className="h-16 w-16 mx-auto text-muted-foreground mb-6" />
              <h2 className="text-xl font-medium text-foreground mb-2">Your wishlist is empty</h2>
              <p className="text-muted-foreground mb-8">
                Save items you love by clicking the heart icon on products.
              </p>
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/products">Start Shopping</Link>
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
              {items.map((product) => (
                <article key={product.id} className="group">
                  <Link href={`/products/${product.slug}`} className="block">
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
                        {product.isSale && product.originalPrice && (
                          <span className="bg-accent text-accent-foreground px-2 py-1 text-xs tracking-wider uppercase">
                            {Math.round((1 - product.price / product.originalPrice) * 100)}% Off
                          </span>
                        )}
                      </div>

                      {/* Remove button */}
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-3 right-3 bg-background/80 hover:bg-background"
                        onClick={(e) => {
                          e.preventDefault()
                          removeItem(product.id)
                        }}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>

                      {/* Quick add overlay */}
                      <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <Button className="w-full bg-background text-foreground hover:bg-secondary border border-border text-xs tracking-wider uppercase">
                          Add to Cart
                        </Button>
                      </div>
                    </div>

                    {/* Product info */}
                    <div>
                      <span className="text-xs text-muted-foreground uppercase tracking-wider">
                        {product.subcategory}
                      </span>
                      <h3 className="mt-1 text-sm font-medium text-foreground group-hover:text-muted-foreground transition-colors line-clamp-1">
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
          )}
        </div>
      </div>

      <Footer />
    </main>
  )
}
