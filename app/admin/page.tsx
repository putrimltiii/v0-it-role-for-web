"use client"

import { useEffect, useState } from "react"
import { ShoppingBag, DollarSign, Package, Users, TrendingUp } from "lucide-react"
import { fetchUserOrders } from "@/lib/supabase/orders"
import { products } from "@/lib/data/products"
import { formatPrice } from "@/lib/format"

interface Stats {
  totalOrders: number
  totalRevenue: number
  totalProducts: number
  totalUsers: number
}

export default function AdminOverview() {
  const [stats, setStats] = useState<Stats>({
    totalOrders: 0,
    totalRevenue: 0,
    totalProducts: products.length,
    totalUsers: 0,
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadStats() {
      try {
        // Get all orders from Supabase
        const allOrders = await fetchUserOrders('')
        const orders = Array.isArray(allOrders) ? allOrders : []
        
        // Calculate stats
        const totalRevenue = orders.reduce((sum, order) => sum + (order.total || 0), 0)
        
        // Get users from localStorage
        const users = new Set()
        // We could also query from Supabase if we had a users table
        
        setStats({
          totalOrders: orders.length,
          totalRevenue,
          totalProducts: products.length,
          totalUsers: users.size,
        })
      } catch (error) {
        console.error('Error loading stats:', error)
      } finally {
        setLoading(false)
      }
    }

    loadStats()
  }, [])

  const statCards = [
    {
      label: "Total Orders",
      value: stats.totalOrders,
      icon: ShoppingBag,
      color: "bg-blue-500/10 text-blue-600",
    },
    {
      label: "Total Revenue",
      value: formatPrice(stats.totalRevenue),
      icon: DollarSign,
      color: "bg-green-500/10 text-green-600",
    },
    {
      label: "Total Products",
      value: stats.totalProducts,
      icon: Package,
      color: "bg-purple-500/10 text-purple-600",
    },
    {
      label: "Total Users",
      value: stats.totalUsers,
      icon: Users,
      color: "bg-orange-500/10 text-orange-600",
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-medium text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-1">Welcome to the admin dashboard</p>
      </div>

      {loading ? (
        <div className="flex items-center justify-center h-64">
          <p className="text-muted-foreground">Loading stats...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {statCards.map((card) => {
            const Icon = card.icon
            return (
              <div key={card.label} className="bg-card border border-border p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{card.label}</p>
                    <p className="text-2xl font-medium text-foreground mt-2">{card.value}</p>
                  </div>
                  <div className={`${card.color} p-3`}>
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
