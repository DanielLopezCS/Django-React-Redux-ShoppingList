import React, { Component } from 'react';
import {Grid, Form, Segment, Button, Header, Message, Icon} from 'semantic-ui-react';

export default class ItemForm extends Component {

    state = {
        username:'',
        email:'',
        password:'',
        passwordConfirmation:'',
        errors:[]
    }

    handleChange = event =>{
        this.setState({[event.target.name]:event.target.value});
    }
    isFormValid = () =>{
        let errors = [];
        let error;

        if(this.isFormEmpty(this.state))
        {
            error = {message:'Fill in all fields'};
            this.setState({errors})
        } else if(!this.isPasswordValid())
        {

        } 
        else
        {
            return true;
        }
    }
    isFormEmpty = ({ username,email,password,passwordConfirmation})=>{
        return !username.length || !email.length || !password.length||!passwordConfirmation.length; 
    } 
    handleSubmit = event =>
    {  
        console.log("Pressed Submit");
        console.log("USERNAME: " + this.state.username)
    }
  render() {
    const {username,email,password,passwordConfirmation} = this.state; 

    return (
        
        <div className="App">
        <header className="App-header">
        <h1>Input Form</h1>
          <div>
          <Form onSubmit = {this.handleSubmit}>
                        <Segment stacked>
                            <Form.Input fluid name='username' icon='user' iconPosition='left' 
                            placeholder ='Username' onChange = {this.handleChange} type = 'text'
                            value = {username} />

                             <Form.Input fluid name='email' icon='mail' iconPosition='left' 
                            placeholder ='Email Address' onChange = {this.handleChange} type = 'email'
                            value = {email}/>

                             <Form.Input fluid name='password' icon='lock' iconPosition='left' 
                            placeholder ='Password' onChange = {this.handleChange} type = 'password'
                            value = {password}/>
                            
                            <Form.Input fluid name='passwordConfirmation' icon='repeat' iconPosition='left' 
                            placeholder ='Password Confirmation' onChange = {this.handleChange} type = 'password'
                            value = {passwordConfirmation}/>
                            <Button color = 'orange' fluid size = 'large'>Submit</Button>
                        </Segment>

                    </Form>
          </div>
        </header>
      </div>
    )
  }
}
