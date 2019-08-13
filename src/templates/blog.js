import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import { Heading2, BodyText } from '../styles/text'
import { Container, Row, Col } from '../styles/grid'

function Outcomes({ data }) {
  const { strapiBlog } = data

  return (
    <Layout
      showSubscribe={strapiBlog.show_subscribe_form}
      showContact={strapiBlog.show_contact_form}
    >
      <Container>
        <Row className="justify-content-center">
          <Col className="col-lg-6">
            <Heading2 textCenter className="mgn-t-60">
              {strapiBlog.title}
            </Heading2>
            <Img
              fixed={strapiBlog.image.childImageSharp.fixed}
              className="mgn-t-40 mgn-b-40"
              alt="nesting"
            />
            <BodyText className="mgn-b-60">{strapiBlog.content}</BodyText>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default Outcomes

export const query = graphql`
  query($id: String!) {
    strapiBlog(id: { eq: $id }) {
      title
      id
      content
      image {
        childImageSharp {
          fixed(width: 480) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      show_subscribe_form
      show_contact_form
    }
  }
`
