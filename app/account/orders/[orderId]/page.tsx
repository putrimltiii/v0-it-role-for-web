import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, Package, MapPin, CreditCard } from "lucide-react"
import { fetchOrderById } from "@/lib/supabase/orders"
import { formatPrice } from "@/lib/format"

export default async function OrderDetailPage({ params }: { params: Promise<{ orderId: string }> }) {
  const { orderId } = await params
  const order = await fetchOrderById(orderId)

  if (!order) {
    return (
      <div className="text-center py-16">
        <Package className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
        <h2 className="text-xl font-medium text-foreground mb-2">Order not found</h2>
        <Link href="/account/orders" className="text-sm text-muted-foreground hover:text-foreground underline">
          Back to orders
        </Link>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <Link
        href="/account/orders"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <ChevronLeft className="h-4 w-4" />
        Back to Orders
      </Link>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-medium text-foreground">Order #{order.order_number}</h2>
          <p className="text-sm text-muted-foreground mt-1">
            {new Date(order.date).toLocaleDateString('id-ID', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
        </div>
        <span className="inline-flex items-center px-4 py-2 bg-accent/20 text-accent text-sm tracking-wider uppercase w-fit">
          {order.status}
        </span>
      </div>

      <div className="bg-card border border-border">
        <div className="px-6 py-4 border-b border-border">
          <h3 className="font-medium text-foreground flex items-center gap-2">
            <Package className="h-4 w-4" /> Items Ordered
          </h3>
        </div>
        <div className="divide-y divide-border">
          {order.items.map((item: any, i: number) => (
            <div key={i} className="px-6 py-4 flex items-center gap-4">
              <div className="w-16 h-20 bg-secondary flex-shrink-0 overflow-hidden relative">
                {item.image && (
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-foreground">{item.name}</p>
                <p className="text-sm text-muted-foreground mt-0.5">
                  Size: {item.size} · Color: {item.color} · Qty: {item.quantity}
                </p>
              </div>
              <p className="font-medium text-foreground">
                {formatPrice(item.price * item.quantity)}
              </p>
            </div>
          ))}
        </div>
        <div className="px-6 py-4 border-t border-border space-y-2">
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Total</span>
            <span>{formatPrice(order.total)}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-card border border-border p-6">
          <h3 className="font-medium text-foreground flex items-center gap-2 mb-3">
            <CreditCard className="h-4 w-4" /> Payment Status
          </h3>
          <p className="text-sm text-muted-foreground">
            {order.status === 'Processing' ? 'Processing' : 'Completed'}
          </p>
        </div>
      </div>
    </div>
  )
}
