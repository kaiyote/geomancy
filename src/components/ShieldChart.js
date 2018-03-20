import React, { Component } from 'react'
import { Col, Row } from 'muicss/react'
import Figure from './Figure.js'

export default class ShieldChart extends Component {
  render () {
    return (
      <React.Fragment>
        <Row>
          <Col md='6'>
            <Row>
              {this.props.daughters.reverse().map(d => (
                <Col md='3'><Figure figure={d} /></Col>
              ))}
            </Row>
          </Col>
          <Col md='6'>
            <Row>
              {this.props.mothers.reverse().map(d => (
                <Col md='3'><Figure figure={d} /></Col>
              ))}
            </Row>
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}
