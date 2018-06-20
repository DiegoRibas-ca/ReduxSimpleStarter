import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar.js';

import Key from '../secret.js';

//create a new component. this component should produce some html
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));