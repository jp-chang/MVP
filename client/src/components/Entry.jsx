import React, { useState, useEffect } from 'react';

const Entry = function (props) {


  const handleClick = (e) => {
    props.changeView(e.target.id)
  }

  const leaderBoard = () => {
    $('.leaderBoard-main').addClass('leaderboard-shift');
  }

  return (
    <React.Fragment>
      <div className='leaderboard'>
        <img id='leaderboard' onClick={leaderBoard} src='./data/leaderboard.png'></img>
      </div>
      <div className='ballon'>
        <img src='./data/ballon.png'></img>
      </div>
      <div className='ballon2'>
        <img src='./data/ballon2.png'></img>
      </div>
      <div className='entry-main'>

        <div className='title'>
          <h1>FLIP MONSTERS</h1>
        </div>
        <div className='options'>

          <div className='easy'>
            <button className='easy-button' onClick={handleClick} id='easy'>EASY</button>
          </div>
          <div className='hard'>
            <button className='hard-button' onClick={handleClick} id='hard'>HARD</button>
          </div>
          <div className='indicator'>
            <img src='./data/bouncyPink.gif'></img>
          </div>
        </div>
      </div>
    </React.Fragment>
  )

}

export default Entry;