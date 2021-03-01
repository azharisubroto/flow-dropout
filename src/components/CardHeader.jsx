import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import IconButton from '@/components/IconButton'
import { MdInfoOutline } from 'react-icons/md'
import ReactTooltip from 'react-tooltip'
import styles from './CardHeader.module.scss'

const CardHeader = ({ className, headline, tooltipText, children, ...other }) => {
  const [renderTooltip, setRenderTooltip] = useState(false)

  useEffect(() => {
    setRenderTooltip(true)
  }, [])

  let classes = styles.CardHeader
  if (className) {
    classes += ` ${className}`
  }

  return (
    <div className={`${classes}`} {...other}>
      {/* Headline and tooltip */}
      <div>
        <div className={styles['d-flex']}>
          <div className={styles.headline}>{headline}</div>

          {/* info icon and tooltip */}
          {renderTooltip && renderTooltip && (
            <div className={styles.icon}>
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
    </div>
  )
}

CardHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.any,
  headline: PropTypes.any,
  tooltipText: PropTypes.string
}

export default CardHeader
