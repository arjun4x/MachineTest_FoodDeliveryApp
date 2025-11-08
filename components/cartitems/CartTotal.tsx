'use client'
import React from 'react'

const CartTotal = ({cartTotal}:{cartTotal:number}) => {
  return (
     <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-xl font-semibold text-gray-800">Subtotal:</span>
          <span className="text-xl font-bold text-gray-800">
            ₹{cartTotal.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-600">Delivery Fee:</span>
          <span className="text-gray-600">₹2.99</span>
        </div>
        <div className="flex justify-between items-center border-t border-gray-200 pt-4">
          <span className="text-2xl font-bold text-gray-800">Total:</span>
          <span className="text-2xl font-bold text-orange-500">
            ₹{(cartTotal + 2.99).toFixed(2)}
          </span>
        </div>
      </div>
  )
}

export default CartTotal
