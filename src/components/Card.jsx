const Card = ({ children, className, ...other }) => {
  return (
    <div className={`ra-card ${className}`} {...other}>
      {children}

      <style jsx>{`
        .ra-card {
          border-radius: 20px;
          background: #fff;
          box-shadow: 0 30px 30px 0 rgba(0, 0, 0, 0.06), 0 -30px 30px 0 rgba(255, 255, 255, 0.2);
          transform: translateY(0);
          transition: all 0.2s ease;
          overflow: hidden;
          cursor: pointer;
          &:hover {
            background: #fff;
          }
        }
      `}</style>
    </div>
  )
}

export default Card
