import Link from "next/link"
import { Package, ArrowRight } from "lucide-react"

const orders = [
  {
    id: "UW12345678",
    date: "15 Maret 2026",
    status: "Delivered",
    total: 447000,
    items: 3,
  },
  {
    id: "UW12345679",
    date: "28 Februari 2026",
    status: "Delivered",
    total: 249000,
    items: 1,
  },
]

export default function OrdersPage() {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-medium text-foreground">My Orders</h2>

      {orders.length > 0 ? (
        <div className="space-y-4">
          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-card border border-border p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
            >
              <div>
                <p className="font-medium text-foreground">Order #{order.id}</p>
                <p className="text-sm text-muted-foreground">
                  {order.date} · {order.items} {order.items === 1 ? "item" : "items"}
                </p>
                <p className="text-sm font-medium text-foreground mt-1">
                  Rp {order.total.toLocaleString("id-ID")}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <span className="inline-flex items-center px-3 py-1 bg-accent/20 text-accent text-xs tracking-wider uppercase">
                  {order.status}
                </span>
                <Link
                  href={`/account/orders/${order.id}`}
                  className="text-sm text-foreground hover:text-muted-foreground transition-colors flex items-center gap-1"
                >
                  View Details <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-card border border-border p-12 text-center">
          <Package className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
          <p className="text-muted-foreground mb-4">No orders yet</p>
          <Link
            href="/products"
            className="text-sm text-foreground hover:text-muted-foreground transition-colors underline"
          >
            Start shopping
          </Link>
        </div>
      )}
    </div>
  )
}
