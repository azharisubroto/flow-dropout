import PropTypes from 'prop-types'
const Container = ({ children, className, ...other }) => {
  return (
    <div className={`container ${className}`} {...other}>
      {children}

      <style jsx>{`
        .container {
          max-width: 990px;
          margin: 0 auto;
        }
      `}</style>
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.any
}

export default Container