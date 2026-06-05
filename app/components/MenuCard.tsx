import type { MenuItem } from "@/types";
import Button from "@/components/ui/Button";

interface Props {
  item: MenuItem;
  onAddToCart: (item: MenuItem) => void;
}

/**
 * Card component used on the menu page to display a single dish or
 * drink.  Includes an image, name, description, price and an
 * interactive button to add the item to the shopping cart.
 */
export default function MenuCard({ item, onAddToCart }: Props) {
  return (
    <div className="rounded-lg bg-white shadow transition-shadow hover:shadow-md overflow-hidden">
      <img
        src={item.image}
        alt={item.name}
        className="h-40 w-full object-cover"
      />
      <div className="p-4 flex flex-col space-y-2">
        <h3 className="text-lg font-semibold">{item.name}</h3>
        <p className="text-gray-500 text-sm">{item.description}</p>
        <div className="flex items-center justify-between">
          <span className="font-bold">{item.price.toFixed(2)} ₽</span>
          <Button onClick={() => onAddToCart(item)}>В корзину</Button>
        </div>
      </div>
    </div>
  );
}