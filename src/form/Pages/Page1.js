import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import { renderTextField} from '../materialFields.js'

class Page1 extends Component {

  
  render() {
    return (
      <form>
        <Field
          name='input1'
          id='input1'
          label='Input1'
          component={renderTextField}
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
