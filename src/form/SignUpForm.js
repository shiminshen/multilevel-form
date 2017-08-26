import React, { Component } from 'react';

import FlatButton from 'material-ui/FlatButton';

import Page1 from './Pages/Page1.js'
import Page2 from './Pages/Page2.js'
import Page3 from './Pages/Page3.js'

import './SignUpForm.css'

class SignUpForm extends Component {

  render() {
    let {
      history,
      location: {
        hash
      }
    } = this.props

    let hashValue = Number(hash.substr(1)) || 1
    let prevHashNumber = hashValue - 1
    let nextHashNumber = hashValue + 1

    return (
      <div className='signup-form'>
        {hashValue === 1 && <Page1/>}
        {hashValue === 2 && <Page2/>}
        {hashValue === 3 && <Page3/>}
        <div>
          <FlatButton secondary={true}
            label='Prev'
            onClick={() => history.push({
            pathname: '/form',
            hash: prevHashNumber.toString()
            })}
          />
          <FlatButton primary={true}
            label='Next'
            onClick={() => history.push({
            pathname: '/form',
            hash: nextHashNumber.toString()
            })}
          />
        </div>
      </div>
      );
  }
}

export default SignUpForm;
