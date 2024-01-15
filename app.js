"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
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
var _React = React,
  useState = _React.useState,
  useEffect = _React.useEffect;
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
  useEffect(function () {
    setTimeLeft(sessionLength * 60);
  }, [sessionLength]);

  // Function to decrement break or session length
  var decrementLength = function decrementLength(type) {
    if (type === 'break' && breakLength > 1) {
      setBreakLength(breakLength - 1);
    } else if (type === 'session' && sessionLength > 1) {
      setSessionLength(sessionLength - 1);
    }
  };

  // Function to increment break or session length
  var incrementLength = function incrementLength(type) {
    if (type === 'break' && breakLength < 60) {
      setBreakLength(breakLength + 1);
    } else if (type === 'session' && sessionLength < 60) {
      setSessionLength(sessionLength + 1);
    }
  };
  var toggleTimer = function toggleTimer() {
    setTimerLabel(isRunning ? "Session" : "Break");
    setIsRunning(!isRunning);
  };
  var resetTimer = function resetTimer() {
    setIsRunning(false);
    setTimerLabel("Session");
    setSessionLength(25);
    setBreakLength(5);
    setTimeLeft(25 * 60);
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
  }, "".concat(Math.floor(timeLeft / 60).toString().padStart(2, '0'), ":").concat((timeLeft % 60).toString().padStart(2, '0'))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    id: "start_stop",
    onClick: toggleTimer
  }, "Start/Stop"), /*#__PURE__*/React.createElement("button", {
    id: "reset",
    onClick: resetTimer
  }, "Reset")));
};
var root = ReactDOM.createRoot(document.getElementById("root"));
root.render( /*#__PURE__*/React.createElement(App, null));
