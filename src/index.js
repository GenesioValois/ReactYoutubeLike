import React from 'react';
import ReactDOM from 'react-dom'
import {API_KEY} from './credentials'

import SearchBar from './components/search_bar'

// Create new component
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Put this component on the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
