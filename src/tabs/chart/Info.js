import React from 'react'

export default function Info (props) {
  return props.data
    ? <div className={props.className}>
      {parseFormat(props.children, props.data)}
    </div>
    : <div className={props.className} />
}

function parseFormat (formatString, data) {
  return formatString
    .split(/\r?\n/)
    .map((line, index) => (
      <p key={index}>{line.trim().replace(/\[(.+?)]/g, (_, p1) => data[p1])}</p>
    ))
}
