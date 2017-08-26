import React, { Component } from 'react';

import FlatButton from 'material-ui/FlatButton'

class Home extends Component {

  
  render() {

    let {
      history
    } = this.props

    return (
      <FlatButton
        label='Show form'
        onClick={() => history.push('/form')}
      />
    );
  }
}

export default Home;
