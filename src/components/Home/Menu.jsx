import React from 'react';
import MenuCard from './MenuCard';
import burger1 from '../../assets/burger1.jpg';
import burger22 from '../../assets/burger22.jpg';
import burger3 from '../../assets/burger3.jpg';
const Menu = () => {
  const addToCartHandler = (ItemNum) => {};
  return (
    <section id='menu'>
      <h1>Menu</h1>
      <div>
        <MenuCard
          ItemNum={1}
          burgerSrc={burger1}
          price={350}
          title='Double Decker'
          handler={addToCartHandler}
          delay={0.1}
        />
        <MenuCard
          ItemNum={2}
          burgerSrc={burger22}
          price={350}
          title='Veg Burger'
          handler={addToCartHandler}
          delay={0.5}
        />
        <MenuCard
          ItemNum={3}
          burgerSrc={burger3}
          price={300}
          title='Veg Crunchy Taco'
          handler={addToCartHandler}
          delay={0.9}
        />
      </div>
    </section>
  );
};

export default Menu;
