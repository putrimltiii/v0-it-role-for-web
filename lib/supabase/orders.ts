import { createClient } from './client'

export interface Order {
  id: string
  user_email: string
  order_number: string
  date: string
  status: string
  total: number
  items: any[]
}

export async function fetchUserOrders(email: string): Promise<Order[]> {
  try {
    const supabase = createClient()
    const { data, error } = await supabase
      .from('orders')
      .select('*')
      .eq('user_email', email)
      .order('date', { ascending: false })

    if (error) {
      console.error('Error fetching orders:', error)
      return []
    }

    return data || []
  } catch (error) {
    console.error('Error in fetchUserOrders:', error)
    return []
  }
}

export async function fetchOrderById(orderId: string): Promise<Order | null> {
  try {
    const supabase = createClient()
    const { data, error } = await supabase
      .from('orders')
      .select('*')
      .eq('id', orderId)
      .single()

    if (error) {
      console.error('Error fetching order:', error)
      return null
    }

    return data
  } catch (error) {
    console.error('Error in fetchOrderById:', error)
    return null
  }
}

export async function createOrder(
  userEmail: string,
  orderNumber: string,
  items: any[],
  total: number
): Promise<Order | null> {
  try {
    const supabase = createClient()
    const { data, error } = await supabase
      .from('orders')
      .insert({
        user_email: userEmail,
        order_number: orderNumber,
        items: items,
        total: total,
        status: 'Processing',
        date: new Date().toISOString(),
      })
      .select()
      .single()

    if (error) {
      console.error('Error creating order:', error)
      return null
    }

    return data
  } catch (error) {
    console.error('Error in createOrder:', error)
    return null
  }
}
