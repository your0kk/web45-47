import { Link } from "react-router";
import restaurantInfo from "@/data/restaurant";

export function meta() {
  return [{ title: `Главная | ${restaurantInfo.name}` }];
}

export default function HomePage() {
  return (
    <div className="text-center space-y-6">
      <h1 className="text-3xl font-bold">{restaurantInfo.name}</h1>
      <p className="mx-auto max-w-xl text-gray-600">
        {restaurantInfo.description}
      </p>
      <Link
        to="/menu"
        className="inline-block bg-green-600 text-white py-2 px-6 rounded-md font-medium hover:bg-green-700 transition-colors"
      >
        Перейти к меню
      </Link>
    </div>
  );
}