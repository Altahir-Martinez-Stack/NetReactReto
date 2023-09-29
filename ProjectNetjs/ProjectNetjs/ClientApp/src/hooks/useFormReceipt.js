import { useContext, useEffect, useState } from "react";
import { useCreatedReceipt } from "./useCreatedReceipt";
import { useUpdatedReceipt } from "./useUpdatedReceipt";
import { ContextModal } from "../context/contextModal";

const initialFormReceipt = {
  id: 0,
  idCoins: "",
  amount: "",
  title: "",
  description: "",
  address: "",
  fullName: "",
  idDocumentType: "",
  idUsers: 1,
};

export function useFormReceipt() {
  const { update, clearReceiptEdit } = useContext(ContextModal);
  const [receiptForm, setReceiptForm] = useState(initialFormReceipt);
  const created = useCreatedReceipt();
  const updated = useUpdatedReceipt();

  const updateData = (e) => {
    console.log(e.target.name + " : " + e.target.value);
    setReceiptForm({
      ...receiptForm,
      [e.target.name]: e.target.value,
    });
  };

  const sendData = () => {
    if (receiptForm.id === 0) {
      created(receiptForm);
    } else {
      updated(receiptForm);
    }
    setReceiptForm(initialFormReceipt);
  };

  useEffect(() => {
    if (update != null) {
      setReceiptForm(update);
    } else {
      setReceiptForm(initialFormReceipt);
    }
  }, [update]);

  const hideModel = () => {
    clearReceiptEdit();
  };

  return {
    receiptForm,
    updateData,
    sendData,
    hideModel,
  };
}
