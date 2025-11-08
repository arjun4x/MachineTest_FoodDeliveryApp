'use client'

import { useState } from 'react'
import { menuItems, categories } from '@/data/mockData'
import { useCart } from '@/hooks/useCart'
import { CartItem } from '@/types/cart'
import CategoriesFilter from '@/components/Menu/CategoriesFilter'
import MenuList from '@/components/Menu/MenuList'

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const { addToCart } = useCart()

  const filteredItems =
    selectedCategory === 'All'
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory)

  const handleAddToCart = (item: CartItem) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      emoji: item.emoji,
    })
  }



  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Our Menu
      </h1>

      {/* Category Filter */}


     <CategoriesFilter categories={categories} setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory}/>

      <MenuList 
      filteredItems={filteredItems}
      handleAddToCart={handleAddToCart}
      />

      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">No items found in this category.</p>
        </div>
      )}
    </div>
  )
}




