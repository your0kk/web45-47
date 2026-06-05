import type { RestaurantInfo } from "@/types";

// Basic information about our fictional restaurant.  This data feeds
// the home, about and footer components.

const restaurantInfo: RestaurantInfo = {
  name: "Ресторан \"Вкусно и точка\"",
  description:
    "Добро пожаловать в наш уютный ресторан! Мы готовим блюда по домашним рецептам, используя только свежие ингредиенты.",
  address: "ул. Пушкина, д. 15, г. Новосибирск",
  phone: "+7 (383) 123‑45‑67",
  hours: "Пн–Вс: 9:00–22:00"
};

export default restaurantInfo;