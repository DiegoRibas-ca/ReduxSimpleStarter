import React from 'react';
import ReactDOM from 'react-dom';


import Key from '../secret.js';

//create a new component. this component should produce some html
const App = () => {
  return <div>Hi!</div>;
}

ReactDOM.render(<App />, document.querySelector('.container'));