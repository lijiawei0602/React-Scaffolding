(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var ReactDOM = (typeof window !== "undefined" ? window['ReactDOM'] : typeof global !== "undefined" ? global['ReactDOM'] : null);

var HelloWorld = React.createClass({
  displayName: 'HelloWorld',

  render: function render() {
    return React.createElement(
      'p',
      null,
      'Hello, ',
      React.createElement('input', { className: 'hello', type: 'text', placeholder: 'Your name here' }),
      '! It is ',
      this.props.date.toTimeString()
    );
  }
});

setInterval(function () {
  ReactDOM.render(React.createElement(HelloWorld, { date: new Date() }), document.getElementById('example'));
}, 500);

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1]);
