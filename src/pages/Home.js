import { Header } from '../components/Header/Header';
import './Home.css';
import { SectionHeader } from '../components/SectionHeader/SectionHeader';
import { SectionOurCollection } from '../components/SectionOurCollection/SectionOurCollection';
import useProducts from '../hooks/useProducts';
import { SectionTestimonials } from '../components/SectionTestimonials/SectionTestimonials';
import { Newsletter } from '../components/Newsletter/Newsletter';
import { Footer } from '../components/Footer/Footer';

function Home() {
  const { products } = useProducts(8);

  return (
    <div className='home'>
      <Header />
      <main id='home-main'>
        <SectionHeader />
        <SectionOurCollection products={products} />
        <SectionTestimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
