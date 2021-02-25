const Button = ({ children, color, ...other }) => {
  return (
    <button className={color} {...other}>
      {children}

      <style jsx>{`
        button {
          display: inline-block;
          transition: all 0.2s ease-in;
          padding: 0.9375rem 1.6625rem;
          border: none;
          border-radius: 50px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell',
            'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
          background: #fff;
          color: #181d27;
          line-height: 1;
          font-weight: 500;
          color: #fff;

          &.primary {
            background: #2d53fe;
            box-shadow: 0 5px 15px rgba(32, 41, 83, 0.15), 0 15px 40px rgba(45, 83, 254, 0.2);

            &:hover {
              background-color: #012ef7;
            }
          }
        }
      `}</style>
    </button>
  )
}

export default Button
