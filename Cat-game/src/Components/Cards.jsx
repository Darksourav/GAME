// Cards.js (Parent Component)
import React, { useState } from 'react';
import Card from './Card';

function Cards() {
  const [items, setItems] = useState([
    { id: 0, img: '/img/BOMB.jpg', stat: 'bomb' },
    { id: 1, img: '/img/CAT.jpg', stat: 'cat' },
    { id: 2, img: '/img/defuce.jpg', stat: 'defuse' },
    { id: 3, img: '/img/shuffele.jpg', stat: 'shuffle' },
    { id: 4, img: '/img/shuffle.jpg', stat: 'shuffle' }, // Corrected image path
  ].sort(() => Math.random() - 0.5));
  const [revealedCards, setRevealedCards] = useState([]);
  const [gameStarted, setGameStarted] = useState(false); 

  function handleClick(id) {
    if (!gameStarted) {
      return; 
    }

    const clickedCard = items.find(card => card.id === id);

    switch (clickedCard.stat) {
      case 'bomb':
        alert("You Lose! Game Over!");
        setGameStarted(false);
        break;
      case 'cat':
        setItems(items.filter(card => card.id !== id));
        break;
      case 'defuse':
        setItems(items.filter(card => card.id !== id));
        break;
      case 'shuffle':
        setItems([
          { id: 0, img: '/img/BOMB.jpg', stat: 'bomb' },
          { id: 1, img: '/img/CAT.jpg', stat: 'cat' },
          { id: 2, img: '/img/defuce.jpg', stat: 'defuse' },
          { id: 3, img: '/img/shuffele.jpg', stat: 'shuffle' },
          { id: 4, img: '/img/R.jpg', stat: 'shuffle'  },
        ].sort(() => Math.random() - 0.5));
        break;
      default:
        break;
    }

    setRevealedCards([...revealedCards, clickedCard]);
    if (revealedCards.length === 4 && clickedCard.stat !== 'bomb') {
      alert("Congratulations! You Win!");
      setGameStarted(false);
    }
  }

  function handleStart() {
    setGameStarted(true);
  }

  return (
    <div className="Container">
      <button className="Button" onClick={handleStart}>Start</button>
      {items.map((item, index) => (
        <Card key={index} item={item} id={item.id} handleClick={handleClick} />
      ))}
    </div>
  );
}

export default Cards;
