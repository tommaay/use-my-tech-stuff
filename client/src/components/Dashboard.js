import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItems } from '../store/actions/itemsActions';

class Dashboard extends Component {
   componentWillMount() {
      this.props.getItems();
   }

   render() {
      if (this.props.loading) {
         return <h1>{this.props.message}</h1>;
      } else if (this.props.items) {
         return (
            <>
               {this.props.items.map(item => (
                  <div key={item.id}>
                     <h1>{item.title}</h1>
                  </div>
               ))}
            </>
         );
      }
   }
}

const mapStateToProps = state => {
   return {
      items: state.items.items,
      loading: state.users.loading,
      message: state.users.message,
      isLoggedIn: state.users.isLoggedIn,
   };
};

export default connect(
   mapStateToProps,
   { getItems }
)(Dashboard);
