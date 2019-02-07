import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../store/actions/authActions';
import { NavItem, LinksContainer } from '../../styled/nav';

class SignedinLinks extends Component {
   render() {
      return (
         <LinksContainer>
            <NavItem to="/">Home</NavItem>
            <NavItem to={`/profile/${this.props.userId}`}>Profile</NavItem>
            <NavItem to="/login" onClick={this.props.logout}>
               Sign Out
            </NavItem>
         </LinksContainer>
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
