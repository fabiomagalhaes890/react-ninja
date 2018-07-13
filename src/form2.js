'use strict'

import React, { Component } from 'react'

class Form2 extends Component {
  constructor () {
    super()
    this.state = {
      value: 2
    }
  }

  render () {
    return (
      <form>
        <select value={this.state.value} onChange={(e) => {
          this.setState({
            value: e.target.value
          })
        }}>
          <option value='1'>Opcao 1</option>
          <option value='2'>Opcao 2</option>
          <option value='3'>Opcao 3</option>
        </select>

        <select multiple value={['1', '3']} onChange={(e) => {
          this.setState({
            value: e.target.value
          })
        }}>
          <option value='1'>Opcao 1</option>
          <option value='2'>Opcao 2</option>
          <option value='3'>Opcao 3</option>
        </select>
      </form>
    )
  }
}

export default Form2
