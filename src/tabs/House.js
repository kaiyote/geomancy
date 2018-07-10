import React, { Component } from 'react'
import { Figure, Info } from './chart'
import { withStyles } from '@material-ui/core'

const pos = (top, left) => ({
  top: `${top}%`,
  left: `${left}%`,
  position: 'absolute'
})

const styles = theme => ({
  background: {
    width: 600
  },
  backgroundStroke: {
    fill: 'transparent',
    strokeWidth: 0.02,
    stroke: theme.palette.primary.main
  },
  figure: {
    padding: '1em 15px',
    border: 'none',
    textAlign: 'center',
    lineHeight: '.75em',
    backgroundColor: 'white',
    fontSize: '1.2em'
  },
  chart: {
    margin: '1em',
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'center'
  },
  mother0: pos(41.5, 11.5),
  mother1: pos(66.5, 3),
  mother2: pos(81.5, 19.75),
  mother3: pos(76, 44.75),
  daughter0: pos(81.5, 69.75),
  daughter1: pos(66.5, 86.5),
  daughter2: pos(41.5, 78),
  daughter3: pos(17, 86.5),
  niece0: pos(1.5, 69.75),
  niece1: pos(7.5, 44.75),
  niece2: pos(1.5, 19.75),
  niece3: pos(17, 3),
  info: {
    maxWidth: 300,
    textAlign: 'center',
    ...pos(25, 25)
  }
})

class House extends Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.setState = this.setState.bind(this)
  }

  render () {
    const { classes } = this.props

    return (
      <div className={classes.chart}>
        <div style={{ position: 'relative' }}>
          <svg className={classes.background} viewBox='0 0 4 4'>
            <g className={classes.backgroundStroke}>
              <path d='M0 0l1 1l-1 1l1 1l-1 1zl1 1l1 -1l1 1l1 -1zm4 4l-1 -1l1 -1l-1 -1l1 -1zl-1 -1l-1 1l-1 -1l-1 1zl-1 -1h-2v-2h2v2z' />
            </g>
          </svg>
          {this.props.mothers.map((m, i) => (
            <Figure
              figure={m}
              className={`${classes.figure} ${classes['mother' + i]}`}
              key={i}
              index={i + 1}
              label='mother'
              onHover={this.setState}
            />
          ))}
          {this.props.daughters.map((d, i) => (
            <Figure
              figure={d}
              className={`${classes.figure} ${classes['daughter' + i]}`}
              key={i}
              index={i + 1}
              label='daughter'
              onHover={this.setState}
            />
          ))}
          {this.props.nieces.map((n, i) => (
            <Figure
              figure={n}
              className={`${classes.figure} ${classes['niece' + i]}`}
              key={i}
              index={i + 1}
              label='niece'
              onHover={this.setState}
            />
          ))}
          <Info data={this.state.data} className={`${classes.info}`} />
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(House)
