import PropTypes from 'prop-types'
import styles from './CardBody.module.scss'

const CardBody = ({ className, children, py, ...other }) => {
  let classes = styles.CardBody
  if (className) {
    classes += ` ${className}`
  }
  return (
    <>
      <div
        className={classes}
        style={{ paddingTop: `${py ? `${py}px` : '0'}`, paddingBottom: `${py ? `${py}px` : '0'}` }}
        {...other}>
        {children}
      </div>
    </>
  )
}

CardBody.propTypes = {
  children: PropTypes.node,
  className: PropTypes.any,
  py: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default CardBody
