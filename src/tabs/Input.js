import React, { Component } from 'react'
import { Paper, Tab, Tabs, Typography } from 'material-ui'
import { Manual } from './input/'

export default class Input extends Component {
  constructor (props) {
    super(props)
    this.state = { activeTab: 0 }
  }

  render () {
    return (
      <React.Fragment>
        <Paper square>
          <Tabs value={this.state.activeTab}
            onChange={(e, v) => this.setState({activeTab: v})}
            centered>
            <Tab label='Manual' />
            <Tab label='Generate' />
          </Tabs>
        </Paper>
        {this.state.activeTab === 0 && <Manual generate={this.props.generate} />}
        {this.state.activeTab === 1 && <Typography>I AM GENERATE</Typography>}
      </React.Fragment>
    )
  }
}
