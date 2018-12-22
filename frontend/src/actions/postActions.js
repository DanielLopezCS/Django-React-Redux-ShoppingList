import { FETCH_POSTS, NEW_POST, DELETE_POST, UPDATE_POST} from './types';

export const fetchPosts = () => dispatch => {
  const url = 'http://127.0.0.1:8000/api/items/?format=json';   

  fetch(url)
  .then(res => res.json())
  .then(posts =>
      dispatch({
        type: FETCH_POSTS,
        payload: posts
      })
    ).catch(err => {
      console.error("ERROR" + err);
  
    });
};

export const createPost = postData => dispatch => {
  const url = 'http://127.0.0.1:8000/api/items/';
  fetch(url, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
    .then(post =>
      dispatch({
        type: NEW_POST,
        payload: post
      })
    );
};

export const updatePost = postID => postData => dispatch =>
{
  //TODO
  const url = `http://127.0.0.1:8000/api/items/${postID}/`;
  fetch(url, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
    .then(post =>
      dispatch({
        type: NEW_POST,
        payload: post
      })
    );

};

export const deletePost = postID => dispatch =>
{
  const url = `http://127.0.0.1:8000/api/items/${postID}/`;
  console.log("URL USED FOR DELETE: " + url);

  fetch(url, {
    method: 'DELETE'
  })
  .then(res => {
    

  })
  

};