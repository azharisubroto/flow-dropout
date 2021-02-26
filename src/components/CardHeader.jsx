import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import IconButton from '@/components/IconButton'
import { MdInfoOutline } from 'react-icons/md'
import ReactTooltip from 'react-tooltip'

const Card = ({ className, headline, tooltipText, children, ...other }) => {
  const [renderTooltip, setRenderTooltip] = useState(false)

  useEffect(() => {
    setRenderTooltip(true)
  }, [])

  return (
    <div className={`ra-card-header ${className ? className : ''}`} {...other}>
      {/* Headline and tooltip */}
      <div>
        <div className="d-flex">
          <div className="headline">{headline}</div>

          {/* info icon and tooltip */}
          {renderTooltip && renderTooltip && (
            <div className="icon">
              <IconButton size={22} data-for="info" data-tip={tooltipText}>
                <MdInfoOutline size={14} />
              </IconButton>
              <ReactTooltip id="info" place="top" type="dark" effect="solid" multiline={true} />
            </div>
          )}
        </div>
      </div>

      {/* Additional UI */}
      <div>{children}</div>

      <style jsx>{`
        .ra-card-header {
          border-bottom: solid 1px #ecf2ff;
          padding: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .d-flex {
          display: flex;
          flex-wrap: nowrap;
          align-items: center;
        }
        .headline {
          font-size: 18px;
          font-weight: normal;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: normal;
          color: #323a44;
        }
        .icon {
          margin-left: 10px;
        }
      `}</style>
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.any,
  headline: PropTypes.any,
  tooltipText: PropTypes.string
}

export default Card
