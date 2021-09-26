import React from 'react';

const Cart = (props) => {
  const card = props.cards;
  let total = 0;
  for(const place of card){
    total = total + place.cost;
  }
  return (
    <div>
      <h4>Place Added: {card.length}</h4>
        <h4>Total Cost: {total}K</h4>
    </div>
  );
};

export default Cart;