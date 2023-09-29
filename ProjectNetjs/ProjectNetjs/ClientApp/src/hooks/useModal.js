import { useState } from "react";

export function useModal() {
  const [update, setUpdate] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const changeShowModal = () => setShowModal(!showModal);

  const sendReceiptEdit = (receipt) => {
    changeShowModal();
    setUpdate(receipt);
  };

  const clearReceiptEdit = () => {
    setUpdate(null);
    changeShowModal();
  };

  return {
    showModal,
    update,
    changeShowModal,
    sendReceiptEdit,
    clearReceiptEdit,
  };
}
