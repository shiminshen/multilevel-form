import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import { renderTextField} from '../materialFields.js'

class Page3 extends Component {

  render() {
    return (
      <form>
        <Field
          name='input3'
          id='input3'
          label='input3'
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
})(Page3);
