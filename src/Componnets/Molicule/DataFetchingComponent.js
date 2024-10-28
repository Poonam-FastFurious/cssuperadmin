import { useState, useEffect } from "react";

const useFetchData = (endpoint, dataPath) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(endpoint);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        const dataToSet = dataPath
          .split(".")
          .reduce((acc, key) => acc[key], result);
        setData(dataToSet);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint, dataPath]);

  return { data, loading, error };
};

export default useFetchData;
