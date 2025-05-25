import { useEffect, useRef, ReactNode } from "react";

interface ModalProps {
  openModal: boolean;
  closeModal: () => void;
  children: ReactNode;
}

export default function Modal({ openModal, closeModal, children }: ModalProps) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (openModal) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [openModal]);

  return (
    <dialog ref={ref} onCancel={closeModal}>
      {children}
      <button onClick={closeModal}>Close</button>
    </dialog>
  );
}
