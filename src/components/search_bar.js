import React, { Component } from 'react';


// Use a Class based component if you want some record keeping
class SearchBar extends Component {// inherit from React.Component class
  constructor(props){
    super(props);
    this.state = {term: ''};
  }
  render() { // every Component must have a Render Method
    return (
    <div className="search-bar">
      <input
        value = {this.state.term}
        onChange={event => this.onInputChange(event.target.value)}/>
    </div>
  );
  }
  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

}


export default SearchBar;



/*
import React from 'react';                class SearchBar extends React.Component
import React, { Component } from 'react'; class SearchBar extends Component

*/
/*
const SearchBar = () => {  // THis is  Functional Component
  return <input />;
};
*/
//State is a plain javascript object that is used to record and react to user events
// each class base object has its own state object.  when state is changed,
// componenet immediately rerenders, including its children.
// Manipulate/assign value to state with this.setState({property: })
