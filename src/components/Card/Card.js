import React from 'react';
import './Card.css';

const Card = ({ name, picture }) => {
  return (
    <div className="nes-container is-rounded card">
      <img
        src={picture}
        alt={`The Pokemon: ${name}`}/>
      <div>
        <h2>{name}</h2>
      </div>
    </div>
  );
}

export default Card;