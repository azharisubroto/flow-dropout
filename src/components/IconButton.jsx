import PropTypes from 'prop-types'
const IconButton = ({ className, children, size, ...other }) => {
  return (
    <button className={`icon-button ${className ? className : ''}`} {...other}>
      {children}
      <style jsx>{`
        button {
          width: ${size ? size : 20}px;
          height: ${size ? size : 20}px;
          line-height: ${size ? size : 20}px;
          text-align: center;
          background-color: #f2f2f2;
          border-radius: ${size ? size : 20}px;
          border: 0;
          cursor: pointer;
          padding: 0;
          display: flex;
          position: relative;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </button>
  )
}

IconButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.any,
  size: PropTypes.number
}

export default IconButton
