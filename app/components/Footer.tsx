import restaurantInfo from "@/data/restaurant";

/**
 * Sticky footer component displaying contact and address information
 * about the restaurant.  It appears at the bottom of every page via
 * the root layout.
 */
export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 py-6 mt-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <p className="text-lg font-semibold">{restaurantInfo.name}</p>
        <p className="mt-1">{restaurantInfo.description}</p>
        <p className="mt-2">
          <strong>Адрес:</strong> {restaurantInfo.address}
        </p>
        <p>
          <strong>Телефон:</strong> {restaurantInfo.phone}
        </p>
        <p>
          <strong>Время работы:</strong> {restaurantInfo.hours}
        </p>
      </div>
    </footer>
  );
}