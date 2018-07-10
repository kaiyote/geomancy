import React from 'react'
import { Figures } from '../../data'
import { withStyles } from '@material-ui/core'

const styles = theme => ({
  figureRow: {
    margin: '0 .2em'
  }
})

export default function Figure (props) {
  return (
    <div
      className={`${props.className}`}
      onMouseOver={
        props.onHover &&
          (_ => onHover(props.figure, props.label, props.onHover, props.index))
      }
    >
      <FigureRow val={(props.figure >> 3) & 1} />
      <FigureRow val={(props.figure >> 2) & 1} />
      <FigureRow val={(props.figure >> 1) & 1} />
      <FigureRow val={props.figure & 1} />
    </div>
  )
}

function __figureRow (props) {
  const { classes } = props
  return (
    <div>
      <span className={classes.figureRow}>•</span>
      {props.val === 0 ? <span className={classes.figureRow}>•</span> : null}
    </div>
  )
}

const FigureRow = withStyles(styles)(__figureRow)

function onHover (figure, label, callback, index) {
  let data = Figures.find(e => e.value === figure)

  data.label = `${index ? numberLabel(index) + ' ' : ''}${label.replace(/^(.)(.+)$/, (_, p1, p2) => `${p1.toUpperCase()}${p2}`)}`

  callback && callback({ data: data })
}

function numberLabel (num) {
  switch (num) {
    case 1:
      return '1st'
    case 2:
      return '2nd'
    case 3:
      return '3rd'
    default:
      return num + 'th'
  }
}
