import React, { PureComponent } from 'react'

function Child({ header, footer }) {
  return (
    <div>
      {header}
      main
      {footer}
    </div>
  )
}

export default class Home extends PureComponent {
  render() {
    return (
      <div>
        Dashboard
        <Child header={<div>header</div>} footer={<div>footer</div>}></Child>
      </div>
    )
  }
}
