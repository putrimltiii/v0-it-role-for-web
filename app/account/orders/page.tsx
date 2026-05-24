"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Package, ArrowRight } from "lucide-react"
import { fetchUserOrders, type Order } from "@/lib/supabase/orders"
import { formatPrice } from "@/lib/format"

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([])
  const [loading, setLoading] = useState(true)
  const [userEmail, setUserEmail] = useState("")

  useEffect(() => {
    const stored = localStorage.getItem("uw-user")
    if (stored) {
      const user = JSON.parse(stored)
      setUserEmail(user.email || "")
    }
  }, [])

  useEffect(() => {
    async function loadOrders() {
      if (userEmail) {
        setLoading(true)
        const fetchedOrders = await fetchUserOrders(userEmail)
        setOrders(fetchedOrders)
        setLoading(false)
      }
    }

    loadOrders()
  }, [userEmail])
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-medium text-foreground">My Orders</h2>

      {loading ? (
        <p className="text-muted-foreground">Loading orders...</p>
      ) : orders.length > 0 ? (
        <div className="space-y-4">
          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-card border border-border p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
            >
              <div>
                <p className="font-medium text-foreground">Order #{order.order_number}</p>
                <p className="text-sm text-muted-foreground">
                  {new Date(order.date).toLocaleDateString('id-ID', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })} · {order.items.length} {order.items.length === 1 ? "item" : "items"}
                </p>
                <p className="text-sm font-medium text-foreground mt-1">
                  {formatPrice(order.total)}
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
