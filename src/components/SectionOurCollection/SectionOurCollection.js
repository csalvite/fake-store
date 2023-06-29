import './SectionOurCollection.css';
import { motion } from 'framer-motion';

export const SectionOurCollection = ({ products }) => {
  console.log(products);
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.2 }}
    >
      <section id='our-collection'>
        <h2>Our Collection</h2>
        <ul>
          {products?.map((product) => {
            return (
              <li>
                <div class='product-card'>
                  <img src={product.image} alt='Producto' />
                  <h3>{product.title}</h3>
                  <p>Precio: {product.price}€</p>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </motion.div>
  );
};
