"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ChevronLeft, CreditCard, Wallet, Building2, QrCode } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCartStore } from "@/lib/store/cart"
import { formatPrice } from "@/lib/format"
import { cn } from "@/lib/utils"

const paymentMethods = [
  { id: "bank", name: "Bank Transfer", icon: Building2, description: "BCA, Mandiri, BNI, BRI" },
  { id: "ewallet", name: "E-Wallet", icon: Wallet, description: "GoPay, OVO, Dana, ShopeePay" },
  { id: "qris", name: "QRIS", icon: QrCode, description: "Scan & Pay" },
  { id: "card", name: "Credit/Debit Card", icon: CreditCard, description: "Visa, Mastercard, JCB" },
]

const shippingMethods = [
  { id: "regular", name: "Regular", price: 15000, estimate: "3-5 hari kerja" },
  { id: "express", name: "Express", price: 25000, estimate: "1-2 hari kerja" },
  { id: "sameday", name: "Same Day", price: 40000, estimate: "Hari ini" },
]

export default function CheckoutPage() {
  const router = useRouter()
  const { items, getTotalPrice, clearCart } = useCartStore()
  const [step, setStep] = useState(1)
  const [shippingMethod, setShippingMethod] = useState(shippingMethods[0])
  const [paymentMethod, setPaymentMethod] = useState(paymentMethods[0])
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    province: "",
    postalCode: "",
  })

  const subtotal = getTotalPrice()
  const freeShippingThreshold = 300000
  const shippingCost = subtotal >= freeShippingThreshold ? 0 : shippingMethod.price
  const total = subtotal + shippingCost

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step < 3) {
      setStep(step + 1)
    } else {
      // Process order
      clearCart()
      router.push("/checkout/success")
    }
  }

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-medium text-foreground mb-4">Your cart is empty</h1>
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/products">Continue Shopping</Link>
          </Button>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="font-serif text-xl font-semibold tracking-tight text-foreground">
            URBANWEAVE
          </Link>
          <Link
            href="/cart"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
          >
            <ChevronLeft className="h-4 w-4" />
            Back to Cart
          </Link>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Progress steps */}
        <div className="flex items-center justify-center gap-4 mb-12">
          {["Shipping", "Payment", "Review"].map((label, index) => (
            <div key={label} className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span
                  className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center text-sm",
                    step > index + 1
                      ? "bg-accent text-accent-foreground"
                      : step === index + 1
                      ? "bg-foreground text-background"
                      : "bg-secondary text-muted-foreground"
                  )}
                >
                  {index + 1}
                </span>
                <span
                  className={cn(
                    "text-sm",
                    step >= index + 1 ? "text-foreground" : "text-muted-foreground"
                  )}
                >
                  {label}
                </span>
              </div>
              {index < 2 && <div className="w-12 h-px bg-border" />}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit}>
              {/* Step 1: Shipping */}
              {step === 1 && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-lg font-medium text-foreground mb-6">Contact Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="md:col-span-2">
                        <label className="text-sm text-muted-foreground mb-2 block">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-input border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                          placeholder="email@example.com"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="text-sm text-muted-foreground mb-2 block">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-input border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                          placeholder="08xxxxxxxxxx"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-lg font-medium text-foreground mb-6">Shipping Address</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm text-muted-foreground mb-2 block">First Name</label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-input border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                        />
                      </div>
                      <div>
                        <label className="text-sm text-muted-foreground mb-2 block">Last Name</label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-input border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="text-sm text-muted-foreground mb-2 block">Address</label>
                        <input
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-input border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                          placeholder="Street address"
                        />
                      </div>
                      <div>
                        <label className="text-sm text-muted-foreground mb-2 block">City</label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-input border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                        />
                      </div>
                      <div>
                        <label className="text-sm text-muted-foreground mb-2 block">Province</label>
                        <select
                          name="province"
                          value={formData.province}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-input border border-border px-4 py-3 text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                        >
                          <option value="">Select province</option>
                          <option value="jakarta">DKI Jakarta</option>
                          <option value="jabar">Jawa Barat</option>
                          <option value="jatim">Jawa Timur</option>
                          <option value="jateng">Jawa Tengah</option>
                          <option value="banten">Banten</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-sm text-muted-foreground mb-2 block">Postal Code</label>
                        <input
                          type="text"
                          name="postalCode"
                          value={formData.postalCode}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-input border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-lg font-medium text-foreground mb-6">Shipping Method</h2>
                    <div className="space-y-3">
                      {shippingMethods.map((method) => (
                        <label
                          key={method.id}
                          className={cn(
                            "flex items-center justify-between p-4 border cursor-pointer transition-colors",
                            shippingMethod.id === method.id
                              ? "border-foreground bg-secondary"
                              : "border-border hover:border-muted-foreground"
                          )}
                        >
                          <div className="flex items-center gap-3">
                            <input
                              type="radio"
                              name="shipping"
                              checked={shippingMethod.id === method.id}
                              onChange={() => setShippingMethod(method)}
                              className="sr-only"
                            />
                            <div
                              className={cn(
                                "w-4 h-4 rounded-full border-2",
                                shippingMethod.id === method.id
                                  ? "border-foreground bg-foreground"
                                  : "border-muted-foreground"
                              )}
                            />
                            <div>
                              <p className="font-medium text-foreground">{method.name}</p>
                              <p className="text-sm text-muted-foreground">{method.estimate}</p>
                            </div>
                          </div>
                          <span className="font-medium text-foreground">
                            {subtotal >= freeShippingThreshold && method.id === "regular"
                              ? "Free"
                              : formatPrice(method.price)}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Payment */}
              {step === 2 && (
                <div>
                  <h2 className="text-lg font-medium text-foreground mb-6">Payment Method</h2>
                  <div className="space-y-3">
                    {paymentMethods.map((method) => (
                      <label
                        key={method.id}
                        className={cn(
                          "flex items-center gap-4 p-4 border cursor-pointer transition-colors",
                          paymentMethod.id === method.id
                            ? "border-foreground bg-secondary"
                            : "border-border hover:border-muted-foreground"
                        )}
                      >
                        <input
                          type="radio"
                          name="payment"
                          checked={paymentMethod.id === method.id}
                          onChange={() => setPaymentMethod(method)}
                          className="sr-only"
                        />
                        <div
                          className={cn(
                            "w-4 h-4 rounded-full border-2 flex-shrink-0",
                            paymentMethod.id === method.id
                              ? "border-foreground bg-foreground"
                              : "border-muted-foreground"
                          )}
                        />
                        <method.icon className="h-6 w-6 text-muted-foreground flex-shrink-0" />
                        <div>
                          <p className="font-medium text-foreground">{method.name}</p>
                          <p className="text-sm text-muted-foreground">{method.description}</p>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3: Review */}
              {step === 3 && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-lg font-medium text-foreground mb-4">Review Your Order</h2>
                    <div className="bg-card border border-border p-6 space-y-4">
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground mb-2">Shipping Address</h3>
                        <p className="text-foreground">
                          {formData.firstName} {formData.lastName}
                        </p>
                        <p className="text-foreground">{formData.address}</p>
                        <p className="text-foreground">
                          {formData.city}, {formData.province} {formData.postalCode}
                        </p>
                        <p className="text-foreground">{formData.phone}</p>
                      </div>
                      <div className="border-t border-border pt-4">
                        <h3 className="text-sm font-medium text-muted-foreground mb-2">Shipping Method</h3>
                        <p className="text-foreground">{shippingMethod.name} - {shippingMethod.estimate}</p>
                      </div>
                      <div className="border-t border-border pt-4">
                        <h3 className="text-sm font-medium text-muted-foreground mb-2">Payment Method</h3>
                        <p className="text-foreground">{paymentMethod.name}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-foreground mb-4">Order Items</h3>
                    <div className="space-y-4">
                      {items.map((item) => (
                        <div
                          key={`${item.product.id}-${item.size}-${item.color}`}
                          className="flex gap-4 items-center"
                        >
                          <div className="w-16 h-20 bg-secondary flex-shrink-0" />
                          <div className="flex-1">
                            <p className="font-medium text-foreground">{item.product.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {item.size} / {item.color} x {item.quantity}
                            </p>
                          </div>
                          <p className="font-medium text-foreground">
                            {formatPrice(item.product.price * item.quantity)}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation buttons */}
              <div className="flex gap-4 mt-8">
                {step > 1 && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setStep(step - 1)}
                    className="border-border text-foreground hover:bg-secondary"
                  >
                    Back
                  </Button>
                )}
                <Button
                  type="submit"
                  className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 h-12 text-sm tracking-wider uppercase"
                >
                  {step === 3 ? "Place Order" : "Continue"}
                </Button>
              </div>
            </form>
          </div>

          {/* Order summary */}
          <div className="lg:col-span-1">
            <div className="bg-card border border-border p-6 sticky top-6">
              <h2 className="text-lg font-medium text-foreground mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div
                    key={`${item.product.id}-${item.size}-${item.color}`}
                    className="flex gap-3"
                  >
                    <div className="w-12 h-16 bg-secondary flex-shrink-0 relative">
                      <span className="absolute -top-2 -right-2 w-5 h-5 bg-muted-foreground text-background text-xs rounded-full flex items-center justify-center">
                        {item.quantity}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground truncate">{item.product.name}</p>
                      <p className="text-xs text-muted-foreground">{item.size} / {item.color}</p>
                    </div>
                    <p className="text-sm font-medium text-foreground">
                      {formatPrice(item.product.price * item.quantity)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="border-t border-border pt-4 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="text-foreground">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="text-foreground">
                    {shippingCost === 0 ? "Free" : formatPrice(shippingCost)}
                  </span>
                </div>
                <div className="border-t border-border pt-3 flex justify-between">
                  <span className="font-medium text-foreground">Total</span>
                  <span className="font-medium text-foreground">{formatPrice(total)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
