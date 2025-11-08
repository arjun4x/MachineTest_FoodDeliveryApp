'use client'

import React from 'react'
import Link from 'next/link'

interface CartButtonsProps {
  clearCart: () => void
  handleCheckout: () => void
}


const CartButtons: React.FC<CartButtonsProps> = ({clearCart,handleCheckout}) => {
  return (
          <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={clearCart}
          className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors font-semibold"
        >
          Clear Cart
        </button>
        <Link
          href="/menu"
          className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors font-semibold text-center"
        >
          Continue Shopping
        </Link>
        <button
          onClick={handleCheckout}
          className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold flex-1"
        >
          Proceed to Checkout
        </button>
      </div>
  )
}

export default CartButtons