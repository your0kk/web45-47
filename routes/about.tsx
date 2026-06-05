import type { MetaDescriptor } from "@react-router/node";
import restaurantInfo from "@/data/restaurant";

export function meta(): MetaDescriptor {
  return [{ title: `О ресторане | ${restaurantInfo.name}` }];
}

export default function AboutPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">О ресторане</h1>
      <p className="text-gray-600">
        Мы рады приветствовать вас в нашем заведении. {restaurantInfo.description}
      </p>
      <img
        src={new URL("../app/assets/interior.png", import.meta.url).href}
        alt="Интерьер ресторана"
        className="w-full rounded-md object-cover"
      />
      <p className="text-gray-600">
        В нашей команде работают профессиональные повара, которые готовят блюда
        по традиционным рецептам. Мы уделяем внимание каждой детали — от
        сервировки до качества обслуживания. Заходите к нам на завтрак, обед
        или ужин, и мы сделаем всё, чтобы вы остались довольны!
      </p>
    </div>
  );
}