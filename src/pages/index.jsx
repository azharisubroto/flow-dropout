import Head from 'next/head'
import Default from '@/layout/Default'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Hero1 from '@/components/Hero/Hero1'

export default function Home() {
  return (
    <>
      <Head>
        <title>Lucht - React Blog Template</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Default>
        <section className="py-lg-5">
          <Container>
            <Row className="align-items-end">
              <Col lg={12}>
                <Hero1 />
              </Col>
            </Row>
          </Container>
        </section>
      </Default>
    </>
  )
}
