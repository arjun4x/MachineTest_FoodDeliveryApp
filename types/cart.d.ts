// src/types/cart.d.ts

export interface CartItem {
  id: string | number
  name: string | number
  emoji: string 
  price: number 
  quantity?: number
}

export interface UseCartReturn {
  cart: CartItem[]
  cartTotal: number
  addToCart: (item: CartItem) => void
  removeFromCart: (id: number | string ) => void
 updateQuantity: (id: number | string, quantity: number) => void
  clearCart: () => void
    cartCount: number
  cartTotal: number
}



