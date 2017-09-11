import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getFormValues } from 'redux-form'

import JSONTree from 'react-json-tree'
import './ValuesMonitor.css'

class ValuesMonitor extends Component {

  render() {
    let {
      values
    } = this.props;
    console.log(values)

    return (
      <div>
        <h3 className='text-left'>Values</h3>

        <div className="json-tree">
          <JSONTree data={values} theme='bright'/>
        </div>
      </div>
    );
  }
}

export default connect( state => ({
  values: getFormValues('wizard')(state)
}))( ValuesMonitor );
