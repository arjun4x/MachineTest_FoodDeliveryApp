
export interface User {
  name: string
  email: string
}

export interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => boolean
  register: (name: string, email: string, password: string) => boolean
  logout: () => void
  isAuthenticated: boolean
}

export interface DeliveryFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  zipCode: string;
  paymentMethod: string;
}


export interface DeliveryFormProps {
  onSubmit: (data: any) => void; // you can replace `any` with a specific data type later
  user: User | null;
}

export interface CategoriesFilterProps {
  categories: string[]; // or a more specific type if categories are objects
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}


export interface MenuItem {
  id: number ;
  emoji: string;
  name: string;
  description: string;
   category: string,
  price: number;
}



// Define props for the component
export interface MenuListProps {
  filteredItems: MenuItem[];
  handleAddToCart: (item: MenuItem) => void;
}
