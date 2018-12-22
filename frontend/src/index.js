import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider, connect } from "react-redux";

import store from './store';


import {
    BrowserRouter as Router,
    Switch,
    Route,
    withRouter
  } from "react-router-dom";

class Root extends React.Component {
    
    render() {
        return  (
          <Switch>
            <Route exact path="/" component={App} />
            {/*<Route path="/update" component={UpdateForm} />*/}
          </Switch>
        );
      }
 }

const RootWithAuth = withRouter(
  connect(
    null,
  )(Root)
);


ReactDOM.render(
<Provider store={store}>
    <Router>
        <RootWithAuth />
    </Router>
</Provider>, 

document.getElementById('root'));
registerServiceWorker();
