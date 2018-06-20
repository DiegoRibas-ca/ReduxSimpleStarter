import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from "youtube-api-search";

import SearchBar from './components/search_bar.js';

import Key from '../secret.js';

YTSearch({key: Key.API_KEY, term: 'surfboards'}, function(data){
  console.log(data);
});

//create a new component. this component should produce some html
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));