import PropTypes from 'prop-types'
import styles from './Button.module.scss'

const Button = ({ children, color, dark, width, height, fontSize, className, ...other }) => {
  let classes = styles.Button
  if (className) {
    classes += ` ${className}`
  }
  if (color) {
    classes += ` ${color}`
  }
  return (
    <>
      <button
        className={classes}
        {...other}
        style={{
          width: `${width ? `${width}px` : 'auto'}`,
          height: `${height ? `${height}px` : 'auto'}`,
          lineHeight: `${height ? `${height}px` : '1'}`,
          padding: `${!width ? '8px 13px' : '0'}`,
          fontSize: `${fontSize ? fontSize : 12}px`,
          backgroundColor: `${color ? color : '#ececec'}`,
          color: `${dark ? '#fff' : '#323a44'}`
        }}>
        {children}
      </button>
    </>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  dark: PropTypes.bool,
  fontSize: PropTypes.number,
  height: PropTypes.number,
  width: PropTypes.number
}

export default Button
