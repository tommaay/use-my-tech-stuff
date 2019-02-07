import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
   getUsers,
   getUserById,
   getItemsByUserId,
} from './store/actions/usersActions';
import { getItems, getItemById } from './store/actions/itemsActions';

class App extends Component {
   render() {
      return (
         <div className="App">
            <button onClick={this.props.getItems}>Action Test</button>
         </div>
      );
   }
}

export default connect(
   null,
   { getUsers, getUserById, getItemsByUserId, getItems, getItemById }
)(App);
