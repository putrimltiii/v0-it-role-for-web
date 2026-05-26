"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { fetchUserOrders, type Order } from "@/lib/supabase/orders"
import { formatPrice } from "@/lib/format"
import { updateOrderStatus } from "@/lib/supabase/orders"

const statuses = ["Processing", "Shipped", "Delivered", "Cancelled"]

export default function AdminOrders() {
  const [orders, setOrders] = useState<Order[]>([])
  const [loading, setLoading] = useState(true)
  const [updatingId, setUpdatingId] = useState<string | null>(null)

  useEffect(() => {
    loadOrders()
  }, [])

  async function loadOrders() {
    try {
      setLoading(true)
      const allOrders = await fetchUserOrders('')
      setOrders(Array.isArray(allOrders) ? allOrders : [])
    } catch (error) {
      console.error('Error loading orders:', error)
    } finally {
      setLoading(false)
    }
  }

  async function handleStatusChange(orderId: string, newStatus: string) {
    try {
      setUpdatingId(orderId)
      await updateOrderStatus(orderId, newStatus)
      setOrders(orders.map(o => o.id === orderId ? { ...o, status: newStatus } : o))
    } catch (error) {
      console.error('Error updating status:', error)
    } finally {
      setUpdatingId(null)
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-medium text-foreground">Orders</h1>
        <p className="text-muted-foreground mt-1">Manage all orders</p>
      </div>

      {loading ? (
        <div className="flex items-center justify-center h-64">
          <p className="text-muted-foreground">Loading orders...</p>
        </div>
      ) : orders.length === 0 ? (
        <div className="bg-card border border-border p-6 text-center">
          <p className="text-muted-foreground">No orders found</p>
        </div>
      ) : (
        <div className="bg-card border border-border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-border bg-secondary/50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-medium text-foreground">Order ID</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-foreground">Customer</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-foreground">Items</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-foreground">Total</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-foreground">Status</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-foreground">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {orders.map((order) => (
                  <tr key={order.id} className="hover:bg-secondary/50 transition-colors">
                    <td className="px-6 py-4 text-sm text-foreground font-medium">#{order.order_number}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{order.user_email}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{order.items.length} items</td>
                    <td className="px-6 py-4 text-sm font-medium text-foreground">{formatPrice(order.total)}</td>
                    <td className="px-6 py-4">
                      <select
                        value={order.status}
                        onChange={(e) => handleStatusChange(order.id, e.target.value)}
                        disabled={updatingId === order.id}
                        className="px-3 py-1.5 border border-border text-sm bg-background text-foreground hover:bg-secondary disabled:opacity-50"
                      >
                        {statuses.map(status => (
                          <option key={status} value={status}>{status}</option>
                        ))}
                      </select>
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      {new Date(order.date).toLocaleDateString('id-ID')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}
