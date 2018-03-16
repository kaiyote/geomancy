import React, { Component } from 'react'
import Appbar from 'muicss/lib/react/appbar'
import Button from 'muicss/lib/react/button'
import Container from 'muicss/lib/react/container'
import Logo from './components/Logo.js'
import './App.scss'
import colors from './styles/__colors.scss'
console.log(colors)

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div>
        <Appbar>
          <Logo />
          <div className='mui--text-display3 mui--appbar-height' style={{display: 'inline-block'}}>Geomancy</div>
        </Appbar>
        <Container>
          <Button color='primary'>button</Button>
        </Container>
      </div>
    )
  }
}

export default App
