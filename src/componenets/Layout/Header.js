import React from 'react';
import styles from './Header.module.css';
import mealsImage from '../../assets/meals.jpg';
import HeaderCardButton from './HeaderCartButton';

const Header = function (props) {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>React Meal Order App</h1>
        <HeaderCardButton onClick={props.onShowCart} />
      </header>
      <div className={styles['main-image']}>
        {/* CSS classes with dot notation should be used like this. */}
        <img src={mealsImage} alt="food on table" />
      </div>
    </React.Fragment>
  );
};

export default Header;
