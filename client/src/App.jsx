import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import reactDom from 'react-dom';
import EasyLevel from './components/EasyLevel.jsx';
import HardLevel from './components/HardLevel.jsx';
import Entry from './components/Entry.jsx'
import LeaderBoard from './components/LeaderBoard.jsx'

const axios = require('axios');


const App = function () {
  const [view, setView] = useState('entry')

  const changeView = (option) => {
    setView(option)
  }

  useEffect(() => {
    renderView();
  }, [view])

  const renderView = () => {
    if (view === 'entry') {
      return <React.Fragment>
        <div className='entry'><Entry changeView={changeView} /></div>
        <div className='leaderBoard-main'><LeaderBoard /></div>
      </React.Fragment>
    } else if (view === 'easy') {
      return <div className='easy-level'><EasyLevel view={view} changeView={changeView} /></div>
    } else if (view === 'hard') {
      return <div className='hard-level'><HardLevel view={view} changeView={changeView} /></div>
    }
  }

  return (
    <React.Fragment>
      {renderView()}
    </React.Fragment>
  )

}

const root = createRoot(document.getElementById('root'));
root.render(<App />);