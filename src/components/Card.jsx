import PropTypes from 'prop-types'
import styles from './Card.module.scss'

const Card = ({ children, className, ...other }) => {
  let classes = styles.Card
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

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

export default Card
