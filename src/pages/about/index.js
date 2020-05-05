import React, { PureComponent } from 'react'
import styles from './index.module.css'
import pic from '@/assets/a.jpg'

export default class About extends PureComponent {
  render() {
    return (
      <div className={styles.about}>
        <p>page About</p>
        <img src={pic} />
      </div>
    )
  }
}
