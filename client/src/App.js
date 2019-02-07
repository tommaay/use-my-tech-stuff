import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { PageContainer } from './styled/container';
import { Nav } from './styled/nav';

import SignedinLinks from './components/Nav/SignedinLinks';
import SignedoutLinks from './components/Nav/SignedoutLinks';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import SignUp from './components/SignUp';

class App extends Component {
   render() {
      const links = this.props.isLoggedIn ? (
         <SignedinLinks />
      ) : (
         <SignedoutLinks />
      );

      return (
         <BrowserRouter>
            <>
               <Nav>{links}</Nav>
               <PageContainer>
                  <Switch>
                     <Route exact path="/" component={Dashboard} />
                     <Route path="/login" component={Login} />
                     <Route path="/signup" component={SignUp} />
                  </Switch>
               </PageContainer>
            </>
         </BrowserRouter>
      );
   }
}

const mapStateToProps = state => {
   return {
      isLoggedIn: state.users.isLoggedIn,
   };
};

export default connect(mapStateToProps)(App);
