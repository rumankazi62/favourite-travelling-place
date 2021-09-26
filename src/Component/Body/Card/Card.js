import React  from 'react';
import './Card.css'

const Card = (props) => {
  const {name, area, img, division, country, cost} = props.card;
  return (
      <div className="single-card">
      <img src={img} className="card-img-top" alt="..."/>
      <p className="card-title">Place Name: {name}</p>
      <p className="card-text">Area: {area}</p>
      <p className="card-text">Division: {division}</p>
      <p className="card-text">Country: {country}</p>
      <p className="card-text">Avg. Cost: {cost}K per day</p> 
      <button onClick={() => props.click(props.card)} className="button">Add Cost</button>
      </div>
  );
};

export default Card;