import React from 'react'

export default function Info (props) {
  return props.data
    ? <div className={`${props.className}`}>
      <p>{props.data.label}: {props.data.name} ({props.data.translation})</p>
      <p>{props.data.meaning}</p>
    </div>
    : <div className={`${props.className}`} />
}
