import { useEffect, useState } from "react";
import Coin from "../services/Coin";

export function useListCoin() {
  const [coins, setCoin] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const instance = new Coin();

  const fetchAllList = () => {
    setLoading(true);
    setError("");
    instance
      .getAll()
      .then((coins) => {
        setCoin(coins);
      })
      .catch((e) => setError(e))
      .finally(setLoading(false));
  };

  useEffect(() => {
    fetchAllList();
  }, []);

  return {
    coins,
    loading,
    error,
  };
}
