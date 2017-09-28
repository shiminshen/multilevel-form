import React, { Component } from 'react'

import { renderTextField } from './materialFields.js'

import RadioButton, { RadioButtonGroup } from 'material-ui/RadioButton'

import MultipleStepForm from '../MultiStepForm'
import ValuesMonitor from '../ValuesMonitor'
import './ExampleForm.css'

let formData = [
  [
    {
      label: 'First Name',
      name: 'firstName',
      component: renderTextField
    }, {
      label: 'Last Name',
      name: 'lastName',
      component: renderTextField
    }
  ],
  [
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
          <RadioButton value='male' label='male' />
          <RadioButton value='female' label='female' />
        </RadioButtonGroup>
    }
  ], [
    {
      label: 'Email',
      name: 'email',
      component: renderTextField
    }
  ]
]

class SignUpForm extends Component {
  render () {
    return (
      <div>
        <MultipleStepForm
          className='example-form'
          formData={formData}
        />
        <ValuesMonitor />
      </div>
    )
  }
}

export default SignUpForm
