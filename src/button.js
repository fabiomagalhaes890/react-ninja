'use strict'

import React from 'react'

const Button = ({ children, handleClick }) => (
  <button className='main-class' onClick={handleClick}>{children}</button>
)

export default Button
