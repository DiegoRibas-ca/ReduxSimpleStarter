import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from "youtube-api-search";
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import Key from '../secret.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.videoSearch = this.videoSearch.bind(this);

    this.state = { 
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('dogs');
  }

  videoSearch(term) {
    YTSearch({ key: Key.API_KEY, term: term }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })
    });
  }

  render() {
    return (
    <div>
      <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
      <VideoDetail video={this.state.selectedVideo}/>
      <VideoList 
        onVideoSelect={selectedVideo => this.setState({selectedVideo})}
        videos={this.state.videos} />
    </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));