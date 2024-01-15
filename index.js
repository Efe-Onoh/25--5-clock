

// !!! IMPORTANT README:

// You may add additional external JS and CSS as needed to complete the project, however the current external resource MUST remain in place for the tests to work. BABEL must also be left in place. 

/***********
INSTRUCTIONS:
  - Select the project you would 
    like to complete from the dropdown 
    menu.
  - Click the "RUN TESTS" button to
    run the tests against the blank 
    pen.
  - Click the "TESTS" button to see 
    the individual test cases. 
    (should all be failing at first)
  - Start coding! As you fulfill each
    test case, you will see them go   
    from red to green.
  - As you start to build out your 
    project, when tests are failing, 
    you should get helpful errors 
    along the way!
    ************/

// PLEASE NOTE: Adding global style rules using the * selector, or by adding rules to body {..} or html {..}, or to all elements within body or html, i.e. h1 {..}, has the potential to pollute the test suite's CSS. Try adding: * { color: red }, for a quick example!

// Once you have read the above messages, you can delete all comments. 


// //import { Provider, connect } from 'react-redux'
// //import { createStore } from 'redux'

//React
const {useState, useEffect} = React;

const App = ()=>{
   // State for break and session lengths
   const [breakLength, setBreakLength] = useState(5);
   const [sessionLength, setSessionLength] = useState(25);
   const [timerLabel, setTimerLabel] = useState("Session");
   const [timeLeft, setTimeLeft] = useState(sessionLength * 60); 
   const [isRunning, setIsRunning] = useState(false);
 
   useEffect(() => {
    setTimeLeft(sessionLength * 60);
  }, [sessionLength]);

  // Function to decrement break or session length
  const decrementLength = (type) => {
    if (type === 'break' && breakLength > 1) {
      setBreakLength(breakLength - 1);
    } else if (type === 'session' && sessionLength > 1) {
      setSessionLength(sessionLength - 1);
    }
  };

  // Function to increment break or session length
  const incrementLength = (type) => {
    if (type === 'break' && breakLength < 60) {
      setBreakLength(breakLength + 1);
    } else if (type === 'session' && sessionLength < 60) {
      setSessionLength(sessionLength + 1);
    }
  };

  const toggleTimer = () => {
    setTimerLabel(isRunning ? "Session" : "Break");
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimerLabel("Session");
    setSessionLength(25);
    setBreakLength(5);
    setTimeLeft(25 * 60);
  };

  return (
    <div >
      <label id="break-label">Break Length</label>
      <label id="session-label">Session Length</label>

      <div>
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

      <div id="break-length">{breakLength}</div>

      <div id="session-length">{sessionLength}</div>
      <div id="timer-label">{timerLabel}</div>
      <div id="time-left">{`${Math.floor(timeLeft / 60)
        .toString()
        .padStart(2, '0')}:${(timeLeft % 60).toString().padStart(2, '0')}`}</div>
     
      <div>
        <button id="start_stop" onClick={toggleTimer}>
          Start/Stop
        </button>
        <button id="reset" onClick={resetTimer}>
          Reset
        </button>
      </div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
