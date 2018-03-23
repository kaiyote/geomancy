import React from 'react'
import { Figures } from '../data/data.js'

export default function Figure (props) {
  return (
    <div className={`figure ${props.className}`}
      onMouseOver={e => onHover(props.figure, props.className, props.onHover, props.index)}>
      <FigureRow val={(props.figure >> 3) & 1} />
      <FigureRow val={(props.figure >> 2) & 1} />
      <FigureRow val={(props.figure >> 1) & 1} />
      <FigureRow val={props.figure & 1} />
    </div>
  )
}

function FigureRow (props) {
  return (
    <div className='figure-row'>
      <span>&bull;</span>
      {props.val === 0 ? (<span>&bull;</span>) : null}
    </div>
  )
}

function onHover (figure, label, callback, index) {
  let data = Figures.find(e => e.value === figure)

  data.label = `${index ? numberLabel(index) + ' ' : ''}${label.replace(/^(.)(.+)$/, (_, p1, p2) => `${p1.toUpperCase()}${p2}`)}`

  callback && callback({ data: data })
}

function numberLabel (num) {
  switch (num) {
    case 1: return '1st'
    case 2: return '2nd'
    case 3: return '3rd'
    default: return num + 'th'
  }
}
