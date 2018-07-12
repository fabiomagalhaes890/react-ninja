'use strict'

import React, { Component } from 'react'
import Header from './header'

class App extends Component {
  render () {
    return (
      <div className='container' onClick={(e) => {
        alert('clicou')
      }}>
        <Header color='gray' text='Maga' />
      </div>
    )
  }
}

export default App
