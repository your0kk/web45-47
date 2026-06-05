import type { ReactNode } from "react";

/**
 * Modal window component.  Renders a full screen overlay with a
 * centred dialog.  When `isOpen` is false the component returns
 * null, meaning nothing is rendered to the DOM.  Clicking on the
 * overlay or the close button triggers the `onClose` handler.
 */
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
}

export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Semi‑transparent backdrop */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
        aria-hidden={true}
      ></div>
      {/* Modal content */}
      <div className="relative z-10 w-full max-w-md rounded-md bg-white p-6 shadow-lg">
        <div className="flex items-start justify-between mb-4">
          {title && <h2 className="text-lg font-semibold">{title}</h2>}
          <button
            className="ml-4 text-gray-500 hover:text-gray-700"
            aria-label="Закрыть модальное окно"
            onClick={onClose}
          >
            ×
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}