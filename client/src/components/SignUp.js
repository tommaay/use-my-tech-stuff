import React, { Component } from 'react';
import { connect } from 'react-redux';
import { register } from '../store/actions/authActions';
import { Form, Label, Input, Button } from '../styled/form';

class SignUp extends Component {
   state = {
      username: '',
      password: '',
      firstname: '',
      lastname: '',
      email: '',
      phone: null,
      thumbnail: '',
   };

   changeHandler = e => {
      e.preventDefault();
      this.setState({
         [e.target.id]: e.target.value,
      });
   };

   submitHandler = e => {
      e.preventDefault();
      this.props.register(this.state);
      this.props.history.push('/');
   };

   render() {
      if (this.props.loading) {
         return <h1> {this.props.message} </h1>;
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

               <Label htmlFor="firstname">First Name</Label>
               <Input
                  type="text"
                  name="firstname"
                  id="firstname"
                  onChange={this.changeHandler}
               />

               <Label htmlFor="lastname">Last Name</Label>
               <Input
                  type="text"
                  name="lastname"
                  id="lastname"
                  onChange={this.changeHandler}
               />

               <Label htmlFor="password">Password</Label>
               <Input
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.changeHandler}
               />

               <Label htmlFor="email">Email</Label>
               <Input
                  type="email"
                  name="email"
                  id="email"
                  onChange={this.changeHandler}
               />

               <Label htmlFor="phone">Phone Number</Label>
               <Input
                  type="number"
                  name="phone"
                  id="phone"
                  onChange={this.changeHandler}
               />

               <Button>Sign Up</Button>
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
   { register }
)(SignUp);
