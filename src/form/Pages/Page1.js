import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'

import RadioButton from 'material-ui/RadioButton'
import { renderTextField, renderRadioGroup } from '../materialFields.js'
import './Page1.css'

class Page1 extends Component {

  render() {
    return (
      <form className='page1-form'>
        <Field
          name='firstName'
          id='firstName'
          label='First Name'
          component={renderTextField}
        />
        <Field
          name='lastName'
          id='lastName'
          label='Last Name'
          component={renderTextField}
        />
        <Field
          name='email'
          id='email'
          label='Email'
          component={renderTextField}
        />
        <Field 
          name='sex' 
          style={{maxWidth: 250}}
          component={renderRadioGroup}
        >
          <RadioButton value='male' label='male' />
          <RadioButton value='female' label='female' />
        </Field>
      </form>
      );
  }
}

export default reduxForm({
  form: 'wizard',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(Page1);
