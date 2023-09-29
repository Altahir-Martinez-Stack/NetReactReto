import { createContext } from "react";
import { useListReceipt } from "../hooks/useListReceipt";
import { useModal } from "../hooks/useModal";

export const ContextModal = createContext({
  showModal: false,
  update: null,
  changeShowModal: () => {},
  sendReceiptEdit: (receipt) => {},
  clearReceiptEdit: () => {},
});

const ProviderModal = ({ children }) => {
  const modal = useModal();
  return (
    <ContextModal.Provider value={modal}>{children}</ContextModal.Provider>
  );
};

export default ProviderModal;
