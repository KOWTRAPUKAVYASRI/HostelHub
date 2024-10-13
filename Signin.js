//signIn.js
import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import './signIn.css';

class SignIn extends Component {
  constructor() {
    super();
    this.state = { username: '', password: '', alertMessage: '', alertType: 'error', email: '' };
  }

  changeName = (e) => {
    this.setState({ username: e.target.value });
  };

  changePassword = (e) => {
    this.setState({ password: e.target.value });
  };
  changeEmail= (e) => {
    this.setState({ email: e.target.value });
  };

  submitName = (e) => {
    e.preventDefault();
    const { username, password,email } = this.state;

    if (username.trim() === '' || password.trim() === ''||email.trim()==='') {
      this.setState({ alertMessage: 'Please enter alll the fields', alertType: 'error' });
    } else {
      // Assume successful sign-in
      this.setState({ alertMessage: '', alertType: 'correct' });
      this.props.onSignIn(username, password,email); // Call the onSignIn prop
    }
  };

  render() {
    const { alertMessage, alertType } = this.state;
    return (
      <div className="container" style={{ backgroundColor: 'white' }}>
        <form className="container1" style={{ padding: "20px", backgroundColor: 'white' }} onSubmit={this.submitName}>
          <h1 className="heading" style={{ fontSize: '30px' }}>Sign In</h1>
          <input className="inp" type='text' placeholder='Username' style={{ width: "90%", margin: "10px" }} onChange={this.changeName} />
          <input className="inp2" type='password' placeholder='Password' style={{ margin: "10px", width: "90%" }} onChange={this.changePassword} />
          <input className="em" type='email' placeholder='email' style={{ margin: "10px", width: "90%" }} onChange={this.changeEmail} />
          <button type="submit" className='sub' style={{ margin: "5px", float: 'center', backgroundColor: "lightblue" }}>Submit</button>
          <p>Already have account</p>
          <a href="/login">Login</a>{alertMessage && (
            <h3 className={`alert ${alertType}`} style={{ margin: "10px", backgroundColor: "black", textAlign: "center" }}>
              {alertMessage}
            </h3>
          )}
        </form>
      </div>
    );
  }
}

// Wrap the SignIn component with useNavigate for navigation
const SignInWithNavigate = () => {
  const navigate = useNavigate();
  const handleSignIn = () => {
    navigate('/login'); // Redirect to Login page
  };

  return <SignIn onSignIn={handleSignIn} />;
};

export default SignInWithNavigate;