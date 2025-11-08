'use client'
import React from 'react'
import Link from 'next/link'

const OrderPlaced = () => {
  return (
       <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="text-6xl mb-4">✅</div>
          <h1 className="text-3xl font-bold mb-4 text-gray-800">
            Order Placed Successfully!
          </h1>
          <p className="text-gray-600 mb-8">
            Thank you for your order. We will start preparing your food right away.
            You will receive a confirmation email shortly.
          </p>
          <Link
            href="/menu"
            className="inline-block bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold"
          >
            Order More
          </Link>
        </div>
      </div>
  )
}

export default OrderPlaced