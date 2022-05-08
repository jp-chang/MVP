import React, { useState, useEffect } from 'react';

const axios = require('axios');

const Timer = function (props) {

  const [counter, setCounter] = useState(20);
  const [username, setUsername] = useState('Ghost')

  useEffect(() => {
    if (counter > 0) {
      setTimeout(() => {
        setCounter(counter - 1)
      }, 1000)
    }
    if (counter === 0) {
      $('.modal').addClass('show')
    } else {
      $('.modal').removeClass('show')
    }
  })

  const handleUsername = (e) => {
    if(e.target.value !== ''){
      setUsername(e.target.value)
    }
  }

  const submit = (e) => {
    axios.post("/leaderboard", {
      username: username,
      level: props.view,
      score: props.score
    })
      .then(() => 'Success!');

     props.changeView('entry')
  }

  const modal = () => {
    return <div className='modal'>
      <div className='modal-container'>
        <div className='modal-container-inner'>
          <div className='final-score'>
            <h1>Score</h1>
            <h2>{props.score}</h2>
          </div>
          <div className='user'>
            <h5>Please Enter Your Username</h5>
            <input onChange={handleUsername} placeholder='Ghost'></input>
          </div>
          <div className='confirm-button'>
            <button onClick={submit}>BACK</button>
          </div>
        </div>
      </div>
    </div>
  }

  return (

    <React.Fragment>
      <h2>{counter}</h2>
      {modal()}
    </React.Fragment>

  )
}

export default Timer