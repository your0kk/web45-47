import type { MenuItem } from "@/types";

// The menu of available dishes and drinks for the restaurant.  Each
// entry references an image asset via the new URL(...) construction.
// When built with Vite this ensures the correct URL is emitted in
// the final bundle and that caching hashes are applied.

const menu: MenuItem[] = [
  {
    id: 1,
    name: "Паста с овощами",
    description: "Сытная паста с обжаренными овощами и ароматным соусом.",
    price: 14.5,
    image: new URL("../assets/pasta.png", import.meta.url).href,
    category: "Основные блюда"
  },
  {
    id: 2,
    name: "Салат свежий",
    description: "Легкий салат из свежих овощей и зелени под фирменной заправкой.",
    price: 9.0,
    image: new URL("../assets/salad.png", import.meta.url).href,
    category: "Салаты"
  },
  {
    id: 3,
    name: "Кофе капучино",
    description: "Нежный капучино с молочной пеной и карамельным оттенком.",
    price: 4.5,
    image: new URL("../assets/coffee.png", import.meta.url).href,
    category: "Напитки"
  },
  {
    id: 4,
    name: "Шоколадный торт",
    description: "Домашний шоколадный торт с ягодами, украшенный глазурью.",
    price: 6.5,
    image: new URL("../assets/cake.png", import.meta.url).href,
    category: "Десерты"
  }
];

export default menu;