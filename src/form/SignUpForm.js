import React, { Component } from 'react';

import { renderTextField, renderRadioGroup } from './materialFields.js'

import { RadioButtonGroup } from 'material-ui/RadioButton'
import RadioButton from 'material-ui/RadioButton'
import MultilevelForm from './MultilevelForm.js'
import './SignUpForm.css'

let formData = [
  [
    {
      label: 'First Name',
      name: 'firstName',
      component: renderTextField,
    },
    {
      label: 'Last Name',
      name: 'lastName',
      component: renderTextField,
    },
    {
      label: 'Sex',
      name: 'sex',
      style: {maxWidth: 250},
      component: ({ input, ...rest }) =>
      <RadioButtonGroup
        {...input}
        {...rest}
        valueSelected={input.value}
        onChange={(event, value) => input.onChange(value)}
      >
        <RadioButton value='male' label='male'/>
        <RadioButton value='female' label='female'/>
      </RadioButtonGroup>
    }
  ],
  [
    {
      label: 'Email',
      name: 'email',
      component: renderTextField,
      children: null
    },
    {
      label: 'Sex',
      name: 'sex',
      component: ({ input, ...rest }) =>
      <RadioButtonGroup
        {...input}
        {...rest}
        style={{maxWidth: 250}}
        valueSelected={input.value}
        onChange={(event, value) => input.onChange(value)}
      >
        <RadioButton value='male' label='male'/>
        <RadioButton value='female' label='female'/>
      </RadioButtonGroup>
    }
  ]
]

class SignUpForm extends Component {

  render() {

    return (
      <MultilevelForm 
        className='signup-form' 
        formData={formData}
      />
      );
  }
}

export default SignUpForm;
