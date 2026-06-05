import { useState } from "react";
import type { MetaDescriptor } from "@react-router/node";
import menuData from "@/data/menu";
import MenuCard from "@/components/MenuCard";
import { useCart } from "@/hooks/useCart";
import type { MenuItem } from "@/types";
import restaurantInfo from "@/data/restaurant";

export function meta(): MetaDescriptor {
  return [{ title: `Меню | ${restaurantInfo.name}` }];
}

export default function MenuPage() {
  // build array of categories plus "Все" (all)
  const categories = [
    "Все",
    ...Array.from(new Set(menuData.map((item) => item.category)))
  ];
  const [activeCategory, setActiveCategory] = useState<string>("Все");
  const { addItem, totalCount } = useCart();

  const filteredMenu =
    activeCategory === "Все"
      ? menuData
      : menuData.filter((item) => item.category === activeCategory);

  const addToCart = (item: MenuItem) => {
    addItem(item);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-baseline justify-between">
        <h1 className="text-2xl font-bold">Меню</h1>
        <span className="text-gray-500 text-sm">В корзине: {totalCount}</span>
      </div>
      {/* Category filter buttons */}
      <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3 py-1 rounded-full text-sm border transition-colors ${
                activeCategory === category
                  ? "bg-green-600 text-white border-green-600"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
              }`}
            >
              {category}
            </button>
          ))}
      </div>
      {/* Menu grid */}
      <div className="grid gap-4 sm:grid-cols-2">
        {filteredMenu.map((item) => (
          <MenuCard key={item.id} item={item} onAddToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}