// Card.js
import React from 'react';

function Card({ card, id, handleClick }) {
  const handleCardClick = () => {
    handleClick(id);
  };

  return (
    <div className="Card" onClick={handleCardClick}>
      <img src={card.img} alt="" />
    </div>
  );
}

export default Card: