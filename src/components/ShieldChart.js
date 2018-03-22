import React, { Component } from 'react'
import { Col, Row } from 'muicss/react'
import Figure from './Figure.js'

export default class ShieldChart extends Component {
  render () {
    return (
      <div className='chart'>
        <Row>
          {this.props.daughters.reverse().map((d, i) => (
            <Col md='1' md-offset={i === 0 ? '2' : '0'} key={i} className='figure daughter'><Figure figure={d} /></Col>
          ))}
          {this.props.mothers.reverse().map((m, i) => (
            <Col md='1' key={i} className='figure mother'><Figure figure={m} /></Col>
          ))}
        </Row>
        <Row>
          {this.props.nieces.reverse().map((n, i) => (
            <Col md='2' md-offset={i === 0 ? '2' : '0'} key={i} className='figure niece'><Figure figure={n} /></Col>
          ))}
        </Row>
        <Row>
          {this.props.witnesses.reverse().map((w, i) => (
            <Col md='4' md-offset={i === 0 ? '2' : '0'} key={i} className='figure witness'><Figure figure={w} /></Col>
          ))}
        </Row>
        <Row className='judge-row'>
          <Col md='6' md-offset='3' className='figure judge'><Figure figure={this.props.judge} /></Col>
          <Col md='1' md-offset='1' className='figure reconciler'><Figure figure={this.props.reconciler} /></Col>
        </Row>
      </div>
    )
  }
}
