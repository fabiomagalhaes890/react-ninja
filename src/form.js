'use strict'

import React, { Component } from 'react'

class Form extends Component {
  constructor () {
    super()
    this.state = {
      value: 'valor inicial'
    }
  }

  render () {
    return (
      <form>
        <input type='text' value={this.state.value} onChange={(e) => {
          this.setState({
            value: e.target.value
          })
        }} />
      </form>
    )
  }
}

export default Form
