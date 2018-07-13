'use strict'

import React, { Component } from 'react'

class TextArea extends Component {
  render () {
    return (
      <form>
        <textarea defaultValue={'padrao\nteste'} />
      </form>
    )
  }
}

export default TextArea
