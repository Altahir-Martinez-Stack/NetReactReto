import { createContext } from "react";
import { useListReceipt } from "../hooks/useListReceipt";

export const ContextListReceipt = createContext({
  receipt: null,
  loading: true,
  error: false,
  getRefetch: () => {},
});

const ProviderListReceipt = ({ children }) => {
  const listReceipt = useListReceipt();
  return (
    <ContextListReceipt.Provider value={listReceipt}>
      {children}
    </ContextListReceipt.Provider>
  );
};

export default ProviderListReceipt;
