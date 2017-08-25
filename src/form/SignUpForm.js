import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom'

import Page1 from './Pages/Page1.js'
import Page2 from './Pages/Page2.js'
import Page3 from './Pages/Page3.js'

class SignUpForm extends Component {

  
  render() {
    let {
      location: {
        hash
      }
    } = this.props

    let hashValue = Number(hash.substr(1)) || 1
    let prevHashNumber = hashValue - 1
    let nextHashNumber = hashValue + 1

    return (
      <div>
        {hashValue === 1 && <Page1/>}
        {hashValue === 2 && <Page2/>}
        {hashValue === 3 && <Page3/>}
        <Link to={{
          pathname: '/form',
          hash: prevHashNumber.toString()
          }}>Prev</Link>
        
        <Link to={{
          pathname: '/form',
          hash: nextHashNumber.toString()
          }}>Next</Link>
      </div>
    );
  }
}

export default SignUpForm;
