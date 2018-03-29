import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import { AppBar, Avatar, Tab, Tabs, Toolbar, Typography } from 'material-ui'
import { withStyles } from 'material-ui/styles'
import { Input } from './tabs'
import logo from './logo.svg'
import withRoot from './withRoot.js'

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
      results: [],
      house: 4,
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
            <Tabs value={this.state.activeTab}
              onChange={(e, v) => this.setState({activeTab: v})}
              centered style={{flexGrow: 1}}>
              <Tab label='Input' />
              <Tab label='House Chart' disabled={this.state.results.length === 0} />
              <Tab label='Shield Chart' disabled={this.state.results.length === 0} />
            </Tabs>
          </Toolbar>
        </AppBar>
        {this.state.activeTab === 0 && <Input generate={data => this.setState({results: data})} />}
        {this.state.activeTab === 1 && <Typography component='div'>SHIELD TAB</Typography>}
        {this.state.activeTab === 2 && <Typography component='div'>HOUSE TAB</Typography>}
      </React.Fragment>
    )
  }
}

export default hot(module)(withRoot(withStyles(styles)(App)))
