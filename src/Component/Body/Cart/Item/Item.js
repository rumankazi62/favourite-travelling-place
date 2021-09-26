import React from 'react';
import './Item.css'
const Item = (props) => {
  const {name, img} = props.items;
  return (
    <div className="items">
    <div className="select-item">
      <img src={img} alt="" />
      <p>{name}</p>
      <p className="mark-icon"><i className="fas fa-check-square"></i></p>
    </div>
    </div>
  );
};

export default Item;