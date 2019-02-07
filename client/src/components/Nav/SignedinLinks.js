import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../store/actions/authActions';
import { NavItem } from '../../styled/nav';

class SignedinLinks extends Component {
   render() {
      return (
         <React.Fragment>
            <NavItem to="/">Home</NavItem>
            <NavItem to={`/profile/${this.props.userId}`}>Profile</NavItem>
            <NavItem to="/login" onClick={this.props.logout}>
               Sign Out
            </NavItem>
         </React.Fragment>
      );
   }
}

const mapStateToProps = state => {
   return {
      userId: state.users.userId,
   };
};

export default connect(
   mapStateToProps,
   { logout }
)(SignedinLinks);
