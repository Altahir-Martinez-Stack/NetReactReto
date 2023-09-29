import { useContext } from "react";
import Receipt from "../services/Receipt";
import { ContextListReceipt } from "../context/contextListReceipt";

export function useDeletedReceipt() {
  const instance = new Receipt();
  const { getRefetch } = useContext(ContextListReceipt);

  async function deleted(id) {
    var result = window.confirm("Desea eliminar el contacto?");
    if (!result) {
      return;
    }
    await instance.deleted(id);
    getRefetch(false);
  }
  return deleted;
}
