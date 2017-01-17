import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import VideoList from './components/VideoList';
import VideoLista from './components/VideoLista2';

import VideoDetail from './components/VideoDetail';
import SearchBar from './components/SearchBar';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyDYyGUOBb3dp8xKhLH0QNREDwPIN9VQTjk';

class App extends Component  {
  constructor(props) {
    super(props);

    this.state = { videos: [],
                   selectedVideo: null
                 };

    this.videoSearch('surfing');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }


  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        {/* <VideoLista
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} /> */}
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
