import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import VideoList from './components/VideoList';
import SearchBar from './components/SearchBar';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyDYyGUOBb3dp8xKhLH0QNREDwPIN9VQTjk';

class App extends Component  {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: "surfing"}, (videos) => {
      this.setState({ videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
