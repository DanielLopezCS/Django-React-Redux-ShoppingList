import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost,deletePost } from '../../actions/postActions';
import {Form, Segment, Button} from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css'


class PostForm extends Component {

  state = {
    name:'',
    description:'',
    reciever:'',
    price:'',
    loading:false,
  }
  onDelete = (e) =>
  {
    e.preventDefault();
    
    const post = {
      name:this.state.name,
      description:this.state.description,
      reciever:this.state.reciever,
      price:this.state.price,
     
    };
    this.setState({loading:true});
    this.props.deletePost(post);

  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) =>{
    e.preventDefault();
    
    const post = {
      name:this.state.name,
      description:this.state.description,
      reciever:this.state.reciever,
      price:this.state.price,
     
    };
    
    this.setState({loading:true});
    this.props.createPost(post);

  }

  render() {

    const {name,description,reciever,price} = this.state; 


    return (
      <div>
  
        <h2>Input Form</h2>
       
          <div>
                  <Form onSubmit = {this.onSubmit}>
                                <Segment stacked>
                                    <Form.Input fluid name='name' icon='gift' iconPosition='left' 
                                    placeholder ='Item Name' onChange = {this.onChange} type = 'text'
                                    value = {name} />

                                    <Form.Input fluid name='description' icon='sticky note' iconPosition='left' 
                                    placeholder ='Note' onChange = {this.onChange} type = 'text'
                                    value = {description}/>

                                    <Form.Input fluid name='reciever' icon='user' iconPosition='left' 
                                    placeholder ='Reciever Name' onChange = {this.onChange} type = 'text'
                                    value = {reciever}/>
                                    
                                    <Form.Input fluid name='price' icon='dollar sign' iconPosition='left' 
                                    placeholder ='Item Price' onChange = {this.onChange} type = 'text'
                                    value = {price}/>
                                    <Button color = 'blue' fluid size = 'large' type="submit" >Submit</Button>
                                </Segment>

                            </Form>
            
          </div>
     
    
      
      </div>
    );
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired
};



export default connect(null, { createPost,deletePost })(PostForm);