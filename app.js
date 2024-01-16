"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
//React
var _React = React,
  useState = _React.useState,
  useEffect = _React.useEffect,
  useRef = _React.useRef;
var App = function App() {
  // State for break and session lengths
  var _useState = useState(5),
    _useState2 = _slicedToArray(_useState, 2),
    breakLength = _useState2[0],
    setBreakLength = _useState2[1];
  var _useState3 = useState(25),
    _useState4 = _slicedToArray(_useState3, 2),
    sessionLength = _useState4[0],
    setSessionLength = _useState4[1];
  var _useState5 = useState("Session"),
    _useState6 = _slicedToArray(_useState5, 2),
    timerLabel = _useState6[0],
    setTimerLabel = _useState6[1];
  var _useState7 = useState(sessionLength * 60),
    _useState8 = _slicedToArray(_useState7, 2),
    timeLeft = _useState8[0],
    setTimeLeft = _useState8[1];
  var _useState9 = useState(false),
    _useState10 = _slicedToArray(_useState9, 2),
    isRunning = _useState10[0],
    setIsRunning = _useState10[1];
  var _useState11 = useState(null),
    _useState12 = _slicedToArray(_useState11, 2),
    timerId = _useState12[0],
    setTimerId = _useState12[1];
  var audioRef = useRef(null);
  useEffect(function () {
    setTimeLeft(sessionLength * 60);
  }, [sessionLength]);
  useEffect(function () {
    setTimeLeft(breakLength * 60);
  }, [breakLength]);
  useEffect(function () {
    if (timeLeft === 0) {
      clearInterval(timerId);
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
  var decrementLength = function decrementLength(type) {
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
  var incrementLength = function incrementLength(type) {
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
  var toggleTimer = function toggleTimer() {
    if (!isRunning) {
      setIsRunning(true);
      startTimer();
    } else {
      setIsRunning(false);
      clearInterval(timerId);
    }
  };
  var startTimer = function startTimer() {
    var id = setInterval(function () {
      setTimeLeft(function (prevTime) {
        // if (prevTime > 0) {
        //   return prevTime - 1;
        // } else {
        //   return 0; 
        // }
        return prevTime - 1;
      });
    }, 1000);
    setTimerId(id);
  };
  var resetTimer = function resetTimer() {
    setIsRunning(false);
    setTimerLabel("Session");
    setSessionLength(25);
    setBreakLength(5);
    setTimeLeft(25 * 60);
    clearInterval(timerId);
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  };
  var formatTime = function formatTime(time) {
    return "".concat(Math.floor(time / 60).toString().padStart(2, '0'), ":").concat((time % 60).toString().padStart(2, '0'));
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    id: "break-label"
  }, "Break Length"), /*#__PURE__*/React.createElement("label", {
    id: "session-label"
  }, "Session Length"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    id: "break-decrement",
    onClick: function onClick() {
      return decrementLength('break');
    }
  }, "Break Decrement"), /*#__PURE__*/React.createElement("button", {
    id: "session-decrement",
    onClick: function onClick() {
      return decrementLength('session');
    }
  }, "Session Decrement"), /*#__PURE__*/React.createElement("button", {
    id: "break-increment",
    onClick: function onClick() {
      return incrementLength('break');
    }
  }, "Break Increment"), /*#__PURE__*/React.createElement("button", {
    id: "session-increment",
    onClick: function onClick() {
      return incrementLength('session');
    }
  }, "Session Increment")), /*#__PURE__*/React.createElement("div", {
    id: "break-length"
  }, breakLength), /*#__PURE__*/React.createElement("div", {
    id: "session-length"
  }, sessionLength), /*#__PURE__*/React.createElement("div", {
    id: "timer-label"
  }, timerLabel), /*#__PURE__*/React.createElement("div", {
    id: "time-left"
  }, formatTime(timeLeft)), /*#__PURE__*/React.createElement("div", {
    id: "time-left2"
  }, timeLeft), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    id: "start_stop",
    onClick: toggleTimer
  }, "Start/Stop"), /*#__PURE__*/React.createElement("button", {
    id: "reset",
    onClick: resetTimer
  }, "Reset")), /*#__PURE__*/React.createElement("audio", {
    id: "beep",
    ref: audioRef,
    src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"
  }));
};

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));
