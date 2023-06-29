import { motion } from 'framer-motion';
import './Newsletter.css';

export const Newsletter = () => {
  return (
    <section id='newsletter'>
      <h2>Subscribe to our newsletter</h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        whileHover={{ scaleX: 1.05 }}
        exit={{ scaleX: 1.05 }}
        className='subscribe-input'
      >
        <motion.input
          whileFocus={{ scaleX: 1 }}
          type='text'
          placeholder='Enter your email'
        />
        <button className='store-button'>SUBSCRIBE</button>
      </motion.div>
    </section>
  );
};
