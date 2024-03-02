// Cards.js (Parent Component)
import React, { useState } from 'react';
import Card from './Card'; // Make sure the path to Card component is correct

const initialDeck = [
  { id: 0, img: '/img/BOMB.jpg', type: 'bomb' },
  { id: 1, img: '/img/CAT.jpg', type: 'cat' },
  { id: 2, img: '/img/defuce.jpg', type: 'defuse' },
  { id: 3, img: '/img/shuffele.jpg', type: 'shuffle' },
  { id: 4, img: '/img/R.jpg', type: 'normal' },
];

function Cards() {
  const [deck, setDeck] = useState(initialDeck.sort(() => Math.random() - 0.5));
  const [revealedCards, setRevealedCards] = useState([]);
  const [gameStarted, setGameStarted] = useState(false);

  function handleClick(id) {
    if (!gameStarted) return;

    const selectedCard = deck.find(card => card.id === id);
    handleCardEffect(selectedCard);
    setRevealedCards([...revealedCards, selectedCard]);
    setDeck(deck.filter(card => card.id !== id));

    // Check if all cards are revealed and the player wins
    if (revealedCards.length === 4) {
      alert('Congratulations! You won the game!');
      resetGame();
    }
  }

  function handleStart() {
    setGameStarted(true);
  }

  function resetGame() {
    setGameStarted(false);
    setDeck(initialDeck.sort(() => Math.random() - 0.5));
    setRevealedCards([]);
  }

  function handleCardEffect(card) {
    switch (card.type) {
      case 'cat':
        alert('You drew a Cat card!');
        break;
      case 'bomb':
        alert('You drew a Bomb! Game Over!');
        resetGame();
        break;
      case 'defuse':
        alert('You drew a Defuse card!');
        break;
      case 'shuffle':
        alert('You drew a Shuffle card! Restarting the game.');
        resetGame();
        break;
      default:
        alert('You drew a Normal card.');
    }
  }

  return (
    <div className="Container">
      <button className="Button" onClick={handleStart} disabled={gameStarted}>Start</button> {/* Start button */}
      {deck.map((card, index) => (
        <Card key={card.id} card={card} id={card.id} handleClick={handleClick} />
      ))}
    </div>
  );
}

export default Cards;
