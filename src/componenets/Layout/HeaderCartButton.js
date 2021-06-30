import React, { useContext, useEffect, useState } from 'react';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';
import styles from './HeaderCartButton.module.css';

const HeaderCardButton = function (props) {
  const [btnIsHigh, setBtnHigh] = useState(false);

  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const { items } = cartCtx;

  const btnStyles = `${styles.button} ${btnIsHigh ? styles.bump : ''}`;

  useEffect(() => {
    if (cartCtx.items.length === 0) return;
    setBtnHigh(true);

    const timer = setTimeout(() => {
      setBtnHigh(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnStyles} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCardButton;
