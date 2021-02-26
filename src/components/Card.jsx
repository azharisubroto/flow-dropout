import PropTypes from 'prop-types'
const Card = ({ children, className, ...other }) => {
  return (
    <>
      <div className={`ra-card ${className ? className : ''}`} {...other}>
        {children}
      </div>
      <style jsx>{`
        .ra-card {
          margin: 61px 0 61px;
          border-radius: 10px;
          border: solid 1px #ecf2ff;
          background-color: #fff;
        }
      `}</style>
    </>
  )
}

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.any
}

export default Card
