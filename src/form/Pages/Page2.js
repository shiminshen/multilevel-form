import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import { renderTextField} from '../materialFields.js'

class Page2 extends Component {

  
  render() {
    return (
      <form>
        <Field
          name='input2'
          id='input2'
          label='input2'
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
})(Page2);
