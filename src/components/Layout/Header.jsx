import React from 'react';

import classes from './Header.module.css';
import mealsImage from '../../assets/table-full.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Mealz</h1>
        <HeaderCartButton />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='Table full of healthy looking food!'></img>
      </div>
    </React.Fragment>
  );
};

export default Header;
