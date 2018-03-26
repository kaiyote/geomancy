import React, { Component } from 'react'
import Figure from './Figure.js'

export default class HouseChart extends Component {
  render () {
    return (
      <div className='chart house'>
        <div className='wrapper'>
          <svg className='house-background' viewBox='0 0 4 4'>
            <g>
              <path d='M0 0l1 1l-1 1l1 1l-1 1zl1 1l1 -1l1 1l1 -1zm4 4l-1 -1l1 -1l-1 -1l1 -1zl-1 -1l-1 1l-1 -1l-1 1zl-1 -1h-2v-2h2v2z' />
            </g>
          </svg>
          {this.props.mothers.map((m, i) => (
            <Figure figure={m} className={`mother${i}`} />
          ))}
          {this.props.daughters.map((d, i) => (
            <Figure figure={d} className={`daughter${i}`} />
          ))}
          {this.props.nieces.map((n, i) => (
            <Figure figure={n} className={`niece${i}`} />
          ))}
        </div>
      </div>
    )
  }
}
