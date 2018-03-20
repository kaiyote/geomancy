import React, { Component } from 'react'
import { Appbar, Container, Tabs, Tab } from 'muicss/react'
import Logo from './components/Logo.js'
import Manual from './components/Manual.js'
import './App.scss'

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      points: []
    }
  }

  render () {
    return (
      <div>
        <Appbar>
          <Logo />
          <div className='app-title'>Geomancy</div>
        </Appbar>
        <Container>
          {this.state.points.length > 0 ? this.resultsView() : this.generationTabs()}
        </Container>
      </div>
    )
  }

  generationTabs () {
    return (
      <Tabs defaultSelectedIndex={1} justified>
        <Tab label='Generate'>I'm the generate tab</Tab>
        <Tab label='Manual'><Manual /></Tab>
      </Tabs>
    )
  }

  resultsView () {
    return (
      <div>I AM RESULTS</div>
    )
  }
}
