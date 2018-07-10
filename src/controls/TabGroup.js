import React, { Component } from 'react'

export default class TabGroup extends Component {
  render () {
    return (
      <React.Fragment>
        {this.props.children.map(
          (child, index) => this.props.index === index && child
        )}
      </React.Fragment>
    )
  }
}
