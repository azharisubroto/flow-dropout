import PropTypes from 'prop-types'
import styles from './Select.module.scss'

const Select = ({ children, ...other }) => {
  return (
    <>
      <select className={`${styles.fdselect}`} {...other}>
        {children}
      </select>
    </>
  )
}

Select.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string
}

export default Select
