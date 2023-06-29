import { useEffect, useState } from 'react';
import './styles/style.css';

export const CategoriesSlides = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getCategories = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          'https://fakestoreapi.com/products/categories'
        );

        if (response.ok) {
          const data = await response.json();
          setCategories(data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getCategories();
  }, []);

  return (
    <section id='categories-section'>
      {loading ? (
        <div>Cargando...</div>
      ) : (
        <ul>
          {categories?.map((cat, index) => (
            <li key={index}>{cat}</li>
          ))}
        </ul>
      )}
    </section>
  );
};
