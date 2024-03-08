import { useEffect, useState } from "react";

// Definerer en brugerdefineret hook kaldet useFetch, som tager en URL som input
export const useFetch = (url) => {

  // Definerer tre tilstande: data, loading og error ved hjælp af useState-hooket
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          // Opdaterer tilstanden for loading, data og fejl efter vellykket forespørgsel
          setLoading(false);
          setData(data);
          setError(null);
        })
        .catch((err) => {
          // fanger netværk / forbindelsesfejl
          setLoading(false);
          setError(err);
        });
  }, [url]);
  
  // Returnerer et objekt med data, loading og fejl, som kan bruges i komponenten, der kalder denne hook
  return { data, loading, error };
};
