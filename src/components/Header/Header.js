import { motion } from 'framer-motion';
import './Header.css';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className='header-container'>
      <Link to='/'>
        <img
          id='logoNike'
          src='/resources/images/logoNikeNegro.png'
          alt='logo'
        />
      </Link>
      <ul>
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          Products
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          Pricing
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          About
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          FAQs
        </motion.li>
      </ul>
      <motion.div
        className='cart'
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <i id='fs-cart' className='fa-solid fa-cart-shopping'></i>
      </motion.div>
    </header>
  );
};
