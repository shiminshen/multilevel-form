import React, { Component } from 'react'

import FlatButton from 'material-ui/FlatButton'
import { withRouter } from 'react-router'
import SingleStepForm from './SingleStepForm.js'

import './MultiStepForm.css'

class MultiStepForm extends Component {
  render () {
    let {
      history,
      location: {
        hash
      },
      formData,
      className,
      style
    } = this.props

    let hashValue = Number(hash.substr(1)) || 1
    let dataIdx = hashValue - 1

    let prevHashNumber = hashValue < 1 ? 1 : hashValue - 1
    let nextHashNumber = hashValue > formData.length - 1 ? formData.length : hashValue + 1

    return (
        formData[dataIdx] &&
        <SingleStepForm
          className={className}
          style={style}
          formData={formData[dataIdx]}
        >
          <div className='multistep-navigation-btn'>
            <FlatButton secondary
              label='Prev'
              onClick={() => history.push({
                pathname: '/form',
                hash: prevHashNumber.toString()
              })}
            />
            <FlatButton primary
              label='Next'
              onClick={() => history.push({
                pathname: '/form',
                hash: nextHashNumber.toString()
              })}
            />
          </div>
        </SingleStepForm>
    )
  }
}

export default withRouter(MultiStepForm)
