import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Link from 'next/link'
import NavMenu from '@/components/NavMenu'
import SearchField from '@/components/SearchField'

const Header = () => {
  return (
    <header>
      <Container>
        <Row className="align-items-center">
          {/* Identity */}
          <Col lg={2}>
            <h1>
              <Link href="/">
                <a>Lucht</a>
              </Link>
            </h1>
          </Col>

          {/* Menu */}
          <Col lg={7}>
            <NavMenu />
          </Col>

          {/* Search */}
          <Col lg={3} className="self-justify-end">
            <SearchField />
          </Col>
        </Row>
      </Container>

      {/* Styling */}
      <style jsx>{`
        header {
          padding: 30px 0;
        }

        h1 {
          font-size: 26px;
          font-weight: 900;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: #768eb1;
          margin: 0;
          a {
            color: inherit;
            text-decoration: none;
          }
        }
      `}</style>
    </header>
  )
}

export default Header
