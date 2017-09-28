import React, { Component } from 'react'

import FlatButton from 'material-ui/FlatButton'

import './Home.css'

class Home extends Component {
  render () {
    let {
      history
    } = this.props

    return (
      <div className='home'>
        <FlatButton
          label='Show form'
          onClick={() => history.push('/form')}
        />
      </div>
    )
  }
}

export default Home
