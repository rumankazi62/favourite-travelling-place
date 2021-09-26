import React from 'react';
import Item from './Item/Item';

const Cart = (props) => {
  const card = props.cards;
  let total = 0;
  for(const place of card){
    total = total + place.cost;
  }

  return (
    <div>
      <h4>Travelling Place Added: {card.length}</h4>
        <h4>Total Cost: {total.toFixed(2)}K</h4>
        {
          card.map(item => <Item items={item}></Item>)
        }
    </div>
  );
};

export default Cart;