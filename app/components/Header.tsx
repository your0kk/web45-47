import { Link, NavLink } from "react-router";
import { useCart } from "@/hooks/useCart";

/**
 * Top navigation bar.  Provides links to the main pages of the
 * application and displays a small badge with the number of items in
 * the cart.  NavLink is used instead of Link for pages where the
 * active state should be highlighted.
 */
export default function Header() {
  const { totalCount } = useCart();
  return (
    <header className="bg-white shadow-sm text-gray-800">
      <nav className="container mx-auto flex items-center justify-between px-4 py-3 max-w-4xl">
        <Link to="/" className="text-2xl font-bold text-green-600">
          Вкусно и точка
        </Link>
        <ul className="flex space-x-4">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `hover:text-green-600 ${isActive ? "text-green-600 font-semibold" : ""}`
              }
            >
              Главная
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/menu"
              className={({ isActive }) =>
                `hover:text-green-600 ${isActive ? "text-green-600 font-semibold" : ""}`
              }
            >
              Меню
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `relative hover:text-green-600 ${isActive ? "text-green-600 font-semibold" : ""}`
              }
            >
              Корзина
              {totalCount > 0 && (
                <span className="absolute -top-2 -right-3 inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-green-600 px-1 text-xs font-bold text-white">
                  {totalCount}
                </span>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `hover:text-green-600 ${isActive ? "text-green-600 font-semibold" : ""}`
              }
            >
              О нас
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}