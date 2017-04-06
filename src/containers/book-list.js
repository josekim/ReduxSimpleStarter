import React, { Component } from 'react';
import { connect } from 'react-redux';
import {selectBook} from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList(){
    return this.props.books.map((book) => {
      return  (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStatetoProps(state){
  // whatever is returned will show up as props inside book list-group
  return {
    books: state.books
  };
}

//anything returned from this function will end up as props
//on the booklist container
function mapDispatchToProps(dispatch) {
//whever selectBook is called, result should be passed
//to all our reducers
  return bindActionCreators({selectBook:selectBook},dispatch);

}
//PromoteBookLIst from a component to a container - it needs to know about
//this new dispatch method, selectbook. Make it available
//as prop.
export default connect(mapStatetoProps,mapDispatchToProps)(BookList);

// when you forge a component with React and Redux - It becomes a Container - a smart Component
