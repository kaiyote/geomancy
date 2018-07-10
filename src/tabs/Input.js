import React, { Component } from 'react'
import {
  Grid,
  Paper,
  Tab,
  Tabs,
  TextField,
  Typography
} from '@material-ui/core'
import { Manual } from './input/'
import { Houses } from '../data'
import { TabGroup } from '../controls'

export default class Input extends Component {
  constructor (props) {
    super(props)
    this.state = { activeTab: 0, house: '' }
  }

  render () {
    return (
      <React.Fragment>
        <Paper square>
          <Tabs
            value={this.state.activeTab}
            onChange={(e, v) => this.setState({ activeTab: v })}
            centered
          >
            <Tab label='Manual' />
            <Tab label='Generate' />
          </Tabs>
        </Paper>
        <Grid container justify='center' style={{ marginBottom: '30px' }}>
          <Grid item xs={6} zeroMinWidth>
            {this.houseSelector()}
          </Grid>
        </Grid>
        <TabGroup index={this.state.activeTab}>
          <Manual generate={this.props.generate} />
          <Typography>I AM GENERATE</Typography>
        </TabGroup>
      </React.Fragment>
    )
  }

  houseSelector () {
    return (
      <TextField
        select
        label='Topic'
        value={this.state.house}
        fullWidth
        onChange={this.handleHouse.bind(this)}
        SelectProps={{ native: true }}
        helperText='Please select the topic of your question'
        margin='normal'
      >
        <option value='' />
        {[].concat
          .apply(
            [],
            Houses.map(h => h.topics.map(t => ({ value: h.number, label: t })))
          )
          .sort((a, b) => (a.label > b.label ? 1 : a.label < b.label ? -1 : 0))
          .map(x => (
            <option value={`${x.value}${x.label}`} key={x.label}>
              {x.label}
            </option>
          ))}
      </TextField>
    )
  }

  handleHouse (e) {
    let value = e.target.value
    let actualHouse = /\d+/.exec(value)[0]
    this.setState({ house: value })
    this.props.handleHouse(+actualHouse)
  }
}
