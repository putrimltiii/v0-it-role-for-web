'use client'

import Link from 'next/link'
import { ArrowLeft, Package, Truck, CheckCircle } from 'lucide-react'
import { useParams } from 'next/navigation'

// Mock order data - in a real app, this would come from a database
const ordersDatabase: Record<string, any> = {
  'UW12345678': {
    id: 'UW12345678',
    date: '15 Maret 2026',
    status: 'Delivered',
    statusSteps: [
      { label: 'Order Placed', date: '15 Maret 2026', completed: true },
      { label: 'Processing', date: '16 Maret 2026', completed: true },
      { label: 'Shipped', date: '17 Maret 2026', completed: true },
      { label: 'Delivered', date: '20 Maret 2026', completed: true },
    ],
    total: 447000,
    subtotal: 425000,
    tax: 22000,
    shipping: 0,
    items: [
      {
        id: 1,
        name: 'Premium T-Shirt',
        price: 149000,
        quantity: 2,
        image: '/images/product-1.jpg',
      },
      {
        id: 2,
        name: 'Casual Jeans',
        price: 299000,
        quantity: 1,
        image: '/images/product-2.jpg',
      },
    ],
    shippingAddress: {
      name: 'John Doe',
      street: 'Jl. Sudirman No. 123',
      city: 'Jakarta',
      state: 'DKI Jakarta',
      zipCode: '12190',
      country: 'Indonesia',
      phone: '+62 812-345-6789',
    },
  },
  'UW12345679': {
    id: 'UW12345679',
    date: '28 Februari 2026',
    status: 'Delivered',
    statusSteps: [
      { label: 'Order Placed', date: '28 Februari 2026', completed: true },
      { label: 'Processing', date: '1 Maret 2026', completed: true },
      { label: 'Shipped', date: '3 Maret 2026', completed: true },
      { label: 'Delivered', date: '7 Maret 2026', completed: true },
    ],
    total: 249000,
    subtotal: 225000,
    tax: 11250,
    shipping: 12750,
    items: [
      {
        id: 3,
        name: 'Summer Dress',
        price: 225000,
        quantity: 1,
        image: '/images/product-3.jpg',
      },
    ],
    shippingAddress: {
      name: 'Jane Smith',
      street: 'Jl. Gatot Subroto No. 456',
      city: 'Bandung',
      state: 'Jawa Barat',
      zipCode: '40123',
      country: 'Indonesia',
      phone: '+62 812-987-6543',
    },
  },
}

export default function OrderDetailPage() {
  const params = useParams()
  const orderId = params?.orderId as string
  const order = ordersDatabase[orderId]

  if (!order) {
    return (
      <div className="space-y-6">
        <Link
          href="/account/orders"
          className="inline-flex items-center gap-2 text-foreground hover:text-muted-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Orders
        </Link>
        <div className="bg-card border border-border p-12 text-center">
          <Package className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
          <p className="text-foreground font-medium mb-2">Order Not Found</p>
          <p className="text-muted-foreground">
            We couldn&apos;t find order #{orderId}
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <Link
          href="/account/orders"
          className="inline-flex items-center gap-2 text-foreground hover:text-muted-foreground transition-colors mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Orders
        </Link>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-medium text-foreground">
              Order #{order.id}
            </h1>
            <p className="text-sm text-muted-foreground mt-1">{order.date}</p>
          </div>
          <span className="inline-flex items-center px-4 py-2 bg-accent/20 text-accent font-medium text-sm tracking-wider uppercase w-fit">
            {order.status}
          </span>
        </div>
      </div>

      {/* Order Timeline */}
      <div className="bg-card border border-border p-6">
        <h2 className="text-lg font-medium text-foreground mb-6">
          Order Status
        </h2>
        <div className="space-y-4">
          {order.statusSteps.map((step: any, index: number) => (
            <div key={index} className="flex items-start gap-4">
              <div className="flex-shrink-0">
                {step.completed ? (
                  <div className="flex items-center justify-center h-8 w-8 bg-accent text-white">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-8 w-8 border-2 border-border bg-background">
                    <Truck className="h-4 w-4 text-muted-foreground" />
                  </div>
                )}
              </div>
              <div className="flex-1 pt-1">
                <p className="font-medium text-foreground">{step.label}</p>
                <p className="text-sm text-muted-foreground">{step.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Order Items */}
      <div className="bg-card border border-border p-6">
        <h2 className="text-lg font-medium text-foreground mb-6">
          Order Items
        </h2>
        <div className="space-y-4">
          {order.items.map((item: any) => (
            <div
              key={item.id}
              className="flex gap-4 pb-4 border-b border-border last:border-b-0"
            >
              <div className="h-20 w-20 bg-muted flex-shrink-0 flex items-center justify-center">
                <Package className="h-8 w-8 text-muted-foreground" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-foreground">{item.name}</p>
                <p className="text-sm text-muted-foreground">
                  Quantity: {item.quantity}
                </p>
              </div>
              <div className="text-right pt-1">
                <p className="font-medium text-foreground">
                  Rp {item.price.toLocaleString('id-ID')}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Order Summary */}
        <div className="bg-card border border-border p-6">
          <h2 className="text-lg font-medium text-foreground mb-6">
            Order Summary
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="text-foreground">
                Rp {order.subtotal.toLocaleString('id-ID')}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Tax</span>
              <span className="text-foreground">
                Rp {order.tax.toLocaleString('id-ID')}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Shipping</span>
              <span className="text-foreground">
                {order.shipping === 0
                  ? 'Free'
                  : `Rp ${order.shipping.toLocaleString('id-ID')}`}
              </span>
            </div>
            <div className="border-t border-border pt-3 flex justify-between">
              <span className="font-medium text-foreground">Total</span>
              <span className="font-medium text-lg text-foreground">
                Rp {order.total.toLocaleString('id-ID')}
              </span>
            </div>
          </div>
        </div>

        {/* Shipping Address */}
        <div className="bg-card border border-border p-6">
          <h2 className="text-lg font-medium text-foreground mb-6">
            Shipping Address
          </h2>
          <div className="space-y-2 text-sm">
            <p className="font-medium text-foreground">
              {order.shippingAddress.name}
            </p>
            <p className="text-muted-foreground">
              {order.shippingAddress.street}
            </p>
            <p className="text-muted-foreground">
              {order.shippingAddress.city}, {order.shippingAddress.state}{' '}
              {order.shippingAddress.zipCode}
            </p>
            <p className="text-muted-foreground">
              {order.shippingAddress.country}
            </p>
            <p className="text-muted-foreground mt-3">
              {order.shippingAddress.phone}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
