import Link from "next/link"
import { ChevronLeft, Package, MapPin, CreditCard } from "lucide-react"

const ordersData: Record<string, {
  id: string
  date: string
  status: string
  total: number
  subtotal: number
  shipping: number
  paymentMethod: string
  shippingAddress: string
  items: { name: string; size: string; color: string; qty: number; price: number; image: string }[]
}> = {
  UW12345678: {
    id: "UW12345678",
    date: "15 Maret 2026",
    status: "Delivered",
    subtotal: 697000,
    shipping: 0,
    total: 697000,
    paymentMethod: "Transfer Bank BCA",
    shippingAddress: "Jl. Sudirman No. 12, Jakarta Selatan, DKI Jakarta 12190",
    items: [
      { name: "Urban Classic Hoodie", size: "M", color: "Black", qty: 1, price: 249000, image: "/images/product-1.jpg" },
      { name: "Cargo Street Pants", size: "32", color: "Olive", qty: 1, price: 299000, image: "/images/product-2.jpg" },
      { name: "Essential Tee", size: "L", color: "White", qty: 1, price: 149000, image: "/images/product-3.jpg" },
    ],
  },
  UW12345679: {
    id: "UW12345679",
    date: "28 Februari 2026",
    status: "Delivered",
    subtotal: 249000,
    shipping: 0,
    total: 249000,
    paymentMethod: "GoPay",
    shippingAddress: "Jl. Sudirman No. 12, Jakarta Selatan, DKI Jakarta 12190",
    items: [
      { name: "Urban Classic Hoodie", size: "L", color: "Cream", qty: 1, price: 249000, image: "/images/product-1.jpg" },
    ],
  },
}

export default async function OrderDetailPage({ params }: { params: Promise<{ orderId: string }> }) {
  const { orderId } = await params
  const order = ordersData[orderId]

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
          <h2 className="text-2xl font-medium text-foreground">Order #{order.id}</h2>
          <p className="text-sm text-muted-foreground mt-1">{order.date}</p>
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
          {order.items.map((item, i) => (
            <div key={i} className="px-6 py-4 flex items-center gap-4">
              <div className="w-16 h-20 bg-secondary flex-shrink-0 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-foreground">{item.name}</p>
                <p className="text-sm text-muted-foreground mt-0.5">
                  Size: {item.size} · Color: {item.color} · Qty: {item.qty}
                </p>
              </div>
              <p className="font-medium text-foreground">
                Rp {item.price.toLocaleString("id-ID")}
              </p>
            </div>
          ))}
        </div>
        <div className="px-6 py-4 border-t border-border space-y-2">
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Subtotal</span>
            <span>Rp {order.subtotal.toLocaleString("id-ID")}</span>
          </div>
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Shipping</span>
            <span>{order.shipping === 0 ? "Free" : `Rp ${order.shipping.toLocaleString("id-ID")}`}</span>
          </div>
          <div className="flex justify-between font-medium text-foreground pt-2 border-t border-border">
            <span>Total</span>
            <span>Rp {order.total.toLocaleString("id-ID")}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-card border border-border p-6">
          <h3 className="font-medium text-foreground flex items-center gap-2 mb-3">
            <MapPin className="h-4 w-4" /> Shipping Address
          </h3>
          <p className="text-sm text-muted-foreground">{order.shippingAddress}</p>
        </div>
        <div className="bg-card border border-border p-6">
          <h3 className="font-medium text-foreground flex items-center gap-2 mb-3">
            <CreditCard className="h-4 w-4" /> Payment Method
          </h3>
          <p className="text-sm text-muted-foreground">{order.paymentMethod}</p>
        </div>
      </div>
    </div>
  )
}
