import React, { Component } from 'react'
import { Appbar, Container } from 'muicss/react'
import Logo from './components/Logo.js'
import Generate from './components/Generate.js'
import Results from './components/Results.js'
import './App.scss'

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      results: [],
      house: 4
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
          { this.state.results.length > 0
            ? <Results mothers={this.state.results} />
            : <Generate generate={results => this.setState({ results })}
              changeHouse={house => this.setState({ house })} />
          }
        </Container>
      </div>
    )
  }
}
