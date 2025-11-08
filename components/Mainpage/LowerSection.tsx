import React from 'react'

const LowerSection = () => {
  return (
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-5xl mb-4">🚚</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">
                Fast Delivery
              </h3>
              <p className="text-gray-600">
                Get your food delivered within 30 minutes
              </p>
            </div>
            <div className="p-6">
              <div className="text-5xl mb-4">🍔</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">
                Fresh Food
              </h3>
              <p className="text-gray-600">
                All meals are prepared fresh daily
              </p>
            </div>
            <div className="p-6">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">
                Best Prices
              </h3>
              <p className="text-gray-600">
                Competitive prices with great quality
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default LowerSection
