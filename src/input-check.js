'use strict'

import React, { Component } from 'react'
import PropTypes from 'prop-types'

class InputCheck extends Component {
  constructor () {
    super()
    this.state = {
      checked: false,
      showContent: false
    }
  }

  render () {
    return (
      <div>
        <label>
          <input type='checkbox' value={this.state.checked}
            onChange={() => {
              this.setState({
                checked: !this.state.checked
              },
                () => {
                  this.setState({ showContent: this.state.checked })
                }
              )
            }} />
          Mostrar conteudo
      </label>
        {this.state.showContent && <div> Olha eu aqui! </div>}
      </div>
    )
  }
}

export default InputCheck