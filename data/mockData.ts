// export interface FoodItem {
//   id: number 
//   name: string
//   description: string
//   price: number
//   category: string
//   emoji: string
// }
import {MenuItem} from '@/types/common'

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'Margherita Pizza',
    description: 'Classic pizza with tomato sauce, mozzarella, and basil',
    price: 12.99,
    category: 'Pizza',
    emoji: '🍕',
  },
  {
    id: 2,
    name: 'Pepperoni Pizza',
    description: 'Pizza with pepperoni and mozzarella cheese',
    price: 14.99,
    category: 'Pizza',
    emoji: '🍕',
  },
  {
    id: 3,
    name: 'BBQ Chicken Burger',
    description: 'Juicy chicken burger with BBQ sauce and veggies',
    price: 10.99,
    category: 'Burgers',
    emoji: '🍔',
  },
  {
    id: 4,
    name: 'Classic Cheeseburger',
    description: 'Beef patty with cheese, lettuce, and special sauce',
    price: 9.99,
    category: 'Burgers',
    emoji: '🍔',
  },
  {
    id: 5,
    name: 'Caesar Salad',
    description: 'Fresh romaine lettuce with Caesar dressing and croutons',
    price: 8.99,
    category: 'Salads',
    emoji: '🥗',
  },
  {
    id: 6,
    name: 'Greek Salad',
    description: 'Mixed greens with feta, olives, and olive oil dressing',
    price: 9.99,
    category: 'Salads',
    emoji: '🥗',
  },
  {
    id: 7,
    name: 'Chicken Pad Thai',
    description: 'Stir-fried noodles with chicken, peanuts, and vegetables',
    price: 13.99,
    category: 'Asian',
    emoji: '🍜',
  },
  {
    id: 8,
    name: 'Beef Tacos',
    description: 'Three soft tacos with seasoned beef and toppings',
    price: 11.99,
    category: 'Mexican',
    emoji: '🌮',
  },
  {
    id: 9,
    name: 'Chicken Burrito',
    description: 'Large burrito with chicken, rice, beans, and cheese',
    price: 12.99,
    category: 'Mexican',
    emoji: '🌯',
  },
  {
    id: 10,
    name: 'Sushi Platter',
    description: 'Assorted sushi rolls with soy sauce and wasabi',
    price: 18.99,
    category: 'Asian',
    emoji: '🍣',
  },
  {
    id: 11,
    name: 'Fish & Chips',
    description: 'Battered fish with crispy fries and tartar sauce',
    price: 14.99,
    category: 'Seafood',
    emoji: '🐟',
  },
  {
    id: 12,
    name: 'Grilled Salmon',
    description: 'Fresh salmon with vegetables and lemon butter sauce',
    price: 16.99,
    category: 'Seafood',
    emoji: '🐟',
  },
  {
    id: 13,
    name: 'Chocolate Cake',
    description: 'Rich chocolate cake with chocolate frosting',
    price: 6.99,
    category: 'Desserts',
    emoji: '🍰',
  },
  {
    id: 14,
    name: 'Ice Cream Sundae',
    description: 'Vanilla ice cream with hot fudge and whipped cream',
    price: 5.99,
    category: 'Desserts',
    emoji: '🍨',
  },
  {
    id: 15,
    name: 'French Fries',
    description: 'Crispy golden fries with ketchup',
    price: 4.99,
    category: 'Sides',
    emoji: '🍟',
  },
  {
    id: 16,
    name: 'Onion Rings',
    description: 'Beer-battered onion rings with ranch dip',
    price: 5.99,
    category: 'Sides',
    emoji: '🧅',
  },
]

export const featuredItems = menuItems.slice(0, 6)

export const categories = [
  'All',
  'Pizza',
  'Burgers',
  'Salads',
  'Asian',
  'Mexican',
  'Seafood',
  'Desserts',
  'Sides',
]




