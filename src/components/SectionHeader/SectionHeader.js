import { Link } from 'react-router-dom';
import './SectionHeader.css';
import { AnimatePresence, motion } from 'framer-motion';

export const SectionHeader = () => {
  return (
    <section id='principal-section'>
      <AnimatePresence>
        <div className='title-section'>
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 'calc(100vw - 100vw)' }}
            transition={{ delay: 0.8 }}
          >
            <div className='title-container'>
              <h1>Find your dream snekers</h1>
              <p>
                Find your shoes from our various collections. Here shoes are
                endless and profit is also endless.
              </p>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className='store-button'
              >
                <Link to='/products'>Explore more</Link>
              </motion.button>
              {/* <button className='store-button'>Explore more</button> */}
            </div>
          </motion.div>
          <motion.div
            initial={{ x: '-100vw' }}
            animate={{ x: 'calc(100vw - 100vw)' }}
            transition={{ delay: 1.2 }}
          >
            <div className='image-title'>
              <img src='/resources/images/imagen1.png' alt='imageLogo' />
              <p id='title-text' className='absolute-text store-button'>
                Nike air max
              </p>
              <p id='offer-discount' className='absolute-text store-button'>
                50% <span>Discount</span>
              </p>
            </div>
          </motion.div>
        </div>

        <div className='store-info'>
          <ul>
            <li>
              <i className='fa-solid fa-shield-halved store-button'></i>
              <div>
                <p>Secure Payment</p>
                <p>Secure on order</p>
              </div>
            </li>
            <li>
              <i className='fa-solid fa-headset store-button'></i>
              <div>
                <p>24/7 support</p>
                <p>Contact us 24hrs a day</p>
              </div>
            </li>
            <li>
              <i className='fa-solid fa-truck-fast store-button'></i>
              <div>
                <p>Fast Delivery</p>
                <p>Fast delivery on order</p>
              </div>
            </li>
          </ul>
        </div>
      </AnimatePresence>
    </section>
  );
};
