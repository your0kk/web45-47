import { Link } from "react-router";
import { useCart } from "@/hooks/useCart";
import type { MetaDescriptor } from "@react-router/node";
import restaurantInfo from "@/data/restaurant";
import CartItem from "@/components/CartItem";

export function meta(): MetaDescriptor {
  return [{ title: `Корзина | ${restaurantInfo.name}` }];
}

export default function CartPage() {
  const { items, totalAmount, updateQuantity } = useCart();
  if (items.length === 0) {
    return (
      <div className="text-center space-y-4">
        <h1 className="text-2xl font-bold">Корзина пуста</h1>
        <p className="text-gray-600">
          Добавьте блюда из <Link to="/menu" className="text-green-600 underline">меню</Link>.
        </p>
      </div>
    );
  }
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Ваш заказ</h1>
      <div className="space-y-4">
        {items.map((item) => (
          <CartItem
            key={item.menuItem.id}
            item={item}
            onUpdateQuantity={updateQuantity}
          />
        ))}
      </div>
      <div className="flex items-center justify-between border-t pt-4">
          <span className="font-bold text-lg">Итого:</span>
          <span className="font-bold text-lg">{totalAmount.toFixed(2)} ₽</span>
      </div>
      <div className="text-right">
        <Link
          to="/checkout"
          className="inline-block bg-green-600 text-white py-2 px-6 rounded-md font-medium hover:bg-green-700 transition-colors"
        >
          Оформить заказ
        </Link>
      </div>
    </div>
  );
}