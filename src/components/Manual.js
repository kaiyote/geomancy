import React, { Component } from 'react'
import { Button, Col, Form, Input, Row } from 'muicss/react'

export default class ManualInput extends Component {
  constructor (props) {
    super(props)
    this.state = {
      mother1: {
        head: 0,
        neck: 0,
        body: 0,
        feet: 0
      },
      mother2: {
        head: 0,
        neck: 0,
        body: 0,
        feet: 0
      },
      mother3: {
        head: 0,
        neck: 0,
        body: 0,
        feet: 0
      },
      mother4: {
        head: 0,
        neck: 0,
        body: 0,
        feet: 0
      }
    }
  }

  render () {
    return (
      <Form>
        {this.labelRow()}
        {['head', 'neck', 'body', 'feet'].map(i => (
          <Row key={i}>
            {['1', '2', '3', '4'].map(j => (
              <Col md='3' key={i + j}>
                <Input type='number'
                  value={this.state['mother' + j][i]}
                  onChange={e => this.onChange(e, j, i)}
                  floatingLabel
                  label={i.replace(/^(.)(.+)$/, (_, p1, p2) => `${p1.toUpperCase()}${p2}`)}
                  tabIndex={j} />
              </Col>
            ))}
          </Row>
        ))}
        <Button color='primary' variant='raised' onClick={e => this.generate(e)}>Generate Charts</Button>
      </Form>
    )
  }

  onChange (e, mother, part) {
    let newVal = Number.parseInt(e.target.value, 10)
    newVal = window.isNaN(newVal) ? '' : newVal
    this.setState({
      [`mother${mother}`]: Object.assign(this.state[`mother${mother}`], {[part]: newVal})
    })
  }

  labelRow () {
    return (
      <Row>
        <Col md='3'>Mother One</Col>
        <Col md='3'>Mother Two</Col>
        <Col md='3'>Mother Three</Col>
        <Col md='3'>Mother Four</Col>
      </Row>
    )
  }

  generate (e) {
    e.preventDefault()
    let mother1 = (this.state.mother1.head % 2 << 3) | (this.state.mother1.neck % 2 << 2) | (this.state.mother1.body % 2 << 1) | (this.state.mother1.feet % 2)
    let mother2 = (this.state.mother2.head % 2 << 3) | (this.state.mother2.neck % 2 << 2) | (this.state.mother2.body % 2 << 1) | (this.state.mother2.feet % 2)
    let mother3 = (this.state.mother3.head % 2 << 3) | (this.state.mother3.neck % 2 << 2) | (this.state.mother3.body % 2 << 1) | (this.state.mother3.feet % 2)
    let mother4 = (this.state.mother4.head % 2 << 3) | (this.state.mother4.neck % 2 << 2) | (this.state.mother4.body % 2 << 1) | (this.state.mother4.feet % 2)
    this.props.generate([mother1, mother2, mother3, mother4])
  }
}
