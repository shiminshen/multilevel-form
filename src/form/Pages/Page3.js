import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'

class Page3 extends Component {

  render() {
    return (
      <form>
        <label htmlFor='input3'>Input3</label>
        <Field
          name='input3'
          id='input3'
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
})(Page3);
