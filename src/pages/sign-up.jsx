import React, { Component } from 'react';

class SignUp extends Component {

  constructor(props) {
    super(props);
    console.log("SignUp Page",this.props.location.state.account.email);

    this.state = {
      newAccount: this.props.location.state.account
    };

  }

  componentDidMount(){
    
  }

  render() {
    return (
      <article className="sign-up">
        <section className="card  art__stagger-in art__stagger-out">
          Welcome {this.state.newAccount.email} Sign Up
        </section>
      </article>
    );
  }
}

export default SignUp;
