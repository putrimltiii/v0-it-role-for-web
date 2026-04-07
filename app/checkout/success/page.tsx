import Link from "next/link"
import { CheckCircle2, Package, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CheckoutSuccessPage() {
  const orderNumber = `UW${Date.now().toString().slice(-8)}`

  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        <CheckCircle2 className="h-16 w-16 mx-auto text-accent mb-6" />
        
        <h1 className="font-serif text-3xl font-medium text-foreground mb-4">
          Thank You for Your Order!
        </h1>
        
        <p className="text-muted-foreground mb-8">
          Your order has been placed successfully. We&apos;ll send you a confirmation email with your order details.
        </p>

        <div className="bg-card border border-border p-6 mb-8">
          <p className="text-sm text-muted-foreground mb-2">Order Number</p>
          <p className="text-xl font-medium text-foreground tracking-wider">{orderNumber}</p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-secondary p-4">
            <Mail className="h-6 w-6 mx-auto text-muted-foreground mb-2" />
            <p className="text-sm font-medium text-foreground">Confirmation Sent</p>
            <p className="text-xs text-muted-foreground">Check your email</p>
          </div>
          <div className="bg-secondary p-4">
            <Package className="h-6 w-6 mx-auto text-muted-foreground mb-2" />
            <p className="text-sm font-medium text-foreground">Shipping Soon</p>
            <p className="text-xs text-muted-foreground">1-2 business days</p>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 text-sm tracking-wider uppercase">
            <Link href="/account/orders">Track Your Order</Link>
          </Button>
          <Button asChild variant="outline" className="border-border text-foreground hover:bg-secondary h-12 text-sm tracking-wider uppercase">
            <Link href="/products">Continue Shopping</Link>
          </Button>
        </div>

        <p className="mt-8 text-xs text-muted-foreground">
          Need help? <Link href="/contact" className="underline hover:text-foreground">Contact us</Link>
        </p>
      </div>
    </main>
  )
}
