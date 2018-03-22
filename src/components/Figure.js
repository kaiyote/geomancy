import React from 'react'
// import { Figures } from '../data/data.js'

export default function Figure (props) {
  return (
    <React.Fragment>
      <FigureRow val={(props.figure >> 3) & 1} />
      <FigureRow val={(props.figure >> 2) & 1} />
      <FigureRow val={(props.figure >> 1) & 1} />
      <FigureRow val={props.figure & 1} />
    </React.Fragment>
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
