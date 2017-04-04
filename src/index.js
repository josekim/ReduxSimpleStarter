import React from 'react';
import ReactDOM from 'react-dom';
import YTsearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCF33h9nTzEQtoOWaDq-ud4Nqxtxywbqjw';

YTsearch({key:API_KEY, term: 'surfboards'}, function(data){
  console.log(data);
});

// Create a new component.  This component should produce
//some html
const App = () => {
  return(
    <div>
      <SearchBar />
    </div>
  );//JSX a dialect of javascript -
    //produces the HTML that gets rendered

}

//  Take this component's generated HTML and put it
// on the page(in the dom)
ReactDOM.render(<App />, document.querySelector('.container'));
//React.render(App); - Doesn't Work Need to the Libraryies
// Core react Library know how to work with core COmponents
// Funcationality to render to DOM is different Library - ReactDOM
//We use ReactDom to render to DOM
//ReactDom.render(App);
//Instead of passing a class, please make sure to instantiate
// need to instantiate or create a instance of Component.  <App />
//ReactDom.render(<App />) Target container is not a DOM - we are not specifying
// where it needs to Go.  2nd Argument to specify Existing Dom Node

//downward data flow. The parent should be in charge of fetching data
