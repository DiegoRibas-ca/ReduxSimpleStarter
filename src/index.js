import React from 'react';
import ReactDOM from 'react-dom'

//create a new component. this component should produce some html
const App = () => {
  return <div>Hi!</div>;
}

ReactDOM.render(<App />, document.querySelector('.container'));