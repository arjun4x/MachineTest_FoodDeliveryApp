import React from 'react'
import Link from 'next/link'

const BannerSection = () => {
  return (
      <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Delicious Food at Your Doorstep
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-orange-100">
            Order from the best restaurants in town and get it delivered fresh
          </p>
          <Link
            href="/menu"
            className="inline-block bg-white text-orange-500 px-8 py-3 rounded-full font-semibold text-lg hover:bg-orange-50 transition-colors shadow-lg"
          >
            Order Now
          </Link>
        </div>
      </section>
  )
}

export default BannerSection