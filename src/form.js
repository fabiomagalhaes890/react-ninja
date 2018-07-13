'use strict'

import React, { Component } from 'react'

class Form extends Component {
  constructor () {
    super()
    this.state = {
      value: 'controlled component',
      checked: false
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
        <input type='text' defaultValue='uncontrolled component' />
        <label>
          <input type='checkbox' value='controlledComponent'
            checked={this.state.checked}
            onChange={(e) => {
              this.setState({
                checked: !this.state.checked
              })
            }} />
          check
        </label>
        <label>
          <input type='checkbox' value='uncontrolledComponent'
            defaultChecked='true' />
          check
        </label>
        <input type='radio' name='rd' value='1' defaultChecked='true' />Radio 1
        <input type='radio' name='rd' value='2' />Radio 2
      </form>
    )
  }
}

export default Form
