import React  from 'react';

const Card = (props) => {
  const {name, area, img} = props.card;
  return (
  <div>
    <div className="card-group">
      <div className="card">
      <img src={img} className="card-img-top" alt="..."/>
      <p className="card-title">Place Name: {name}</p>
      <p className="card-text">Area: {area}</p>
      <p className="card-text">Division: </p>
      <p className="card-text">Country: </p>
      <p className="card-text">Avg. Cost: K per day</p>
    
      </div>
    </div>
  </div>
  );
};

export default Card;