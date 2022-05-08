import React, { useState, useEffect } from 'react';
import Cards from '../../dist/data/database.js'


const Card = function (props) {
  const [cards, setCards] = useState([]);
  const [image, setImage] = useState();
  const [pairs, setPairs] = useState([]);

  useEffect(() => {
    if (props.view === 'easy') {
      setCards(Cards.EasyCards)
    }

    if (props.view === 'hard') {
      setCards(Cards.Cards)
    }
    cards.map(card => {
      if (card.id === props.cardId) {
        setImage(card.image)
      }
    })

  }, [props.cardId, cards])

  const handleClick = (e) => {
    props.handlePairs(e.target.id, e.target.className)
    $('#' + e.target.className + ' .flip-card').addClass('flip')
    const audio = new Audio('./data/sounds/clicksound.wav');
    audio.volume = 0.3;
    audio.play();
  }

  let width = 12 / props.count
  if (width < 3 && width >2) {
    width = 3
  } else if (width <= 2) {
    width = 2
  }else{
    width = Math.round(width)
  }

  return (
    <div id={'image' + props.index} className={'col-' + width + ' card-container'}>
      <div className='flip-card'>
        <div className='card-back'>
          <img onClick={handleClick} src='./data/back.png' id={'' + props.cardId} className={'image' + props.index}></img>
        </div>
        <div className='card-item'>
          <img src={image}></img>
        </div>
      </div>
    </div>
  )

}

export default Card;