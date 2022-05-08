import React, { useState, useEffect } from 'react';
import UserRank from './UserRank.jsx'
const axios = require('axios');

const LeaderBoard = function (props) {

  const [rank, setRank] = useState([]);

  const handleData = (level) => {
    const mode = level || 'easy'
    return axios.get('/leaderboard', { params: { level: mode } })
      .then(({ data }) =>
        setRank(data)
      )
  }
  const handleLeaderboard = (e) => {
    handleData(e.target.id)
    if (e.target.id === 'easy') {
      $('.easy-button').addClass('button-style');
      $('.hard-button').removeClass('button-style')
    } else if (e.target.id === 'hard') {
      $('.easy-button').removeClass('button-style');
      $('.hard-button').addClass('button-style')
    }
  }

  useEffect(() => {
    handleData();

  }, [])

  const renderUser = () => {
    return rank.map((user, index) => {
      return <UserRank key={index} index={index} user={user} />
    }
    )
  }


  const handleClick = () => {
    $('.leaderBoard-main').removeClass('leaderboard-shift');
  }

  return (
    <React.Fragment>
      <div className='back-btn'>
        <a>
          <img onClick={handleClick} src='./data/back-button.png'></img></a>
      </div>
      <div className='board'>

        <div className='board-content'>
          <div className='level-button row'>
            <div className='col-3 easy-level-btn'>
              <button onClick={handleLeaderboard} id='easy' className='easy-button button-style'>EASY</button>
            </div>
            <div className='col-3 hard-level-btn'>
              <button onClick={handleLeaderboard} id='hard' className='hard-button'>HARD</button>
            </div>
          </div>

          <div className='rank'>
            {renderUser()}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default LeaderBoard;