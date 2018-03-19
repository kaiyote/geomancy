import React, { Component } from 'react'
import { Appbar, Container, Tabs, Tab } from 'muicss/react'
import Logo from './components/Logo.js'
import './App.scss'

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
          <div className='app-title'>Geomancy</div>
        </Appbar>
        <Container>
          <Tabs defaultSelectedIndex={0} justified>
            <Tab label='Generate'>I'm the generate tab</Tab>
            <Tab label='Manual'>You can input numbers manually here</Tab>
          </Tabs>
        </Container>
      </div>
    )
  }
}

export default App
