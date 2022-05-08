import React, { useState, useEffect } from 'react';
import Timer from './Timer.jsx'
import Card from './Cards.jsx'

const EasyLevel = function (props) {
  const [count, setCount] = useState(2);
  const [randomCards, setRandomCards] = useState([]);
  const [pairs, setPairs] = useState([]);
  const [score, setScore] = useState(0);


  const cardShuffle = () => {
    setRandomCards([]);
    let cardsId = [];
    while (cardsId.length !== count) {
      const index = Math.floor(Math.random() * count) + 1;
      if (cardsId.indexOf(index) === -1) {
        cardsId.push(index)
      }
    }
    cardsId = cardsId.concat(cardsId)
    cardsId.sort(() => Math.random() - 0.5)
    setRandomCards(cardsId);
  }

  const renderCards = () => {
    return randomCards.map((card, index) =>
      <Card count={count} key={index} index={index} cardId={card} handlePairs={handlePairs} view={props.view} />
    )
  }

  useEffect(() => {
    setPairs([]);
    cardShuffle();
    if (randomCards.length === count * 2) {
      renderCards();
    }

  }, [count])

  let pairId = [];
  let pairClass = [];
  const handlePairs = (id, className) => {
    pairId.push(id);
    pairClass.push(className);
    if (pairId.length === 2) {
      if (pairId[0] === pairId[1]) {
        setPairs(pairs.concat(pairId));
        setScore(score + 1);
        if (pairs.length / 2 + 1 !== count) {
          const audio = new Audio('./data/sounds/winning.wav');
          audio.volume = 0.2;
          audio.play();
        }
        if (pairs.length / 2 + 1 === count) {
          setTimeout(() => {
            $('.flip-card').removeClass("flip").dequeue();
          }, 900)
          setTimeout(() => {
            setCount(count + 1)
          }, 1500)
          const audio = new Audio('./data/sounds/complete.wav');
          audio.volume = 0.2;
          audio.play();
        }
      } else {
        $('#' + pairClass[0] + ' .flip-card').delay(800).queue(function () {
          $(this).removeClass("flip").dequeue();
        });
        $('#' + pairClass[1] + ' .flip-card').delay(800).queue(function () {
          $(this).removeClass("flip").dequeue();
        });
        const audio = new Audio('./data/sounds/losing.wav');
        audio.volume = 0.2;
        audio.play();
      }
      pairId = [];
      pairClass = [];
    }
  }

  return (
    <div className='easy row'>
      <div className='back-btn'>
        <a href='/'>
          <img src='./data/back-button.png'></img></a>
      </div>
      <div className='menu row'>
        <div className='level col-4'>
          <div className='title'>
            LEVEL
          </div>
          <div className='score-board'>
            <h2>{count - 1}</h2>
          </div>
        </div>
        <div className='timer col-4'>
          <div className='title'>
            TIMER
          </div>
          <div className='timer-board'>
           <Timer score ={score} view={props.view} changeView={props.changeView}/>
          </div>
        </div>
        <div className='score col-4'>
          <div className='title'>
            SCORE
          </div>
          <div className='score-board'>
            <h2>{score}</h2>
          </div>
        </div>
      </div>
      <div className='game-board-center'>
        <div className='game-board row'>
          {renderCards()}
        </div>
      </div>
    </div>
  )
}

export default EasyLevel;