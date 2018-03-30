import React, { Component } from 'react'
import { Button, Grid, TextField, Typography } from 'material-ui'

export default class Manual extends Component {
  constructor (props) {
    super(props)
    this.state = {
      mother1: {
        fire: 0,
        air: 0,
        water: 0,
        earth: 0
      },
      mother2: {
        fire: 0,
        air: 0,
        water: 0,
        earth: 0
      },
      mother3: {
        fire: 0,
        air: 0,
        water: 0,
        earth: 0
      },
      mother4: {
        fire: 0,
        air: 0,
        water: 0,
        earth: 0
      }
    }
  }

  render () {
    return (
      <form onSubmit={e => this.generate(e)}>
        <Grid container justify='center'>
          <Grid item xs={2} zeroMinWidth><Typography margin='normal'>Mother One</Typography></Grid>
          <Grid item xs={2} zeroMinWidth><Typography margin='normal'>Mother Two</Typography></Grid>
          <Grid item xs={2} zeroMinWidth><Typography margin='normal'>Mother Three</Typography></Grid>
          <Grid item xs={2} zeroMinWidth><Typography margin='normal'>Mother Four</Typography></Grid>
        </Grid>
        {['fire', 'air', 'water', 'earth'].map((i, ix) => (
          <Grid container key={i} justify='center'>
            {[1, 2, 3, 4].map(j => (
              <Grid item xs={2} key={j} zeroMinWidth>
                {this.formControl(j, i, ix)}
              </Grid>
            ))}
          </Grid>
        ))}
        <Grid container justify='center' style={{marginTop: '30px'}}>
          <Grid item xs={6}>
            <Button type='submit' color='primary' variant='raised' onClick={e => this.generate(e)} fullWidth>
              Generate Charts
            </Button>
          </Grid>
        </Grid>
      </form>
    )
  }

  formControl (mother, part, elemIndex) {
    return (
      <TextField label={part.replace(/^(.)(.+)$/, (_, p1, p2) => `${p1.toUpperCase()}${p2}`)}
        value={this.state[`mother${mother}`][part]} onChange={e => this.onChange(e, mother, part)}
        type='number' inputProps={{tabIndex: (4 * mother) - (4 - elemIndex) + 1}} margin='normal' />
    )
  }

  onChange (e, mother, part) {
    let newVal = Number.parseInt(e.target.value, 10)
    newVal = window.isNaN(newVal) ? '' : newVal
    this.setState({
      [`mother${mother}`]: Object.assign(this.state[`mother${mother}`], {[part]: newVal})
    })
  }

  generate (e) {
    e.preventDefault()
    let mother1 = (this.state.mother1.fire % 2 << 3) | (this.state.mother1.air % 2 << 2) | (this.state.mother1.water % 2 << 1) | (this.state.mother1.earth % 2)
    let mother2 = (this.state.mother2.fire % 2 << 3) | (this.state.mother2.air % 2 << 2) | (this.state.mother2.water % 2 << 1) | (this.state.mother2.earth % 2)
    let mother3 = (this.state.mother3.fire % 2 << 3) | (this.state.mother3.air % 2 << 2) | (this.state.mother3.water % 2 << 1) | (this.state.mother3.earth % 2)
    let mother4 = (this.state.mother4.fire % 2 << 3) | (this.state.mother4.air % 2 << 2) | (this.state.mother4.water % 2 << 1) | (this.state.mother4.earth % 2)
    this.props.generate([mother1, mother2, mother3, mother4])
  }
}
