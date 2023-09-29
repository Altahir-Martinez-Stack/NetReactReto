import { useContext } from "react";
import Receipt from "../services/Receipt";
import { ContextListReceipt } from "../context/contextListReceipt";

export function useUpdatedReceipt() {
  const instance = new Receipt();
  const { getRefetch } = useContext(ContextListReceipt);

  async function updated(receipt) {
    await instance.updated(receipt);
    getRefetch();
  }
  return updated;
}
