import React, { Component } from 'react'

export default class ManualInput extends Component {
  constructor (props) {
    super(props)
    this.state = {
      mother1: {
        one: 0,
        two: 0,
        three: 0,
        four: 0
      },
      mother2: {
        one: 0,
        two: 0,
        three: 0,
        four: 0
      },
      mother3: {
        one: 0,
        two: 0,
        three: 0,
        four: 0
      },
      mother4: {
        one: 0,
        two: 0,
        three: 0,
        four: 0
      }
    }
  }

  render () {
    return (
      <React.Fragment>
        {['one', 'two', 'three', 'four'].map(i => (
          <React.Fragment key={i}>
            {i === 'one' ? this.labelRow() : null}
            <div className='mui-row'>
              {['4', '3', '2', '1'].map(j => (
                <div className='mui-col-md-3' key={i + j}>
                  <input type='number' value={this.state['mother' + j][i]} onChange={(e) => this.setState({
                    [`mother${j}`]: Object.assign(this.state[`mother${j}`], {[i]: Number.parseInt(e.target.value, 10)})
                  })} />
                </div>
              ))}
            </div>
          </React.Fragment>
        ))}
      </React.Fragment>
    )
  }

  labelRow () {
    return (
      <div className='mui-row'>
        <div className='mui-col-md-3'>Mother Four</div>
        <div className='mui-col-md-3'>Mother Three</div>
        <div className='mui-col-md-3'>Mother Two</div>
        <div className='mui-col-md-3'>Mother One</div>
      </div>
    )
  }
}
