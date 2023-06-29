import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { CategoriesSlides } from '../../components/Products/CategoriesSlides';
import useProducts from '../../hooks/useProducts';

export const Products = () => {
  const { products } = useProducts();

  return (
    <div className='home'>
      <Header />

      <main>
        <CategoriesSlides />
      </main>

      <Footer />
    </div>
  );
};
