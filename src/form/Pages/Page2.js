import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'

class Page2 extends Component {

  
  render() {
    return (
      <form>
        <label htmlFor='input2'>Input2</label>
        <Field
          name='input2'
          id='input2'
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
})(Page2);
