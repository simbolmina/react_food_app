import React from 'react';

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: function (items) {},
  removeItem: function (id) {},
});

export default CartContext;
