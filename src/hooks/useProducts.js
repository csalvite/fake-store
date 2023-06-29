import { useEffect, useState } from 'react';

const useProducts = (limit) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      const url = `https://fakestoreapi.com/products${
        limit ? '?limit=' + limit : ''
      }`;

      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const data = await response.json();

        if (response.ok) {
          setProducts(data);
        }

        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };

    getProducts();
  }, [limit, setLoading]);

  return { products, loading, error };
};

export default useProducts;
