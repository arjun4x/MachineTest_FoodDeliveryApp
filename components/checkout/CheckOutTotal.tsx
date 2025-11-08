'use client'
import React from 'react'

const CheckOutTotal = ({cartTotal}:{cartTotal : number}) => {
  return (
   <div className="border-t border-gray-200 pt-4 space-y-2">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal:</span>
              <span>₹{cartTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Delivery Fee:</span>
              <span>₹2.99</span>
            </div>
            <div className="flex justify-between text-xl font-bold text-gray-800 pt-2">
              <span>Total:</span>
              <span className="text-orange-500">
                ₹{(cartTotal + 2.99).toFixed(2)}
              </span>
            </div>
          </div>
  )
}

export default CheckOutTotal