import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'

class Page1 extends Component {

  
  render() {
    return (
      <form>
        <label htmlFor='input1'>Input1</label>
        <Field
          name='input1'
          id='input1'
          component='input'
        />
      </form>
    );
  }
}

export default reduxForm({
  form: 'wizard',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(Page1);
