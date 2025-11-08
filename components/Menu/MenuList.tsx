'use client';

import React from 'react';
import { MenuListProps } from '@/types/common'; 

const MenuList: React.FC<MenuListProps> = ({ filteredItems, handleAddToCart }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {filteredItems.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
        >
          <div className="h-48 bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-7xl">
            {item.emoji}
          </div>
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2 text-gray-800">{item.name}</h3>
            <p className="text-gray-600 text-sm mb-4">{item.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-orange-500">
                ₹{item.price.toFixed(2)}
              </span>
              <button
                onClick={() => handleAddToCart(item)}
                className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuList;

