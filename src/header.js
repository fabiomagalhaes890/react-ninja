'use strict'

import React from 'react'

const Header = ({ color, text }) => (
  <div style={{
    background: color,
    height: '100px'
  }}>
    <div style={{
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <h1>{ `${text}` }</h1>
    </div>
  </div>
)

export default Header
