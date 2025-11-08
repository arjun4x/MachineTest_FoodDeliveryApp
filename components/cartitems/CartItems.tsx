'use client'

import React from 'react'
import { UseCartReturn , CartItem} from '@/types/cart'

type CartItemsProps = {
  item: CartItem
  updateQuantity: UseCartReturn['updateQuantity']
  removeFromCart: UseCartReturn['removeFromCart']
}

const CartItems : React.FC<CartItemsProps>  = ({item,updateQuantity,removeFromCart})  => {
  return (
    <div
    key={item.id}
    className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-4 border-b border-gray-200 last:border-b-0"
          >
            <div className="flex items-center space-x-4 mb-4 sm:mb-0 flex-1">
              <div className="text-5xl">{item.emoji}</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {item.name}
                </h3>
                <p className="text-orange-500 font-bold">
                  ₹{item.price.toFixed(2)} each
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4 w-full sm:w-auto">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => updateQuantity(item.id, (item.quantity ?? 0) - 1)}
                  className="bg-gray-200 text-gray-700 w-8 h-8 rounded-full hover:bg-gray-300 transition-colors"
                >
                  −
                </button>
                <span className="text-lg font-semibold w-8 text-center">
                  {item.quantity}
                </span>
                <button
                  onClick={() => updateQuantity(item.id, (item.quantity ?? 0)  + 1)}
                  className="bg-gray-200 text-gray-700 w-8 h-8 rounded-full hover:bg-gray-300 transition-colors"
                >
                  +
                </button>
              </div>
              <div className="text-lg font-bold text-gray-800 min-w-[100px] text-right">
                ₹{(item.price * (item.quantity ?? 0)  ).toFixed(2)}
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700 transition-colors"
              >
                Remove
              </button>
            </div>
    </div>
  )
}

export default CartItems