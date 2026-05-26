"use client"

import { useEffect, useState } from "react"
import { Mail, Trash2 } from "lucide-react"

interface User {
  email: string
  nama: string
  registeredAt: string
}

export default function AdminUsers() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadUsers()
  }, [])

  function loadUsers() {
    try {
      setLoading(true)
      // Get all users from localStorage
      const userSet = new Set<string>()
      const usersArray: User[] = []

      // Check all localStorage keys for user data
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i)
        if (key?.startsWith('uw-user-')) {
          const userStr = localStorage.getItem(key)
          if (userStr) {
            const user = JSON.parse(userStr)
            if (user.email && !userSet.has(user.email)) {
              userSet.add(user.email)
              usersArray.push({
                email: user.email,
                nama: user.nama || user.name || 'Unknown',
                registeredAt: new Date().toISOString(),
              })
            }
          }
        }
      }

      // Also check for uw-user key which stores current user
      const currentUserStr = localStorage.getItem('uw-user')
      if (currentUserStr) {
        const user = JSON.parse(currentUserStr)
        if (user.email && !userSet.has(user.email)) {
          userSet.add(user.email)
          usersArray.push({
            email: user.email,
            nama: user.nama || user.name || 'Unknown',
            registeredAt: new Date().toISOString(),
          })
        }
      }

      setUsers(usersArray)
    } catch (error) {
      console.error('Error loading users:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleDeleteUser = (email: string) => {
    if (confirm(`Are you sure you want to delete user ${email}?`)) {
      // Remove from localStorage
      const currentUser = localStorage.getItem('uw-user')
      if (currentUser) {
        const user = JSON.parse(currentUser)
        if (user.email === email) {
          localStorage.removeItem('uw-user')
        }
      }

      // Remove from any other stored user data
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i)
        if (key?.startsWith('uw-user-')) {
          const userStr = localStorage.getItem(key)
          if (userStr) {
            const user = JSON.parse(userStr)
            if (user.email === email) {
              localStorage.removeItem(key)
            }
          }
        }
      }

      setUsers(users.filter(u => u.email !== email))
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-medium text-foreground">Users</h1>
        <p className="text-muted-foreground mt-1">View and manage registered users</p>
      </div>

      {loading ? (
        <div className="flex items-center justify-center h-64">
          <p className="text-muted-foreground">Loading users...</p>
        </div>
      ) : users.length === 0 ? (
        <div className="bg-card border border-border p-6 text-center">
          <p className="text-muted-foreground">No users found</p>
        </div>
      ) : (
        <div className="bg-card border border-border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-border bg-secondary/50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-medium text-foreground">Name</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-foreground">Email</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-foreground">Registered</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-foreground">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {users.map((user) => (
                  <tr key={user.email} className="hover:bg-secondary/50 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-foreground">{user.nama}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      {user.email}
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      {new Date(user.registeredAt).toLocaleDateString('id-ID')}
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => handleDeleteUser(user.email)}
                        className="flex items-center gap-2 px-3 py-1.5 border border-red-500 text-red-600 hover:bg-red-500/10 text-sm"
                      >
                        <Trash2 className="h-4 w-4" /> Delete
                      </button>
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
