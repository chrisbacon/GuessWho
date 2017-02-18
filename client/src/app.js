var React = require('react');
var ReactDOM = require('react-dom');
import GuessWho from './containers/GuessWho.jsx';

window.onload = function () {
  ReactDOM.render(
    <GuessWho/>,
    document.getElementById('app')
  );
}
