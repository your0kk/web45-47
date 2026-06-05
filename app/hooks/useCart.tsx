import {
  createContext,
  useContext,
  useState,
  useMemo,
  ReactNode
} from "react";
import type { CartItem, MenuItem } from "@/types";

/**
 * The value stored in the CartContext.  It holds the current
 * collection of cart items along with derived totals and various
 * mutators for manipulating the cart.
 */
interface CartContextValue {
  items: CartItem[];
  totalAmount: number;
  totalCount: number;
  addItem: (item: MenuItem) => void;
  updateQuantity: (menuItemId: number, quantity: number) => void;
  removeItem: (menuItemId: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

interface ProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: ProviderProps) {
  const [items, setItems] = useState<CartItem[]>([]);

  // Compute the total amount due and total number of items using
  // useMemo to avoid recalculations on every render.
  const { totalAmount, totalCount } = useMemo(() => {
    let amount = 0;
    let count = 0;
    for (const item of items) {
      amount += item.menuItem.price * item.quantity;
      count += item.quantity;
    }
    return { totalAmount: amount, totalCount: count };
  }, [items]);

  const addItem = (menuItem: MenuItem) => {
    setItems((prev) => {
      const existing = prev.find((ci) => ci.menuItem.id === menuItem.id);
      if (existing) {
        return prev.map((ci) =>
          ci.menuItem.id === menuItem.id
            ? { ...ci, quantity: ci.quantity + 1 }
            : ci
        );
      }
      return [...prev, { menuItem, quantity: 1 }];
    });
  };

  const updateQuantity = (menuItemId: number, quantity: number) => {
    setItems((prev) => {
      // remove items with quantity <= 0
      return prev
        .map((ci) =>
          ci.menuItem.id === menuItemId ? { ...ci, quantity } : ci
        )
        .filter((ci) => ci.quantity > 0);
    });
  };

  const removeItem = (menuItemId: number) => {
    setItems((prev) => prev.filter((ci) => ci.menuItem.id !== menuItemId));
  };

  const clearCart = () => setItems([]);

  const value: CartContextValue = {
    items,
    totalAmount,
    totalCount,
    addItem,
    updateQuantity,
    removeItem,
    clearCart
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

/**
 * Custom hook that returns the cart context.  If used outside of the
 * provider it will throw an error, helping developers catch
 * configuration mistakes early.
 */
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}