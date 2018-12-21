import React, { Component } from 'react';
import PropTypes from 'prop-types'
import ItemList from './ItemList';
import ItemForm from './ItemForm';
import {Grid} from 'semantic-ui-react';
import { connect } from 'react-redux';


class TodoList extends Component {
  
  render() {
    return (
      <Grid textAlign = 'center' verticalAlign ='middle' className='app'>
         <Grid.Column style = {{maxWidth:550}}>
              
              
              {/*<ItemForm items={this.props.items}/>
              <ItemList/>*/}
            
          </Grid.Column>
        
          {/* <Grid.Column style ={{maxWidth:550}} >
         <Item/>
          </Grid.Column>
          */}

      </Grid>
      
    
    )
  }
}

TodoList.propTypes = {
  items: PropTypes.array.isRequired
}

function mapStateToProps(state) {
  return {
    items: state.items
  }
}

export default connect(mapStateToProps)(TodoList);

