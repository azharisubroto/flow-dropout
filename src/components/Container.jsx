import PropTypes from 'prop-types'
import styles from './Container.module.scss'

const Container = ({ children, className, ...other }) => {
  let classes = styles.Container
  if (className) {
    classes += ` ${className}`
  }

  return (
    <>
      <div className={classes} {...other}>
        {children}
      </div>
    </>
  )
}

Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.any
}

export default Container
