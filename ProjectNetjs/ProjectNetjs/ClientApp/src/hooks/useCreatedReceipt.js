import { useContext } from "react";
import Receipt from "../services/Receipt";
import { ContextListReceipt } from "../context/contextListReceipt";

export function useCreatedReceipt() {
  const instance = new Receipt();
  const { getRefetch } = useContext(ContextListReceipt);

  async function created(receipt) {
    const response = await instance.created(receipt);
    if (response.ok) {
      getRefetch();
    }
  }
  return created;
}
