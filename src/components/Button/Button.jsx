import React from 'react'
import styles from './styles.css'
import cx from 'classnames'

const style = styles.button

const Button = props => (
  <button
    className={cx(style, props.className)}
    {...props} />
)

export default Button
