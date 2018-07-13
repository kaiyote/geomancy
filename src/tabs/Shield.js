import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'
import { Figure, Info } from './chart'

const styles = theme => ({
  chart: {
    margin: '1em',
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'center'
  },
  row: {
    display: 'flex',
    flexFlow: 'row-reverse nowrap',
    justifyContent: 'center',
    alignItems: 'stretch',
    alignContent: 'center',
    width: 600
  },
  figureBox: {
    flexGrow: 1,
    flexShrink: 0
  },
  figure: {
    padding: '1em 15px',
    border: `1px solid ${theme.palette.primary.main}`,
    textAlign: 'center',
    lineHeight: '.75em',
    backgroundColor: 'white',
    fontSize: '1.2em'
  },
  reconciler: {
    color: 'grey'
  },
  judge: {
    flexGrow: 11
  },
  hidden: {
    border: 'none',
    flexGrow: 2,
    backgroundColor: theme.palette.background.default
  }
})

class Shield extends Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.setState = this.setState.bind(this)
  }

  render () {
    const { classes } = this.props

    return (
      <React.Fragment>
        <div className={classes.chart}>
          <div className={classes.row}>
            {this.props.mothers.map((m, i) => (
              <Figure
                figure={m}
                className={`${classes.figureBox} ${classes.figure}`}
                key={i}
                index={i + 1}
                label='mother'
                onHover={this.setState}
              />
            ))}
            {this.props.daughters.map((d, i) => (
              <Figure
                figure={d}
                className={`${classes.figureBox} ${classes.figure}`}
                key={i}
                index={i + 1}
                label='daughter'
                onHover={this.setState}
              />
            ))}
          </div>
          <div className={classes.row}>
            {this.props.nieces.map((n, i) => (
              <Figure
                figure={n}
                className={`${classes.figureBox} ${classes.figure}`}
                key={i}
                index={i + 1}
                label='niece'
                onHover={this.setState}
              />
            ))}
          </div>
          <div className={classes.row}>
            {this.props.witnesses.map((w, i) => (
              <Figure
                figure={w}
                className={`${classes.figureBox} ${classes.figure}`}
                key={i}
                index={i + 1}
                label='witness'
                onHover={this.setState}
              />
            ))}
          </div>
          <div className={classes.row}>
            <Figure
              figure={this.props.reconciler}
              className={`${classes.figureBox} ${classes.figure} ${classes.reconciler}`}
              label='reconciler'
              onHover={this.setState}
            />
            <Figure
              figure={this.props.judge}
              className={`${classes.figureBox} ${classes.figure} ${classes.judge}`}
              label='judge'
              onHover={this.setState}
            />
            <div
              className={`${classes.figureBox} ${classes.figure} ${classes.hidden}`}
            />
          </div>
        </div>
        <Info data={this.state.data}>
          {`[label]: [name] ([translation])
            [meaning]`}
        </Info>
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(Shield)
