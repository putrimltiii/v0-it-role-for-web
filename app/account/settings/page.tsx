"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function SettingsPage() {
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "081234567890",
  })

  const [notifications, setNotifications] = useState({
    orderUpdates: true,
    promotions: true,
    newArrivals: false,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleNotificationChange = (key: keyof typeof notifications) => {
    setNotifications({ ...notifications, [key]: !notifications[key] })
  }

  return (
    <div className="space-y-12">
      {/* Profile Information */}
      <div>
        <h2 className="text-2xl font-medium text-foreground mb-8">Account Settings</h2>
        
        <div className="bg-card border border-border p-6">
          <h3 className="text-lg font-medium text-foreground mb-6">Profile Information</h3>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full bg-input border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full bg-input border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-input border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full bg-input border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                />
              </div>
            </div>

            <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Save Changes
            </Button>
          </form>
        </div>
      </div>

      {/* Password */}
      <div className="bg-card border border-border p-6">
        <h3 className="text-lg font-medium text-foreground mb-6">Change Password</h3>
        
        <form className="space-y-6">
          <div>
            <label className="text-sm text-muted-foreground mb-2 block">Current Password</label>
            <input
              type="password"
              className="w-full bg-input border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">New Password</label>
              <input
                type="password"
                className="w-full bg-input border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">Confirm New Password</label>
              <input
                type="password"
                className="w-full bg-input border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
              />
            </div>
          </div>

          <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Update Password
          </Button>
        </form>
      </div>

      {/* Notifications */}
      <div className="bg-card border border-border p-6">
        <h3 className="text-lg font-medium text-foreground mb-6">Email Notifications</h3>
        
        <div className="space-y-4">
          <label className="flex items-center justify-between cursor-pointer">
            <div>
              <p className="font-medium text-foreground">Order Updates</p>
              <p className="text-sm text-muted-foreground">Receive updates about your orders</p>
            </div>
            <button
              onClick={() => handleNotificationChange("orderUpdates")}
              className={`w-12 h-6 rounded-full relative transition-colors ${
                notifications.orderUpdates ? "bg-accent" : "bg-secondary"
              }`}
            >
              <span
                className={`absolute top-1 w-4 h-4 bg-foreground rounded-full transition-transform ${
                  notifications.orderUpdates ? "left-7" : "left-1"
                }`}
              />
            </button>
          </label>

          <label className="flex items-center justify-between cursor-pointer">
            <div>
              <p className="font-medium text-foreground">Promotions & Discounts</p>
              <p className="text-sm text-muted-foreground">Get notified about sales and special offers</p>
            </div>
            <button
              onClick={() => handleNotificationChange("promotions")}
              className={`w-12 h-6 rounded-full relative transition-colors ${
                notifications.promotions ? "bg-accent" : "bg-secondary"
              }`}
            >
              <span
                className={`absolute top-1 w-4 h-4 bg-foreground rounded-full transition-transform ${
                  notifications.promotions ? "left-7" : "left-1"
                }`}
              />
            </button>
          </label>

          <label className="flex items-center justify-between cursor-pointer">
            <div>
              <p className="font-medium text-foreground">New Arrivals</p>
              <p className="text-sm text-muted-foreground">Be the first to know about new products</p>
            </div>
            <button
              onClick={() => handleNotificationChange("newArrivals")}
              className={`w-12 h-6 rounded-full relative transition-colors ${
                notifications.newArrivals ? "bg-accent" : "bg-secondary"
              }`}
            >
              <span
                className={`absolute top-1 w-4 h-4 bg-foreground rounded-full transition-transform ${
                  notifications.newArrivals ? "left-7" : "left-1"
                }`}
              />
            </button>
          </label>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="bg-card border border-destructive/30 p-6">
        <h3 className="text-lg font-medium text-foreground mb-2">Delete Account</h3>
        <p className="text-sm text-muted-foreground mb-6">
          Permanently delete your account and all associated data. This action cannot be undone.
        </p>
        <Button variant="outline" className="border-destructive text-destructive hover:bg-destructive/10">
          Delete Account
        </Button>
      </div>
    </div>
  )
}
