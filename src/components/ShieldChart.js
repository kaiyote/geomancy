import React, { Component } from 'react'
import { Col, Row } from 'muicss/react'
import Figure from './Figure.js'

export default class ShieldChart extends Component {
  render () {
    return (
      <div className='chart'>
        <Row>
          {this.props.daughters.reverse().map((d, i) => (
            <Col md='1' md-offset={i === 0 ? '2' : '0'} key={i} className='figure'><Figure figure={d} /></Col>
          ))}
          {this.props.mothers.reverse().map((m, i) => (
            <Col md='1' key={i} className='figure'><Figure figure={m} /></Col>
          ))}
        </Row>
        <Row>
          {this.props.nieces.reverse().map((n, i) => (
            <Col md='2' md-offset={i === 0 ? '2' : '0'} key={i} className='figure'><Figure figure={n} /></Col>
          ))}
        </Row>
        <Row>
          {this.props.witnesses.reverse().map((w, i) => (
            <Col md='4' md-offset={i === 0 ? '2' : '0'} key={i} className='figure'><Figure figure={w} /></Col>
          ))}
        </Row>
        <Row className='judge-row'>
          <Col md='2' md-offset='5' className='figure'><Figure figure={this.props.judge} /></Col>
          <Col md='1' md-offset='4' className='figure'><Figure figure={this.props.reconciler} /></Col>
        </Row>
      </div>
    )
  }
}
