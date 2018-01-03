import React from 'react';
import './App.css';

const App = () => {
  return (
    <div>
      <div className='header'>
        <div className='navbar'>
          <div className='bootstrap-button'>Start Bootstrap</div>
          <div className='buttons'>
            <div>SERVICES</div>
            <div>PORTFOLIO</div>
            <div>ABOUT</div>
            <div>TEAM</div>
            <div>CONTACT</div>
          </div>
          <button className='menu'>
            MENU
          </button>
        </div>
        <div className='section'>
          <div className='welcome'>Welcome To Our Studio!</div>
          <div className='nice'>IT'S NICE TO MEET YOU</div>
          <div className='more-button'>TELL ME MORE</div>
        </div>
      </div>
      <div className='services'>
      </div>
    </div>
  )
}

export default App;
