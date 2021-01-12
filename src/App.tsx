import React, { useState } from 'react';
import './App.css';
import { Header } from './Components/Header';
import { Timer } from './Components/Timer/Timer';
import { TimerBtn } from './Components/TimerBtn/TimerBtn';

function App() {
  const [time, setTime] = useState({ h: 0, m: 0, s: 0 });
  const [timeInterval, setTimeInterval] = useState({});
  const [timeFlag, setTimeFlag] = useState(0);

  var hr = time.h;
  var min = time.m;
  var sec = time.s;

  const startTimer = () => {
    if (timeFlag !== 1) {
      runTimer();
      setTimeFlag(1);
      setTimeInterval(setInterval(runTimer, 1000));
    }
  }

  const resetTimer = () => {
    setTime({ h: 0, m: 0, s: 0 });
    setTimeFlag(0);
    clearInterval(Number(timeInterval));

  }

  const stopTimer = () => {
    setTimeFlag(2);
    clearInterval(Number(timeInterval));
  }

  const runTimer = () => {
    if (sec === 60) {
      min++;
      sec = 0;
    }
    if (min === 60) {
      hr++;
      min = 0;
    }
    sec++;
    return (setTime({ h: hr, m: min, s: sec }))
  }

  return (
    <div className="app-container">
      <Header />
      <Timer time={time} />
      <TimerBtn startTimer={startTimer} resetTimer={resetTimer} stopTimer={stopTimer} />
    </div>
  );
}

export default App;
