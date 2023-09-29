import { useContext, useEffect, useState } from "react";
import Receipt from "../services/Receipt";
import { ContextModal } from "../context/contextModal";

export function useListReceipt() {
  const [receipt, setReceipt] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [refetch, setRefetch] = useState({ status: false, whitModal: true });
  const { changeShowModal } = useContext(ContextModal);

  const instance = new Receipt();

  const fetchAllList = () => {
    setLoading(true);
    setError("");
    instance
      .getAll()
      .then((receipt) => {
        setReceipt(receipt);
      })
      .catch((e) => setError(e))
      .finally(setLoading(false));
  };

  const getRefetch = (whitModal = true) => {
    setRefetch({ status: !refetch.status, whitModal });
  };

  useEffect(() => {
    fetchAllList();
  }, []);

  useEffect(() => {
    if (refetch.status) {
      fetchAllList();
      refetch.whitModal && changeShowModal();
      getRefetch();
    }
  }, [refetch]);

  return {
    receipt,
    loading,
    error,
    getRefetch,
  };
}
