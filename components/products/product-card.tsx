"use client"

import Link from "next/link"
import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { formatPrice } from "@/lib/format"
import type { Product } from "@/lib/data/products"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group">
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

          {/* Color swatches on hover */}
          {product.colors.length > 1 && (
            <div className="absolute bottom-4 left-4 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              {product.colors.slice(0, 4).map((color) => (
                <div
                  key={color.name}
                  className="w-4 h-4 rounded-full border border-border"
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                />
              ))}
              {product.colors.length > 4 && (
                <span className="text-xs text-muted-foreground">+{product.colors.length - 4}</span>
              )}
            </div>
          )}
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
  )
}
