import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyD0c-Y7XomSynTL86yPGHjjeANYLS2x-hk';

YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {
  console.log(data);
});

const App = () => {
  return (
  <div>
    <SearchBar />
  </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'))
