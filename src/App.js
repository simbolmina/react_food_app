import React, { useState } from 'react';
import Header from './componenets/Layout/Header';
import Meals from './componenets/Meals/Meals';
import Cart from './componenets/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = function (props) {
    setCartIsShown(true);
  };

  const hideCartHandler = function (props) {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      {/* // render cart if cartIsShown is truty, not render if its falsy function */}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
