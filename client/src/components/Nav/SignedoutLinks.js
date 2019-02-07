import React from 'react';
import { NavItem, LinksContainer } from '../../styled/nav';

const SignedoutLinks = () => {
   return (
      <LinksContainer>
         <NavItem to="/">Home</NavItem>
         <NavItem to="/login">Login</NavItem>
         <NavItem to="/signup">Sign Up</NavItem>
      </LinksContainer>
   );
};

export default SignedoutLinks;
