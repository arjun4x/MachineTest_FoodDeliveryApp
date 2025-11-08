'use client'

import React from 'react'
import {CategoriesFilterProps} from '@/types/common'

const CategoriesFilter : React.FC<CategoriesFilterProps> = ({categories,setSelectedCategory,selectedCategory}) => {
  return (
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full transition-colors ${
              selectedCategory === category
                ? 'bg-orange-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
  )
}

export default CategoriesFilter