"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Package, Heart, MapPin, ArrowRight } from "lucide-react"

const recentOrders = [
  {
    id: "UW12345678",
    date: "15 Maret 2026",
    status: "Delivered",
    total: 697000,
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

export default function AccountPage() {
  const router = useRouter()
  const [userName, setUserName] = useState("Guest")

  useEffect(() => {
    const stored = localStorage.getItem("uw-user")
    if (stored) {
      const user = JSON.parse(stored)
      setUserName(user.name)
    }
  }, [])

  const handleSignOut = () => {
    localStorage.removeItem("uw-user")
    router.push("/")
  }

  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-2xl font-medium text-foreground mb-2">
          Welcome back, {userName}
        </h2>
        <p className="text-muted-foreground">
          Manage your orders, wishlist, and account settings.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link
          href="/account/orders"
          className="bg-card border border-border p-6 hover:border-foreground transition-colors group"
        >
          <Package className="h-6 w-6 text-muted-foreground mb-4" />
          <h3 className="font-medium text-foreground mb-1">Orders</h3>
          <p className="text-sm text-muted-foreground mb-4">Track and view your orders</p>
          <span className="text-sm text-foreground flex items-center gap-1 group-hover:gap-2 transition-all">
            View all <ArrowRight className="h-4 w-4" />
          </span>
        </Link>

        <Link
          href="/wishlist"
          className="bg-card border border-border p-6 hover:border-foreground transition-colors group"
        >
          <Heart className="h-6 w-6 text-muted-foreground mb-4" />
          <h3 className="font-medium text-foreground mb-1">Wishlist</h3>
          <p className="text-sm text-muted-foreground mb-4">Your saved items</p>
          <span className="text-sm text-foreground flex items-center gap-1 group-hover:gap-2 transition-all">
            View all <ArrowRight className="h-4 w-4" />
          </span>
        </Link>

        <Link
          href="/account/addresses"
          className="bg-card border border-border p-6 hover:border-foreground transition-colors group"
        >
          <MapPin className="h-6 w-6 text-muted-foreground mb-4" />
          <h3 className="font-medium text-foreground mb-1">Addresses</h3>
          <p className="text-sm text-muted-foreground mb-4">Manage shipping addresses</p>
          <span className="text-sm text-foreground flex items-center gap-1 group-hover:gap-2 transition-all">
            Manage <ArrowRight className="h-4 w-4" />
          </span>
        </Link>
      </div>

      <div>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-medium text-foreground">Recent Orders</h3>
          <Link
            href="/account/orders"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            View all
          </Link>
        </div>

        <div className="space-y-4">
          {recentOrders.map((order) => (
            <div
              key={order.id}
              className="bg-card border border-border p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
            >
              <div>
                <p className="font-medium text-foreground">Order #{order.id}</p>
                <p className="text-sm text-muted-foreground">
                  {order.date} · {order.items} {order.items === 1 ? "item" : "items"}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <span className="inline-flex items-center px-3 py-1 bg-accent/20 text-accent text-xs tracking-wider uppercase">
                  {order.status}
                </span>
                <Link
                  href={`/account/orders/${order.id}`}
                  className="text-sm text-foreground hover:text-muted-foreground transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sign out button */}
      <div className="pt-4 border-t border-border">
        <button
          onClick={handleSignOut}
          className="text-sm text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider"
        >
          Sign Out
        </button>
      </div>
    </div>
  )
}
