"use client"

import Link from "next/link"
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { useCartStore } from "@/lib/store/cart"
import { formatPrice } from "@/lib/format"

export default function CartPage() {
  const { items, removeItem, updateQuantity, getTotalPrice } = useCartStore()

  const subtotal = getTotalPrice()
  const shipping = subtotal >= 300000 ? 0 : 15000
  const total = subtotal + shipping

  const handleDecrease = (productId: string, size: string, color: string, currentQty: number) => {
    if (currentQty <= 1) {
      removeItem(productId, size, color)
    } else {
      updateQuantity(productId, size, color, currentQty - 1)
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <div className="pt-24 pb-16">
        <div className="px-6 py-12 border-b border-border">
          <div className="max-w-7xl mx-auto">
            <h1 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-foreground">
              Shopping Cart
            </h1>
            <p className="mt-4 text-muted-foreground">
              {items.length} {items.length === 1 ? "item" : "items"} in your cart
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-12">
          {items.length === 0 ? (
            <div className="text-center py-16">
              <ShoppingBag className="h-16 w-16 mx-auto text-muted-foreground mb-6" />
              <h2 className="text-xl font-medium text-foreground mb-2">Your cart is empty</h2>
              <p className="text-muted-foreground mb-8">
                Looks like you haven&apos;t added any items to your cart yet.
              </p>
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/products">Continue Shopping</Link>
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Cart items */}
              <div className="lg:col-span-2 space-y-6">
                {items.map((item) => (
                  <div
                    key={`${item.product.id}-${item.size}-${item.color}`}
                    className="flex gap-6 pb-6 border-b border-border"
                  >
                    {/* Product image placeholder */}
                    <div className="w-24 h-32 bg-secondary flex-shrink-0 flex items-center justify-center">
                      <svg className="w-8 h-8 text-muted-foreground opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>

                    {/* Product details */}
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <div>
                          <Link
                            href={`/products/${item.product.slug}`}
                            className="font-medium text-foreground hover:text-muted-foreground transition-colors"
                          >
                            {item.product.name}
                          </Link>
                          <p className="text-sm text-muted-foreground mt-1">
                            Size: {item.size} / Color: {item.color}
                          </p>
                        </div>
                        <button
                          onClick={() => removeItem(item.product.id, item.size, item.color)}
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        {/* Quantity */}
                        <div className="flex items-center border border-border">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleDecrease(item.product.id, item.size, item.color, item.quantity)}
                            className="h-8 w-8"
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center text-sm text-foreground">{item.quantity}</span>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() =>
                              updateQuantity(item.product.id, item.size, item.color, item.quantity + 1)
                            }
                            className="h-8 w-8"
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>

                        {/* Price */}
                        <div className="text-right">
                          <p className="font-medium text-foreground">
                            {formatPrice(item.product.price * item.quantity)}
                          </p>
                          {item.quantity > 1 && (
                            <p className="text-xs text-muted-foreground">
                              {formatPrice(item.product.price)} each
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order summary */}
              <div className="lg:col-span-1">
                <div className="bg-card border border-border p-6">
                  <h2 className="text-lg font-medium text-foreground mb-6">Order Summary</h2>

                  <div className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="text-foreground">{formatPrice(subtotal)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Shipping</span>
                      <span className="text-foreground">
                        {shipping === 0 ? "Free" : formatPrice(shipping)}
                      </span>
                    </div>
                    {subtotal < 300000 && (
                      <p className="text-xs text-muted-foreground">
                        Add {formatPrice(300000 - subtotal)} more for free shipping
                      </p>
                    )}
                    <div className="border-t border-border pt-4 flex justify-between">
                      <span className="font-medium text-foreground">Total</span>
                      <span className="font-medium text-foreground">{formatPrice(total)}</span>
                    </div>
                  </div>

                  <Button
                    asChild
                    size="lg"
                    className="w-full mt-6 bg-primary text-primary-foreground hover:bg-primary/90 h-12 text-sm tracking-wider uppercase"
                  >
                    <Link href="/checkout">Proceed to Checkout</Link>
                  </Button>

                  <p className="mt-4 text-xs text-center text-muted-foreground">
                    Taxes calculated at checkout
                  </p>
                </div>

                {/* Promo code */}
                <div className="mt-6 bg-card border border-border p-6">
                  <h3 className="text-sm font-medium text-foreground mb-4">Promo Code</h3>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Enter code"
                      className="flex-1 bg-input border border-border px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                    />
                    <Button variant="outline" className="border-border text-foreground hover:bg-secondary">
                      Apply
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  )
}
