"use client"

import { useState } from "react"
import { MapPin, Plus, Edit2, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const initialAddresses = [
  {
    id: "1",
    name: "Home",
    recipient: "John Doe",
    phone: "081234567890",
    address: "Jl. Sudirman No. 123",
    city: "Jakarta Selatan",
    province: "DKI Jakarta",
    postalCode: "12190",
    isDefault: true,
  },
  {
    id: "2",
    name: "Office",
    recipient: "John Doe",
    phone: "081234567890",
    address: "Gedung Wisma BNI 46, Lt. 15",
    city: "Jakarta Pusat",
    province: "DKI Jakarta",
    postalCode: "10220",
    isDefault: false,
  },
]

export default function AddressesPage() {
  const [addresses, setAddresses] = useState(initialAddresses)

  const deleteAddress = (id: string) => {
    setAddresses(addresses.filter((a) => a.id !== id))
  }

  const setDefaultAddress = (id: string) => {
    setAddresses(
      addresses.map((a) => ({
        ...a,
        isDefault: a.id === id,
      }))
    )
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-medium text-foreground">Saved Addresses</h2>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
          <Plus className="h-4 w-4 mr-2" />
          Add Address
        </Button>
      </div>

      {addresses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {addresses.map((address) => (
            <div
              key={address.id}
              className="bg-card border border-border p-6 relative"
            >
              {address.isDefault && (
                <span className="absolute top-4 right-4 text-xs bg-accent/20 text-accent px-2 py-1 tracking-wider uppercase">
                  Default
                </span>
              )}

              <h3 className="font-medium text-foreground mb-4">{address.name}</h3>
              
              <div className="space-y-1 text-sm text-muted-foreground">
                <p className="text-foreground">{address.recipient}</p>
                <p>{address.phone}</p>
                <p>{address.address}</p>
                <p>{address.city}, {address.province} {address.postalCode}</p>
              </div>

              <div className="flex items-center gap-4 mt-6 pt-4 border-t border-border">
                <button className="text-sm text-foreground hover:text-muted-foreground transition-colors flex items-center gap-1">
                  <Edit2 className="h-3 w-3" />
                  Edit
                </button>
                {!address.isDefault && (
                  <>
                    <button
                      onClick={() => setDefaultAddress(address.id)}
                      className="text-sm text-foreground hover:text-muted-foreground transition-colors"
                    >
                      Set as Default
                    </button>
                    <button
                      onClick={() => deleteAddress(address.id)}
                      className="text-sm text-destructive hover:text-destructive/80 transition-colors flex items-center gap-1"
                    >
                      <Trash2 className="h-3 w-3" />
                      Delete
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-card border border-border p-12 text-center">
          <MapPin className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
          <h3 className="text-lg font-medium text-foreground mb-2">No addresses saved</h3>
          <p className="text-muted-foreground mb-6">
            Add a shipping address to make checkout faster.
          </p>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Plus className="h-4 w-4 mr-2" />
            Add Address
          </Button>
        </div>
      )}
    </div>
  )
}
