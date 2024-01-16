//React
const {useState, useEffect, useRef} = React;

const App = ()=>{
   // State for break and session lengths
   const [breakLength, setBreakLength] = useState(5);
   const [sessionLength, setSessionLength] = useState(25);
   const [timerLabel, setTimerLabel] = useState("Session");
   const [timeLeft, setTimeLeft] = useState(sessionLength * 60); 
   const [isRunning, setIsRunning] = useState(false);
   const [timerId, setTimerId] = useState(null);
   
   const audioRef = useRef(null);

   useEffect(() => {
    setTimeLeft(sessionLength * 60);
  }, [sessionLength]);

  useEffect(() => {
    setTimeLeft(breakLength * 60);
  }, [breakLength]);

  useEffect(() => {
    if (timeLeft === 0) {
      clearInterval(timerId)
      if (timerLabel === "Session") {
        audioRef.current.play();
        setTimerLabel("Break");
        setTimeLeft(breakLength * 60);
      } else {
        audioRef.current.play();
        setTimerLabel("Session");
        setTimeLeft(sessionLength * 60);
      }
      startTimer();
    }
  }, [timeLeft, timerLabel, breakLength, sessionLength]);
  // Function to decrement break or session length
  const decrementLength = (type) => {
    if (!isRunning) {
      if (type === "break" && breakLength > 1) {
        setBreakLength(breakLength - 1);
        setTimeLeft(breakLength - 1 * 60);
      } else if (type === "session" && sessionLength > 1) {
        setSessionLength(sessionLength - 1);
        setTimeLeft(sessionLength - 1 * 60);
      }
    }
  };


  // Function to increment break or session length
  const incrementLength = (type) => {
    if (!isRunning) {
      if (type === "break" && breakLength < 60) {
        setBreakLength(breakLength + 1);
        setTimeLeft(breakLength + 1 * 60);
      } else if (type === "session" && sessionLength < 60) {
        setSessionLength(sessionLength + 1);
        setTimeLeft(sessionLength + 1 * 60);
      }
    }
  };

  const toggleTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      startTimer();
    } else {
      setIsRunning(false);
      clearInterval(timerId);
    }
  };

  const startTimer = () => {
    const id = setInterval(() => {
      setTimeLeft((prevTime) => {
        // if (prevTime > 0) {
        //   return prevTime - 1;
        // } else {
        //   return 0; 
        // }
        return prevTime - 1
      });
    }, 1000);
  
    setTimerId(id);
  };
  
  const resetTimer = () => {
    setIsRunning(false);
    setTimerLabel("Session");
    setSessionLength(25);
    setBreakLength(5);
    setTimeLeft(25 * 60);
    clearInterval(timerId);

    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  };

  const formatTime = (time) => {
    return `${Math.floor(time / 60).toString().padStart(2, '0')}:${(time % 60).toString().padStart(2, '0')}`;
  };

  
  return (
    <div className="app-container">
      <div className="length-controls">
        <div className="controls">
          <button id="break-decrement" onClick={() => decrementLength('break')}>
            Break Decrement
          </button>
          <button id="session-decrement" onClick={() => decrementLength('session')}>
            Session Decrement
          </button>
          <button id="break-increment" onClick={() => incrementLength('break')}>
            Break Increment
          </button>
          <button id="session-increment" onClick={() => incrementLength('session')}>
            Session Increment
          </button>
        </div>
      </div>

      <div className="length-display">
        <div id="break">
          
        <label id="break-label">Break Length: </label>
        <div id="break-length">{breakLength}</div>
        
        </div>
        <div id="session">
          
        <label id="session-label">Session Length: </label>
        <div id="session-length">{sessionLength}</div>
            
        </div>
      </div>

      <div className="timer-display">

        <div id="timer-label">{timerLabel}</div>
        <div id="time-left">{formatTime(timeLeft)}</div>
        <div id="time-left2">{timeLeft}</div>
      </div>

      <div className="timer-controls">
        <button id="start_stop" onClick={toggleTimer}>
          Start/Stop
        </button>
        <button id="reset" onClick={resetTimer}>
          Reset
        </button>
      </div>

      <audio id="beep" ref={audioRef} src="https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3" />

    </div>
  )
}

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);
ReactDOM.render(<App />,  document.getElementById("root"));
