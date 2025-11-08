'use client'
import React from 'react'
import Link from 'next/link'

const EmptyCart = () => {
  return (
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="text-6xl mb-4">🛒</div>
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Your Cart is Empty</h1>
        <p className="text-gray-600 mb-8">
          Add some delicious items from our menu to get started!
        </p>
        <Link
          href="/menu"
          className="inline-block bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold"
        >
          Browse Menu
        </Link>
      </div>
  )
}

export default EmptyCart