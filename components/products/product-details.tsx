"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Heart, Minus, Plus, Star, Truck, RefreshCw, Shield, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { formatPrice } from "@/lib/format"
import type { Product } from "@/lib/data/products"
import { cn } from "@/lib/utils"
import { useCartStore } from "@/lib/store/cart"
import { useWishlistStore } from "@/lib/store/wishlist"

interface ProductDetailsProps {
  product: Product
}

export function ProductDetails({ product }: ProductDetailsProps) {
  const router = useRouter()
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [quantity, setQuantity] = useState<number>(1)
  const [added, setAdded] = useState(false)
  const [activeImage, setActiveImage] = useState(0)
  const addItem = useCartStore((state) => state.addItem)
  const { addItem: addWishlist, removeItem: removeWishlist, isInWishlist } = useWishlistStore()
  const wishlisted = isInWishlist(product.id)

  const handleAddToCart = () => {
    if (!selectedSize) return
    addItem({
      product,
      quantity: 1,
      size: selectedSize,
      color: selectedColor.name,
    })
    setQuantity(1)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const handleBuyNow = () => {
    if (!selectedSize) return
    addItem({
      product,
      quantity: 1,
      size: selectedSize,
      color: selectedColor.name,
    })
    router.push('/checkout')
  }

  const handleWishlist = () => {
    if (wishlisted) {
      removeWishlist(product.id)
    } else {
      addWishlist(product)
    }
  }

  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0

  const images = product.images && product.images.length > 0 ? product.images : []

  return (
    <section className="px-6 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-muted-foreground">
            <li>
              <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/products" className="hover:text-foreground transition-colors">Products</Link>
            </li>
            <li>/</li>
            <li>
              <Link href={`/products?category=${product.category}`} className="hover:text-foreground transition-colors capitalize">
                {product.category}
              </Link>
            </li>
            <li>/</li>
            <li className="text-foreground">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product images */}
          <div className="space-y-4">
            {/* Main image */}
            <div className="aspect-[3/4] bg-secondary relative overflow-hidden">
              {images[activeImage] ? (
                <Image
                  src={images[activeImage]}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                  <svg className="w-24 h-24 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              )}

              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
                {product.isNew && (
                  <span className="bg-foreground text-background px-3 py-1 text-xs tracking-wider uppercase">
                    New
                  </span>
                )}
                {discount > 0 && (
                  <span className="bg-accent text-accent-foreground px-3 py-1 text-xs tracking-wider uppercase">
                    {discount}% Off
                  </span>
                )}
              </div>
            </div>

            {/* Thumbnail grid */}
            <div className="grid grid-cols-4 gap-4">
              {images.length > 0 ? (
                images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={cn(
                      "aspect-square bg-secondary relative overflow-hidden border-2 transition-colors",
                      activeImage === i ? "border-foreground" : "border-transparent hover:border-foreground"
                    )}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} ${i + 1}`}
                      fill
                      className="object-cover"
                      sizes="10vw"
                    />
                  </button>
                ))
              ) : (
                [1, 2, 3, 4].map((i) => (
                  <button key={i} className="aspect-square bg-secondary relative overflow-hidden border-2 border-transparent">
                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                      <svg className="w-8 h-8 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </button>
                ))
              )}
            </div>
          </div>

          {/* Product info */}
          <div>
            <span className="text-xs text-muted-foreground uppercase tracking-wider">
              {product.subcategory}
            </span>
            <h1 className="mt-2 font-serif text-3xl md:text-4xl font-medium text-foreground">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="mt-4 flex items-center gap-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      "h-4 w-4",
                      i < Math.floor(product.rating)
                        ? "fill-accent text-accent"
                        : "fill-muted text-muted"
                    )}
                  />
                ))}
                <span className="ml-2 text-sm text-muted-foreground">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="mt-6 flex items-center gap-4">
              <span className="text-2xl font-medium text-foreground">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-lg text-muted-foreground line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="mt-6 text-muted-foreground leading-relaxed">
              {product.description}
            </p>

            {/* Color selection */}
            <div className="mt-8">
              <h3 className="text-sm font-medium text-foreground mb-4">
                Color: <span className="text-muted-foreground">{selectedColor.name}</span>
              </h3>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color)}
                    className={cn(
                      "w-10 h-10 rounded-full border-2 transition-all",
                      selectedColor.name === color.name
                        ? "border-foreground scale-110"
                        : "border-transparent hover:border-muted-foreground"
                    )}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Size selection */}
            <div className="mt-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-foreground">Size</h3>
                <Link href="/size-guide" className="text-sm text-muted-foreground hover:text-foreground underline">
                  Size Guide
                </Link>
              </div>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={cn(
                      "min-w-[50px] px-4 py-3 text-sm border transition-colors",
                      selectedSize === size
                        ? "bg-foreground text-background border-foreground"
                        : "bg-transparent text-foreground border-border hover:border-foreground"
                    )}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <h3 className="text-sm font-medium text-foreground mb-4">Quantity</h3>
              <div className="flex items-center border border-border w-fit">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="h-12 w-12"
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center text-foreground">{quantity}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setQuantity(Math.min(10, quantity + 1))}
                  className="h-12 w-12"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 flex gap-4">
              <Button
                size="lg"
                onClick={handleAddToCart}
                disabled={!selectedSize}
                className={cn(
                  "flex-1 h-14 text-sm tracking-wider uppercase transition-colors",
                  added
                    ? "bg-green-600 text-white hover:bg-green-600"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                )}
              >
                {added ? (
                  <span className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    Added to Cart
                  </span>
                ) : (
                  "Add to Cart"
                )}
              </Button>
              <Button
                size="lg"
                onClick={handleBuyNow}
                disabled={!selectedSize}
                className="flex-1 h-14 text-sm tracking-wider uppercase bg-secondary text-foreground hover:bg-secondary/80 transition-colors"
              >
                Buy Now
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={handleWishlist}
                className="h-14 w-14 border-border text-foreground hover:bg-secondary"
              >
                <Heart className={cn("h-5 w-5", wishlisted ? "fill-red-500 text-red-500" : "")} />
              </Button>
            </div>

            {!selectedSize && (
              <p className="mt-2 text-sm text-muted-foreground">
                Please select a size to add to cart
              </p>
            )}

            {/* Features */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="flex items-center gap-3">
                <Truck className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium text-foreground">Free Shipping</p>
                  <p className="text-xs text-muted-foreground">Orders over Rp 300.000</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <RefreshCw className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium text-foreground">Easy Returns</p>
                  <p className="text-xs text-muted-foreground">14 days return policy</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium text-foreground">Secure Payment</p>
                  <p className="text-xs text-muted-foreground">100% secure checkout</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
