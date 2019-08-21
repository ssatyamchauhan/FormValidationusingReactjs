import React, { Component } from 'react';

const formValid = formErrors => {
  let valid = true;

  Object.values(formErrors).forEach(val =>{
    val.length > 0 && (valid = false)
  });
  return valid
}

class Form extends Component {
  constructor() {
    super()

    this.state = {
      username:null,
      email:null,
      password:null,
      formErrors:{
        username:'',
        email:'',
        password:''
      }
    }
  }

  handleSubmit = (e) =>{
    e.preventDefault();

    if(formValid(this.state.formErrors)){
      console.log(
        `
        username: ${this.state.username}
        email: ${this.state.email}
        password:  ${this.state.password}
        `
      )
    }
    else{
      console.log('Form is Invalid')
    }
  }

  handleChange = (e) => {
    e.preventDefault();

    const condition = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    const passCondition = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    const {name , value} = e.target;
    let formErrors = this.state.formErrors;

    switch (name) {
      case "username":
        formErrors.username = 
          value.length < 3 ? "minimum 3 characters required" : "";
          break;
    
      case "email":
          formErrors.email = 
            condition.test(value) ? "" : "Invalid email address";
            break;
    
      case "password":
          formErrors.password = 
            passCondition.test(value) ? "" : "Enter Strong Password";
            break;
      default:
        break;
    }

    this.setState({
      formErrors, [name] : value
    },()=>console.log(this.state))
  };

  render () {
    const {formErrors} = this.state
    return (
      <div className="contact">
        <form>
          <div>
              <div className="divForm1">
                <h1>REACT FORM</h1>
              </div>
          </div>

      <div className="contact">
          <div className="divForm2">
            <input
            placeholder="Your Name"
            type="text"
            name="username"
            onChange={this.handleChange}
            />
            {formErrors.username.length > 0  && (
                <span className="errorMessage">{formErrors.username}</span>
              )}
            </div> 
            <div className="divForm2">
            <input
            placeholder="Email"
            type="email"
            name="email"
            onChange={this.handleChange}
            />
            {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </div> 
            <div className="divForm2">
            <input
            placeholder="Password"
            type="password"
            name="password"
            onChange={this.handleChange}
            />
            {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )}
          </div>
          <div className="divForm2"> 
            <button onClick={this.handleSubmit}>Submit</button>
          </div>
      </div>
        </form>
      </div>
      
    )
  }
}

export default Form;