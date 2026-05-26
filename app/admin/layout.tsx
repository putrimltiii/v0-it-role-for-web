"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { BarChart3, Package, Users, LogOut, ShoppingBag } from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Overview", href: "/admin", icon: BarChart3 },
  { name: "Orders", href: "/admin/orders", icon: ShoppingBag },
  { name: "Products", href: "/admin/products", icon: Package },
  { name: "Users", href: "/admin/users", icon: Users },
]

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const router = useRouter()
  const [isAdmin, setIsAdmin] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const adminToken = localStorage.getItem('uw-admin')
    if (!adminToken) {
      router.push('/')
    } else {
      setIsAdmin(true)
    }
    setLoading(false)
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem('uw-admin')
    router.push('/')
  }

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>
  }

  if (!isAdmin) {
    return null
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-24 pb-16">
        <div className="flex gap-6 px-6 max-w-7xl mx-auto">
          {/* Sidebar */}
          <aside className="w-48 flex-shrink-0">
            <nav className="space-y-1 sticky top-24">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 text-sm transition-colors",
                    pathname === item.href
                      ? "bg-secondary text-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  {item.name}
                </Link>
              ))}
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </button>
            </nav>
          </aside>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {children}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
