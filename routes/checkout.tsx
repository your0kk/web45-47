import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useCart } from "@/hooks/useCart";
import type { MetaDescriptor } from "@react-router/node";
import restaurantInfo from "@/data/restaurant";
import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";

export function meta(): MetaDescriptor {
  return [{ title: `Оформление заказа | ${restaurantInfo.name}` }];
}

export default function CheckoutPage() {
  const { items, totalAmount, clearCart } = useCart();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<"card" | "cash">("card");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  if (items.length === 0) {
    return (
      <div className="text-center space-y-4">
        <h1 className="text-2xl font-bold">Корзина пуста</h1>
        <p className="text-gray-600">
          Сначала добавьте блюда в заказ из <Link to="/menu" className="text-green-600 underline">меню</Link>.
        </p>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      alert("Пожалуйста, заполните имя и телефон.");
      return;
    }
    setIsProcessing(true);
    // simulate asynchronous payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsModalOpen(true);
    }, 2000);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    clearCart();
    navigate("/");
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Оформление заказа</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <div>
          <label className="block text-sm font-medium text-gray-700">Имя</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Телефон</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Комментарий к заказу</label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            rows={3}
          ></textarea>
        </div>
        <div>
          <span className="block text-sm font-medium text-gray-700">Способ оплаты</span>
          <div className="mt-1 flex space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="payment"
                value="card"
                checked={paymentMethod === "card"}
                onChange={() => setPaymentMethod("card")}
                className="mr-2"
              />
              Картой
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="payment"
                value="cash"
                checked={paymentMethod === "cash"}
                onChange={() => setPaymentMethod("cash")}
                className="mr-2"
              />
              Наличными
            </label>
          </div>
        </div>
        <div className="border-t pt-4 space-y-2">
          {items.map((ci) => (
            <div key={ci.menuItem.id} className="flex justify-between text-sm">
              <span>
                {ci.menuItem.name} × {ci.quantity}
              </span>
              <span>
                {(ci.menuItem.price * ci.quantity).toFixed(2)} ₽
              </span>
            </div>
          ))}
          <div className="flex justify-between font-bold">
            <span>Итого</span>
            <span>{totalAmount.toFixed(2)} ₽</span>
          </div>
        </div>
        <Button type="submit" disabled={isProcessing}>
          {isProcessing ? "Обработка платежа..." : "Подтвердить заказ"}
        </Button>
      </form>
      {/* Confirmation modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title="Спасибо за заказ!"
      >
        <p className="mb-4">
          {name}, ваш заказ на сумму {totalAmount.toFixed(2)} ₽ успешно оформлен. Мы свяжемся с вами по номеру {phone}.
        </p>
        <Button onClick={handleCloseModal}>Закрыть</Button>
      </Modal>
    </div>
  );
}