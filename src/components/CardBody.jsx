import PropTypes from 'prop-types'
const CardBody = ({ className, children, py, ...other }) => {
  return (
    <>
      <div className={`ra-card-body ${className ? className : ''}`} {...other}>
        {children}
      </div>

      {/* Styling */}
      <style jsx>{`
        .ra-card-body {
          padding: 40px;
          background: #fff;
          ${py ? `padding-top: ${py}px;` : ''}
          ${py ? `padding-bottom: ${py}px;` : ''}
        }
      `}</style>
    </>
  )
}

CardBody.propTypes = {
  children: PropTypes.node,
  className: PropTypes.any,
  py: PropTypes.string
}

export default CardBody
