import React, { Component } from 'react'
import { Option, Select, Tab, Tabs, Textarea } from 'muicss/react'
import ManualInput from './Manual.js'
import { Houses } from '../data/data.js'

export default class Generate extends Component {
  constructor (props) {
    super(props)
    let options = [].concat.apply([], Houses.map(h =>
      h.topics.map(t =>
        ({value: h.number, label: t})
      )
    )).sort((a, b) => a.label > b.label ? 1 : a.label < b.label ? -1 : 0)

    this.state = {
      options,
      option: options[0].value + '.0'
    }
  }

  changeHouse (e) {
    this.setState({option: e.target.value})
    this.props.changeHouse(Number.parseInt(e.target.value.split('.')[0], 10))
  }

  render () {
    return (
      <React.Fragment>
        <Textarea placeholder='Type your question here (optional)' />
        <Select label='Select the topic that matches your question'
          value={this.state.option} onChange={e => this.changeHouse(e)}>
          {this.state.options.map((option, i) =>
            <Option key={i} value={`${option.value}.${i}`} label={option.label} />)
          }
        </Select>
        <Tabs defaultSelectedIndex={1} justified>
          <Tab label='Generate'>I'm the generate tab</Tab>
          <Tab label='Manual'><ManualInput generate={this.props.generate} /></Tab>
        </Tabs>
      </React.Fragment>
    )
  }
}
