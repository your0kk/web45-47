// Global TypeScript interfaces used throughout the restaurant
// application.  These definitions describe the shape of the data
// flowing through the application (menu items, cart items,
// restaurant information and orders).

/**
 * An individual item from the restaurant menu.  Each item has a
 * unique identifier, a human‑readable name, a textual description,
 * a price in arbitrary currency units, a URL to its image asset and
 * a category.  Categories are free‑form strings such as
 * "Закуски", "Супы", "Десерты" etc.
 */
export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

/**
 * A single entry in the shopping cart.  It links back to the
 * associated menu item via menuItem and stores a quantity.
 */
export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
}

/**
 * General information about the restaurant.  This information
 * populates the home and about pages and the footer.  All fields
 * are simple strings.
 */
export interface RestaurantInfo {
  name: string;
  description: string;
  address: string;
  phone: string;
  hours: string;
}

/**
 * Structure of a completed order.  It contains the items purchased
 * along with customer details and the computed totals.  This type
 * isn't strictly required for the simple client side demo but can
 * serve as a basis for further expansion.
 */
export interface OrderInfo {
  items: CartItem[];
  totalAmount: number;
  totalCount: number;
  customerName: string;
  customerPhone: string;
  comment?: string;
  paymentMethod: "card" | "cash";
}