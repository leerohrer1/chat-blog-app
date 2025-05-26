import { useEffect, useRef, ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  children: ReactNode;
}

export default function Modal({ isOpen, closeModal, children }: ModalProps) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isOpen) {
      ref.current?.showModal();
    }
  }, [isOpen]);

  return (
    <dialog ref={ref} onCancel={() => {
      ref.current?.close();
      closeModal();
    }}>
      {children}
      <button onClick={closeModal}>Close</button>
    </dialog>
  );
}
