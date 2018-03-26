import React, { Component } from 'react'
import { Tab, Tabs } from 'muicss/react'
import ShieldChart from './ShieldChart.js'
import HouseChart from './HouseChart.js'

export default class Results extends Component {
  constructor (props) {
    super(props)
    let daughters = [3, 2, 1, 0].map(i => this.createDaughter(i, props.mothers))
    let nieces = this.combineFigures(props.mothers.concat(daughters))
    let witnesses = this.combineFigures(nieces)
    let judge = this.combineFigures(witnesses)[0]
    let reconciler = this.combineFigures([judge, props.mothers[0]])[0]
    this.state = {
      mothers: props.mothers,
      daughters,
      nieces,
      witnesses,
      judge,
      reconciler
    }
  }

  render () {
    return (
      <Tabs defaultSelectedIndex={0} justified>
        <Tab label='Shield Chart'>
          <ShieldChart mothers={this.state.mothers}
            daughters={this.state.daughters}
            nieces={this.state.nieces}
            witnesses={this.state.witnesses}
            judge={this.state.judge} reconciler={this.state.reconciler}
            quesited={this.props.quesited} />
        </Tab>
        <Tab label='House Chart'>
          <HouseChart mothers={this.state.mothers}
            daughters={this.state.daughters}
            nieces={this.state.nieces}
            quesited={this.props.quesited} />
        </Tab>
      </Tabs>
    )
  }

  createDaughter (position, mothers) {
    return (this.getBit(position, mothers[0]) << 3) |
      (this.getBit(position, mothers[1]) << 2) |
      (this.getBit(position, mothers[2]) << 1) |
      this.getBit(position, mothers[3])
  }

  combineFigures (figures) {
    let results = []
    for (let i = 0; i < figures.length - 1; i++) results.push(figures[i] ^ figures[++i])
    return results
  }

  getBit (position, figure) {
    return (figure >> position) & 1
  }
}
