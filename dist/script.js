import React from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";
let calState = {
  first: '',
  second: '',
  operator: '',
  result: '0',
  current: 0 };

class CalculatorExample extends React.Component {
  constructor(props) {
    super(props);
    this.handleReset = this.handleReset.bind(this);
    this.handleKey = this.handleKey.bind(this);
    this.handleOperator = this.handleOperator.bind(this);
  }
  handleOperator(e) {
    var v = e.target.value;
    let ele = document.getElementById("display");
    if (v === '+' || v === '-' || v === '*' || v === '/') {
      if (calState.current === 0) {
        ele.innerHTML = calState.first + v;
        calState.current = 1;
        calState.operator = v;
      } else {
        if (v === '-' && calState.operator !== '') {
          calState.second = '-';
          ele.innerHTML = calState.first + calState.operator + calState.second;
          return;
        }
        let r = this.calResult();
        ele.innerHTML = r + v;
        calState.current = 1;
        calState.first = calState.result;
        calState.second = '';
        calState.operator = v;
      }
    }

    if (v === '=') {
      if (calState.current === 1) {
        this.calResult();
        ele.innerHTML = calState.result;
        calState.first = calState.result;
        calState.operator = '';
        calState.second = '';
      }
    }
  }
  calResult() {
    let a, b, r;
    if (calState.second === '') {
      calState.result = calState.first;
      return calState.first;
    }
    if (calState.first.includes('.')) {
      a = parseFloat(calState.first);
    } else {
      a = parseInt(calState.first);
    }
    if (calState.second.includes('.')) {
      b = parseFloat(calState.second);
    } else {
      b = parseInt(calState.second);
    }
    if (calState.operator === '+') {
      r = a + b;
    } else if (calState.operator === '-') {
      r = a - b;
    } else if (calState.operator === '*') {
      r = a * b;
    } else if (calState.operator === '/') {
      r = a / b;
    }
    calState.result = r.toString();
    return r.toString();
  }
  handleKey(e) {
    var v = e.target.value;
    let ele = document.getElementById("display");
    if (v === '.') {
      if (calState.current === 0 && calState.first === '') {
        ele.innerHTML = '0.';
        calState.first = '0.';

      } else if (calState.current === 1 && calState.second === '') {
        ele.innerHTML = calState.first + calState.operator + '0.';
        calState.second = '0.';

      } else if (calState.current === 0 && !calState.first.includes('.'))
      {
        ele.innerHTML = calState.first + '.';
        calState.first = calState.first + '.';

      } else if (calState.current === 1 && !calState.second.includes('.'))
      {
        ele.innerHTML = calState.first + calState.operator + calState.second + '.';
        calState.second = calState.second + '.';

      }
    }


    if (v === '0' || v === '1' || v === '2' || v === '3' || v === '4' || v === '5' || v === '6' || v === '7' || v === '8' || v === '9') {
      if (calState.current === 0) {
        if (calState.first === '0')
        calState.first = '';
        ele.innerHTML = calState.first + v;
        calState.first = calState.first + v;
      } else if (calState.current === 1) {
        if (calState.second === '0')
        calState.second = '';
        ele.innerHTML = calState.first + calState.operator + calState.second + v;
        calState.second = calState.second + v;
      }
    }
  }
  handleReset() {
    let ele = document.getElementById("display");
    ele.innerHTML = '0';
    calState.first = '';
    calState.second = '';
    calState.operator = '';
    calState.result = '0';
    calState.current = 0;
  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("h1", null, "Calculator"), /*#__PURE__*/
      React.createElement("div", { id: "Calpad" }, /*#__PURE__*/
      React.createElement("div", { id: "display" }, calState.result), /*#__PURE__*/
      React.createElement("button", { id: "clear", value: "AC", onClick: this.handleReset }, "AC"), /*#__PURE__*/
      React.createElement("button", { id: "multiply", value: "*", onClick: this.handleOperator }, "*"), /*#__PURE__*/
      React.createElement("button", { id: "divide", value: "/", onClick: this.handleOperator }, "/"), /*#__PURE__*/
      React.createElement("button", { id: "zero", value: "0", onClick: this.handleKey }, "0"), /*#__PURE__*/
      React.createElement("button", { id: "one", value: "1", onClick: this.handleKey }, "1"), /*#__PURE__*/
      React.createElement("button", { id: "two", value: "2", onClick: this.handleKey }, "2"), /*#__PURE__*/
      React.createElement("button", { id: "add", value: "+", onClick: this.handleOperator }, "+"), /*#__PURE__*/
      React.createElement("button", { id: "three", value: "3", onClick: this.handleKey }, "3"), /*#__PURE__*/
      React.createElement("button", { id: "four", value: "4", onClick: this.handleKey }, "4"), /*#__PURE__*/
      React.createElement("button", { id: "five", value: "5", onClick: this.handleKey }, "5"), /*#__PURE__*/
      React.createElement("button", { id: "six", value: "6", onClick: this.handleKey }, "6"), /*#__PURE__*/
      React.createElement("button", { id: "seven", value: "7", onClick: this.handleKey }, "7"), /*#__PURE__*/
      React.createElement("button", { id: "eight", value: "8", onClick: this.handleKey }, "8"), /*#__PURE__*/
      React.createElement("button", { id: "subtract", value: "-", onClick: this.handleOperator }, "-"), /*#__PURE__*/
      React.createElement("button", { id: "nine", value: "9", onClick: this.handleKey }, "9"), /*#__PURE__*/
      React.createElement("button", { id: "decimal", value: ".", onClick: this.handleKey }, "."), /*#__PURE__*/



      React.createElement("button", { id: "equals", value: "=", onClick: this.handleOperator }, "="))));




  }}

ReactDOM.render( /*#__PURE__*/React.createElement(CalculatorExample, null), document.getElementById("root"));