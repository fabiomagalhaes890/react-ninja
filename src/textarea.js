'use strict'

import React, { Component } from 'react'

class TextArea extends Component {
  render () {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault()
          console.log('event', e)
        }}

        onChange={(e) => {
          console.log('name', e.target.name)
          console.log('value', e.target.value)
        }}
      >
        <input type='name' name='name' />
        <input type='email' name='email' />
        <textarea name='opa' defaultValue={'padrao\nteste'} />
        <input type='checkbox'
          onClick={(e) => {
            alert('checked')
          }} />
        <button type='submit'>Enviar</button>
      </form>
    )
  }
}

export default TextArea
