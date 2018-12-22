import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts,updatePost, deletePost } from '../../actions/postActions';
import {Segment, Button} from 'semantic-ui-react';

class Posts extends Component {
  componentWillMount() {
  this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }
  onUpdate = (postID) =>
  {
  
    console.log("Update BUTTON ID: " + postID);
  }
  onDelete = (postID) =>
  {
    console.log("DELETE BUTTON ID: "+ postID);
    this.props.deletePost(postID);
    //console.log("ON DELETE PRESSED: " + this.post.key);
    
  }
  render() {
    
    const postItems = this.props.posts.map(post => (
      <div key={post.id} >
      <Segment.Group raised>
      
        <Segment inverted color='blue'> <b>{post.name}</b> </Segment>
        <Segment textAlign='left'> Note: {post.description}</Segment>
        <Segment textAlign='left'> To: {post.reciever}</Segment>
        <Segment textAlign='left'> Price: {post.price}</Segment>
        <Segment textAlign='right'>
        
        <Button icon = 'edit outline' color = 'yellow' size = 'small' type="submit" onClick={ () => this.onUpdate(post.id)}></Button>
        <Button icon = 'window close' color = 'red' size = 'small' type="submit" onClick = {()=>this.onDelete(post.id)}></Button>
       
        </Segment >
    </Segment.Group>
    <br></br>

    </div>
    ));
    return (
      <div>
        <h2>Shopping List</h2>
        {
          postItems.length === 0 &&
        <h2>
          <i>Your Shopping List Is Empty ... </i>
        </h2>
      }
              
                <i>You Have {postItems.length} Items In Your Shopping List.</i>

       {postItems}
       
      </div>
    );
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  updatePost: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
};

const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
});

export default connect(mapStateToProps, { fetchPosts,updatePost,deletePost })(Posts);