import {
  AppBar,
  Avatar,
  Tab,
  Tabs,
  Toolbar,
  Typography
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import logo from './logo.svg'
import { Input, House, Shield } from './tabs'
import { add, recombine } from './util/Figure.js'
import withRoot from './withRoot.js'
import { TabGroup } from './controls'

const styles = {
  logo: {
    height: 60,
    width: 60,
    marginRight: 10,
    transform: 'rotate(-10deg)'
  }
}

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      mothers: [],
      house: 0,
      activeTab: 0
    }
  }

  render () {
    return (
      <React.Fragment>
        <AppBar position='static'>
          <Toolbar>
            <Avatar alt='logo' src={logo} className={this.props.classes.logo} />
            <Typography variant='display1' color='inherit'>Geomancy</Typography>
            <Tabs
              value={this.state.activeTab}
              onChange={(_, v) => this.setState({ activeTab: v })}
              centered
              style={{ flexGrow: 1 }}
            >
              <Tab label='Input' />
              <Tab
                label='House Chart'
                disabled={this.state.mothers.length === 0}
              />
              <Tab
                label='Shield Chart'
                disabled={this.state.mothers.length === 0}
              />
            </Tabs>
          </Toolbar>
        </AppBar>
        <TabGroup index={this.state.activeTab}>
          <Input
            generate={data => this.generate(data)}
            handleHouse={house => this.setState({ house })}
          />
          <House {...this.state} />
          <Shield {...this.state} />
        </TabGroup>
      </React.Fragment>
    )
  }

  generate (data) {
    let mothers = data
    let daughters = ['fire', 'air', 'water', 'earth'].map(e =>
      recombine(data, e)
    )
    let nieces = add(mothers.concat(daughters))
    let witnesses = add(nieces)
    let judge = add(witnesses)[0]
    let reconciler = add([judge, mothers[0]])[0]

    this.setState({ mothers, daughters, nieces, witnesses, judge, reconciler })
  }
}

export default hot(module)(withRoot(withStyles(styles)(App)))
