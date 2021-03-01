import PropTypes from 'prop-types'
import styles from './IconButton.module.scss'

const IconButton = ({ className, children, size, ...other }) => {
  let classes = 'icon-button'
  let cssstyles

  if (className) {
    classes += ` ${className}`
  }

  // if size applied through prop
  if (size) {
    cssstyles = {
      width: `${size ? size : 20}px`,
      height: `${size ? size : 20}px`,
      lineHeight: `${size ? size : 20}px`,
      borderRadius: `${size ? size : 20}px`
    }
  }

  return (
    <>
      <button className={`${classes} ${styles.IconButton}`} styles={cssstyles} {...other}>
        {children}
      </button>
      <style jsx>{`
        button {
          width: ${size ? size : 20}px;
          height: ${size ? size : 20}px;
          line-height: ${size ? size : 20}px;
          border-radius: ${size ? size : 20}px;
        }
      `}</style>
    </>
  )
}

IconButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.any,
  size: PropTypes.number
}

export default IconButton
