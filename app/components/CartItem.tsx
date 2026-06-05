import type { CartItem as CartItemType } from "@/types";
import Button from "@/components/ui/Button";

interface Props {
  item: CartItemType;
  onUpdateQuantity: (menuItemId: number, quantity: number) => void;
}

/**
 * Component representing a single cart line item.  Displays a small
 * thumbnail, title, price and allows the user to increment or
 * decrement the quantity of this item.  Total cost for the item is
 * calculated as price multiplied by quantity.
 */
export default function CartItem({ item, onUpdateQuantity }: Props) {
  const { menuItem, quantity } = item;
  const handleDecrease = () => onUpdateQuantity(menuItem.id, quantity - 1);
  const handleIncrease = () => onUpdateQuantity(menuItem.id, quantity + 1);
  return (
    <div className="flex items-center justify-between rounded-md bg-white p-4 shadow-sm">
      <div className="flex items-center space-x-4">
        <img
          src={menuItem.image}
          alt={menuItem.name}
          className="h-16 w-16 rounded object-cover"
        />
        <div>
          <p className="font-semibold">{menuItem.name}</p>
          <p className="text-gray-500 text-sm">
            {menuItem.price.toFixed(2)} ₽ × {quantity}
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <Button variant="secondary" onClick={handleDecrease} disabled={quantity <= 1}>
          −
        </Button>
        <span className="min-w-[20px] text-center">{quantity}</span>
        <Button variant="secondary" onClick={handleIncrease}>+
        </Button>
      </div>
    </div>
  );
}