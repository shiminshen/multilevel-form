import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'

class SingleStepForm extends Component {

  render() {

    let {
      className,
      style,
      formData,
      children
    } = this.props;

    return (
      <form className={className} style={style}>
        {
        formData && formData.map(( data, idx ) => <Field key={idx} {...data}/>)
        }
        {children}
      </form>
    );
  }
}

export default reduxForm({
  form: 'wizard',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(SingleStepForm);
