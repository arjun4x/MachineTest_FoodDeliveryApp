'use client'
import React from 'react'
import { CartItem } from '@/types/cart'

const CheckOutItems = ({item}:{item:CartItem}) => {
  return (
   <div
         className="flex justify-between items-center border-b border-gray-200 pb-4"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-3xl">{item.emoji}</span>
                  <div>
                    <p className="font-semibold text-gray-800">{item.name}</p>
                    <p className="text-sm text-gray-600">
                      Qty: {item.quantity} × ₹{item.price.toFixed(2)}
                    </p>
                  </div>
                </div>
                <p className="font-bold text-gray-800">
                  ₹{(item.price * (item.quantity ?? 0)).toFixed(2)}
                </p>
              </div>
  )
}

export default CheckOutItems
