import React, { Component } from 'react'
import Figure from './Figure.js'
import Info from './Info.js'

export default class ShieldChart extends Component {
  constructor (props) {
    super(props)
    this.state = {}

    this.setState = this.setState.bind(this)
  }

  render () {
    return (
      <div className='chart'>
        <div className='row'>
          {this.props.mothers.map((m, i) => (
            <Figure figure={m} key={i} index={i + 1} className='mother' onHover={this.setState} />
          ))}
          {this.props.daughters.map((d, i) => (
            <Figure figure={d} key={i} index={i + 1} className='daughter' onHover={this.setState} />
          ))}
        </div>
        <div className='row'>
          {this.props.nieces.map((n, i) => (
            <Figure figure={n} key={i} index={i + 1} className='niece' onHover={this.setState} />
          ))}
        </div>
        <div className='row'>
          {this.props.witnesses.map((w, i) => (
            <Figure figure={w} key={i} index={i + 1} className='witness' onHover={this.setState} />
          ))}
        </div>
        <div className='row'>
          <Figure figure={this.props.reconciler} className='reconciler' onHover={this.setState} />
          <Figure figure={this.props.judge} className='judge' onHover={this.setState} />
          <Info data={this.state.data} />
        </div>
      </div>
    )
  }
}
