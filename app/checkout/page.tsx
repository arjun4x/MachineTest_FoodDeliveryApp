'use client'

import { useState, useEffect } from 'react'
import { useCart } from '@/hooks/useCart'
import { useAuth } from '@/hooks/useAuth'
import { useRouter } from 'next/navigation'
import OrderPlaced from '@/components/checkout/OrderPlaced'
import CheckOutItems from '@/components/checkout/CheckOutItems'
import CheckOutTotal from '@/components/checkout/CheckOutTotal'
import CheckOutForm from '@/components/checkout/CheckOutForm'

interface DeliveryFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  zipCode: string;
  paymentMethod: string;
}


export default function Checkout() {
  const { cart, cartTotal, clearCart } = useCart()
  const { user, isAuthenticated } = useAuth()
  const router = useRouter()
  const [orderPlaced, setOrderPlaced] = useState(false)

    const onSubmit = (data: DeliveryFormData) => {
      // setFormData(data);
      if (cart.length === 0) return
    const order = {
      id: Date.now(),
      items: cart,
      total: cartTotal + 2.99,
      deliveryFee: 2.99,
      ...data,
      date: new Date().toISOString(),
    }

    // Save order to localStorage
    const orders = JSON.parse(localStorage.getItem('orders') || '[]')
    orders.push(order)
    localStorage.setItem('orders', JSON.stringify(orders))

    clearCart()
    setOrderPlaced(true)

    

  };

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login?redirect=checkout')
      return
    }
    if (cart.length === 0 && !orderPlaced) {
      router.push('/cart')
      return
    }

  }, [isAuthenticated, cart.length, router, orderPlaced])



  if (orderPlaced) return <OrderPlaced/>
  if (cart.length === 0) return null


  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Order Summary */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Order Summary</h2>
          <div className="space-y-4 mb-4">
            {cart.map((item) => (
             <CheckOutItems key={item.id}  item={item} />
            ))}
          </div>
          <CheckOutTotal cartTotal={cartTotal}/>
          
        </div>


        <CheckOutForm onSubmit={onSubmit} user={user}/>

      </div>
    </div>
  )
}




