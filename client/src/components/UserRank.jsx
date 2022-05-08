import React, { useState, useEffect } from 'react';


const UserRank = function (props) {



  return (

    <div className='user-rank row'>
      <div className='num col-2'>
        {props.index + 1}
      </div>
      <div className='name col-4'>
        {props.user.username}
      </div>
      <div className='rank-score col-4'>
        {props.user.score}
      </div>
    </div>
  )

}

export default UserRank;