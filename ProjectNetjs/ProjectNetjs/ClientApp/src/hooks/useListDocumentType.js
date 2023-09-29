import { useEffect, useState } from "react";
import DocumentType from "../services/DocumentType";

export function useListDocumentType() {
  const [documentTypes, setDocumentTypes] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const instance = new DocumentType();

  const fetchAllList = () => {
    setLoading(true);
    setError("");
    instance
      .getAll()
      .then((documentTypes) => {
        setDocumentTypes(documentTypes);
      })
      .catch((e) => setError(e))
      .finally(setLoading(false));
  };

  useEffect(() => {
    fetchAllList();
  }, []);

  return {
    documentTypes,
    loading,
    error,
  };
}
