import clsx from "clsx";
import { useEffect } from "react";

interface ModalWindowProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  className?: string;
  children: React.ReactNode;
}

export function ModalWindow({
  isOpen,
  onClose,
  title,
  className,
  children,
}: ModalWindowProps) {

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center ">
      
      {/* BACKDROP */}
      <div
        className="absolute inset-0 bg-black/94"
        onClick={onClose}
      />

      {/* MODAL */}
      <section
        className={clsx(
          `
            relative 
            bg-primaria 
            rounded-2xl 
            p-6 
            w-11/12 
            max-w-xl 
            shadow-xl 
            z-50
            max-h-[90vh]
            overflow-y-auto
            hide-scrollbar
          `,
          className
        )}
      >
        {/* HEADER */}
        <header className="flex justify-between items-center mb-4">
          {title && <h1 className="font-semibold text-sky-600 m-auto text-3xl">{title}</h1>}
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-black cursor-pointer absolute top-1 right-3"
          >
            ✕
          </button>
        </header>

        {/* CONTEÚDO */}
        {children}
      </section>
    </div>
  );
}
