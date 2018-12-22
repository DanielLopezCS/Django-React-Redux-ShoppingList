import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Posts from './components/Posts/Posts';
import PostForm from './components/Posts/Postform';

import {Grid} from 'semantic-ui-react';



//Test
class App extends Component {
  render() {
    return (
      
     
        
        <Grid textAlign = 'center' verticalAlign ='middle' className='app'>
        
        <Grid.Column style = {{maxWidth:550}}>
              
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Shopping List CRUD SPA</h1>
          </header>
          <PostForm />
          <hr />
          <Posts />

        </div>
        </Grid.Column>
      </Grid>
    
    );
  }
}

export default App;
