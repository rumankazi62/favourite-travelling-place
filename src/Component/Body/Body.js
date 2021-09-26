import React, { useEffect, useState } from 'react';
import Card from './Card/Card';
import './Body.css'

const Body = () => {
  const [card, setCard]= useState([]);
  useEffect( () => {
    fetch('./tools.JSON')
    .then(res => res.json())
    .then(data => setCard(data))
  }, []);
  return (
    <div className="body">
      <div className="card-container">
      <Card key={card.id} card={card}></Card>
      </div>
      <div className="cost-container">
        <h4>Place Added: </h4>
        <h4>Total Cost: </h4>
      </div>
    </div>
  );
};

export default Body;