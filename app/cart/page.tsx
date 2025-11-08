"use client";

import { useCart } from "@/hooks/useCart";
import { useRouter } from "next/navigation";
import EmptyCart from "@/components/cartitems/EmptyCart";
import CartItems from "@/components/cartitems/CartItems";
import CartTotal from "@/components/cartitems/CartTotal";
import CartButtons from "@/components/cartitems/CartButtons";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, cartTotal, clearCart } =useCart();
  const router = useRouter();

  const handleCheckout = () => {
    if (cart.length > 0) {
      router.push("/checkout");
    }
  };

  if (cart.length === 0) return <EmptyCart />;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Your Cart</h1>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        {cart.map((item) => (
          <>
            <CartItems
              item={item}
              updateQuantity={(id, qty) => updateQuantity(Number(id), qty)}
              removeFromCart={(id) => removeFromCart(Number(id))}
            />
          </>
        ))}
      </div>

      <CartTotal cartTotal={cartTotal} />
      <CartButtons clearCart={clearCart} handleCheckout={handleCheckout} />
    </div>
  );
}
