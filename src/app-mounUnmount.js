'use strict'

import React, { Component } from 'react'
import Square from './square'
import Button from './button'
import Timer from './timer'

class App extends Component {
  constructor () {
    console.log('constructor')
    super()
    this.state = {
      showTimer: true,
      time: 0
    }
  }

  componentWillMount () {
    console.log('componentWillMount - nao manipular DOM - executa tambem no server-side')
  }

  componentDidMount () {
    console.log('componentDidMount - podera manipular o DOM - executa apenas no client-side')
  }

  render () {
    console.log('render')
    return (
      <div>
        {this.state.showTimer && <Timer time={this.state.time}/>}
        
        <button onClick={() => {
          this.setState({ time: this.state.time + 10 })
        }}>Change props</button>
      </div>
    )
  }
}

export default App
