import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../store/actions/authActions';
import { Form, Label, Input, Button } from '../styled/form';

class Login extends Component {
   state = {
      username: '',
      password: '',
   };

   changeHandler = e => {
      e.preventDefault();
      this.setState({
         [e.target.id]: e.target.value,
      });
   };

   submitHandler = e => {
      e.preventDefault();
      this.props.login(this.state);
      this.props.history.push('/');
   };

   render() {
      if (this.props.loading) {
         return <h1>{this.props.message}</h1>;
      } else {
         return (
            <Form onSubmit={this.submitHandler}>
               <Label htmlFor="username">Username</Label>
               <Input
                  type="text"
                  name="username"
                  id="username"
                  onChange={this.changeHandler}
               />

               <Label htmlFor="password">Password</Label>
               <Input
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.changeHandler}
               />

               <Button>Sign In</Button>
            </Form>
         );
      }
   }
}

const mapStateToProps = state => {
   return {
      loading: state.users.loading,
      isLoggedIn: state.users.isLoggedIn,
      message: state.users.message,
   };
};

export default connect(
   mapStateToProps,
   { login }
)(Login);
