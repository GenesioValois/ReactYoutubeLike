import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import {API_KEY} from './credentials'
import YTSearch from 'youtube-api-search'

import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'



// Create new component
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      videos: [],
      selectedVideo: null
    }
    this.videoSearch('top 10 nintendo switch games')
  }

  videoSearch(term){
    YTSearch({key: API_KEY, term: term}, (videos) =>{
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })
    });
  }

  render(){
    const videoSearch = _.debounce((item) => {
      this.videoSearch(term)
    }, 300);
    return (
      <div>
        <SearchBar onSearchTermChanges={term => videoSearch}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos} />
      </div>
    );
  }
}
// Put this component on the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
