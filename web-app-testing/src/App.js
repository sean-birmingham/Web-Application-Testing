import React, { useState } from 'react';
import Display from "./components/Display";
import Dashboard from "./components/Dashboard";

import './App.css';

function App() {
  const [strike, setStrike] = useState(0);
  const [ball, setBall] = useState(0);

  const handleStrike = () => {
    if (strike > 2) {
      setStrike(0)
      setBall(0)
    } else {
      setStrike(strike + 1)
    }
  }

  const handleBall = () => {
    if (ball > 3) {
      setBall(0)
      setStrike(0)
    } else {
      setBall(ball + 1)
    }
  }

  const handleFoul = () => {
    if (strike < 2) {
      setStrike(strike + 1)
    }
  }

  const handleHit = () => {
    setStrike(0);
    setBall(0)
  }

  return (
    <div className="App">
      <Display strike={strike} ball={ball} />
      <Dashboard handleStrike={handleStrike} handleBall={handleBall} handleFoul={handleFoul} handleHit={handleHit} />
    </div >
  );
}

export default App;
