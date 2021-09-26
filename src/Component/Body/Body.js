import React, { useEffect, useState } from 'react';
import Card from './Card/Card';
import './Body.css'
import Cart from './Cart/Cart';

const Body = () => {
  const [cards, setCards]= useState([]);
  const [card, setCard] = useState([])
  useEffect( () => {
    fetch('./tools.JSON')
    .then(res => res.json())
    .then(data => setCards(data))
  }, []);

  const handleAddCart = cart => {
    const newCard = [...card, cart];
    setCard(newCard);
  }
  return (
    <div className="body">
      <div className="cards-container">
      {
        cards.map(card => <Card key={card.id} click={handleAddCart} card={card}></Card> )
      }
      </div>
      <div className="cost-container">
        <Cart cards={card}></Cart>
      </div>
    </div>
  );
};

export default Body;