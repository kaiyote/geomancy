import React from 'react'

export default function Info (props) {
  return props.data ? (
    <div className='figure info'>
      <span>{props.data.label}: {props.data.name}</span>
    </div>
  ) : <div className='figure info' />
}
