import React from 'react';
//import '../../styles/home.scss';
import { motion } from 'framer-motion';
import Menu from './Menu';
const Home = () => {
  return (
    <>
      <section className='home'>
        <div>
          <motion.h1
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 20,
            }}
          >
            Burger King
          </motion.h1>
          <motion.p
            initial={{ x: '-100%', opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              delay: 0.3,
            }}
          >
            Have it your way!
          </motion.p>
        </div>
        <a href='#menu'>Explore Menu</a>
      </section>
      <Menu />
    </>
  );
};

export default Home;
