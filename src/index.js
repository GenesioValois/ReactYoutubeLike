import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import {API_KEY} from './credentials'
import YTSearch from 'youtube-api-search'

import SearchBar from './components/search_bar'



// Create new component
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      videos: []
    }
    YTSearch({key: API_KEY, term: 'nintendo switch'}, (videos) => {
      this.setState({ videos })
    });
  }

  render(){
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}
// Put this component on the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
