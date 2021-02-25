import PropTypes from 'prop-types'

const Select = ({ children, color, dark, width, height, fontSize, ...other }) => {
  const clr = color ? color : '#ececec'
  return (
    <select className={color} {...other}>
      {children}

      <style jsx>{`
        select {
          width: ${width ? `${width}px` : 'auto'};
          height: ${height ? `${height}px` : 'auto'};
          line-height: ${height ? `${height}px` : '1'};
          padding: ${!width ? '8px 13px' : '0'};
          font-size: ${fontSize ? fontSize : 12}px;
          display: flex;
          border-radius: 6px;
          background-color: ${clr};
          color: ${dark ? '#fff' : '#323a44'};
          border: 0;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.1s ease;
          outline-color: #d4eeea;

          &:hover {
            filter: brightness(104%);
          }
        }
      `}</style>
    </select>
  )
}

Select.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  dark: PropTypes.bool,
  fontSize: PropTypes.number,
  height: PropTypes.number,
  width: PropTypes.number
}

export default Select
