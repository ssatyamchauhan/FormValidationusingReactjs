import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super()

    this.state = {
      username:'',
      email:'',
      password:'',
      confirmpass:''
    }
  }
  change = (event) => {
    this.setState({
      [event.target.name]:event.target.value
    })
  }

  Validation = (event) =>{
    event.preventDefault(); // to prevent the page to be reload onclick of button
    let condition = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/;
    let {username,email,password,confirmpass} = this.state;

    if(username=='' || email=='' || password==''){
      document.getElementById('errors').innerHTML="fill the form";      
    }
    else if(!(username.length >= 3)){
      document.getElementById('errors').innerHTML="Minimum 3 letters in username";
      
    }
    else if(!(email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i))){
      document.getElementById('errors').innerHTML="Enter a valid email";
    }

    else if(!(password.match(condition) && password==confirmpass)){
      document.getElementById('errors').innerHTML="Enter a strong password";
    }
    else{
      document.getElementById('errors').innerHTML="form is valid";

    }    
  }

  render () {
    return (
      <div className="contact">
        <form>
          <div>
              <div className="divForm1">
                <h1>CONTACT US</h1>
              </div>
              <div className="divForm1">
                <p id="errors"></p>
              </div>
          </div>
        <div className="contact">
              <div className="divForm2">
                <input type="text" value={this.state.username}  name="username" onChange={this.change} placeholder="Your Name"/>
              </div>
              <div className="divForm2">
                <input type="email" value={this.state.email}  name="email" onChange={this.change} placeholder="Your Email" />
              </div>
              <div className="divForm2">
                <input type="password" value={this.state.password}  name="password"  onChange={this.change}placeholder="Password" />
              </div>
              <div className="divForm2">
                <input type="password" value={this.state.confirmpass}  name="confirmpass"  onChange={this.change}placeholder="Confirm Password" />
              </div>
              <div className="divForm2">
                <button onClick={this.Validation}>Submit</button>
              </div>
          </div>
        </form>
      </div>
      
    )
  }
}

export default Form;