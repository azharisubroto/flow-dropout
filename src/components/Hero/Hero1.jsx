import Card from '@/components/Card'
import Button from '@/components/Button'

const Hero1 = () => {
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-lg-11 position-relative">
          <Card className="p-lg-5 position-absolute" style={{ width: '45%', zIndex: 11, left: 0, top: 100 }}>
            <div className="meta-text mb-3">4min Read</div>

            <h2 className="mb-4">LIFE ALONG THE CAROLINAS’ MOST SCENIC HIGHWAY</h2>

            <div className="row justify-content-between align-items-center">
              {/* Read Article */}
              <div className="col">
                <Button color="primary">Read article</Button>
              </div>

              {/* Publish Date */}
              <div className="col text-right">
                <div className="meta-text">Date: 02/02/2021</div>
              </div>
            </div>
          </Card>

          <div className="row justify-content-end">
            <div className="col-md-9">
              <Card style={{ height: 370 }}>
                <img
                  src="https://cdn.statically.io/img/cliffsliving.com/wp-content/uploads/2018/02/CLIFFS_DevilsCourthouse_Shoot_2017_3740_cmyk_brighter_PJ.jpg?h=500&q=90&f=webp"
                  alt="view"
                  loading="lazy"
                />
              </Card>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        h2 {
          font-size: 28px;
          font-weight: 700;
          letter-spacing: 0.5px;
          line-height: 40px;
          color: #586477;
        }
        .meta-text {
          color: #aaa;
          font-weight: 600;
          letter-spacing: 0.7px;
        }
        img {
          max-width: 100%;
        }
      `}</style>
    </>
  )
}

export default Hero1
