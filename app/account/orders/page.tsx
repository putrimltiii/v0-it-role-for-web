import Link from "next/link"
import { Package } from "lucide-react"
import { formatPrice } from "@/lib/format"

const orders = [
  {
    id: "UW12345678",
    date: "15 Maret 2026",
    status: "Delivered",
    total: 447000,
    items: [
      { name: "Urban Classic Hoodie", size: "L", color: "Black", quantity: 1, price: 249000 },
      { name: "Streetwear Cargo Pants", size: "32", color: "Khaki", quantity: 1, price: 199000 },
    ],
  },
  {
    id: "UW12345679",
    date: "28 Februari 2026",
    status: "Delivered",
    total: 249000,
    items: [
      { name: "Bomber Jacket Premium", size: "M", color: "Black", quantity: 1, price: 349000 },
    ],
  },
  {
    id: "UW12345680",
    date: "10 Februari 2026",
    status: "Delivered",
    total: 267000,
    items: [
      { name: "Essential Oversized Tee", size: "XL", color: "White", quantity: 2, price: 89000 },
      { name: "Urban Totebag", size: "One Size", color: "Natural", quantity: 1, price: 79000 },
    ],
  },
]

export default function OrdersPage() {
  return (
    <div>
      <h2 className="text-2xl font-medium text-foreground mb-8">Order History</h2>

      {orders.length > 0 ? (
        <div className="space-y-6">
          {orders.map((order) => (
            <div key={order.id} className="bg-card border border-border">
              {/* Order header */}
              <div className="p-6 border-b border-border flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <p className="font-medium text-foreground">Order #{order.id}</p>
                    <span className="inline-flex items-center px-2 py-0.5 bg-accent/20 text-accent text-xs tracking-wider uppercase">
                      {order.status}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{order.date}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-foreground">{formatPrice(order.total)}</p>
                  <p className="text-sm text-muted-foreground">
                    {order.items.reduce((acc, item) => acc + item.quantity, 0)} items
                  </p>
                </div>
              </div>

              {/* Order items */}
              <div className="p-6 space-y-4">
                {order.items.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-16 h-20 bg-secondary flex-shrink-0" />
                    <div className="flex-1">
                      <p className="font-medium text-foreground">{item.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {item.size} / {item.color} x {item.quantity}
                      </p>
                      <p className="text-sm text-foreground mt-1">{formatPrice(item.price)}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order actions */}
              <div className="px-6 pb-6 flex gap-4">
                <Link
                  href={`/account/orders/${order.id}`}
                  className="text-sm text-foreground hover:text-muted-foreground transition-colors underline"
                >
                  View Details
                </Link>
                <button className="text-sm text-foreground hover:text-muted-foreground transition-colors underline">
                  Track Order
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-card border border-border p-12 text-center">
          <Package className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
          <h3 className="text-lg font-medium text-foreground mb-2">No orders yet</h3>
          <p className="text-muted-foreground mb-6">
            When you place orders, they will appear here.
          </p>
          <Link
            href="/products"
            className="inline-block bg-primary text-primary-foreground px-6 py-3 text-sm tracking-wider uppercase hover:bg-primary/90 transition-colors"
          >
            Start Shopping
          </Link>
        </div>
      )}
    </div>
  )
}
