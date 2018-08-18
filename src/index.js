import React from 'react';
import ReactDOM from 'react-dom'
import {API_KEY} from './credentials'

// Create new component
const App = () => {
  return <div>Hi</div>;
}

// Put this component on the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
