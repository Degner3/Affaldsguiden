import { useEffect, useState } from "react";

// https://github.com/iamshaunjp/Complete-React-Tutorial/blob/lesson-20/dojo-blog/src/useFetch.js
export const useFetch = (url) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setLoading(false);
          setData(data);
          setError(null);
        })
        .catch((err) => {
          // fanger netværk / forbindelsesfejl
          setLoading(false);
          setError(err);
        });
    }, 1000);
  }, [url]);

  return { data, loading, error };
};
