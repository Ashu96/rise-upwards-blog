import React from 'react'
import { graphql } from 'gatsby'
import Styled from 'styled-components'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import RelatedPosts from '../components/Blog/RelatedPosts'
import { Heading1, BodyText } from '../styles/text'
import { SectionWrapper, Row, Col } from '../styles/grid'
import { backgrounds } from '../constants/colors'

const BlogContentContainer = Styled.div`
  background-color: ${backgrounds.white};
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(219, 221, 227, 0.8);
`

function Blog({ data }) {
  const { strapiBlog } = data

  const category =
    strapiBlog &&
    strapiBlog.blogcategories &&
    strapiBlog.blogcategories[0] &&
    strapiBlog.blogcategories[0].title

  const relatedBlogsID =
    strapiBlog &&
    strapiBlog.blogcategories &&
    strapiBlog.blogcategories[0] &&
    strapiBlog.blogcategories[0].blogs

  return (
    <Layout
      headerProps={{ bgPrimary: false }}
      showSubscribe={strapiBlog.show_subscribe_form}
      showContact={strapiBlog.show_contact_form}
    >
      <SectionWrapper
        bgPrimary
        containerProps={{
          style: { padding: '100px 0px' }
        }}
      >
        <BlogContentContainer>
          <Row className="justify-content-center">
            <Col className="col-lg-9">
              <Heading1 textCenter className="mgn-t-60">
                {strapiBlog.title}
              </Heading1>
              <BodyText textCenter className="mgn-t-20">
                {strapiBlog.date} | {category}
              </BodyText>

              <Img
                fluid={strapiBlog.image.childImageSharp.fluid}
                className="mgn-t-100 mgn-b-40"
                alt="nesting"
              />
              <BodyText className="mgn-b-60">{strapiBlog.content}</BodyText>
            </Col>
          </Row>
        </BlogContentContainer>
        <RelatedPosts relatedBlogsID={relatedBlogsID} />
      </SectionWrapper>
    </Layout>
  )
}

export default Blog

export const query = graphql`
  query($id: String!) {
    strapiBlog(id: { eq: $id }) {
      id
      strapiId
      title
      body
      date(formatString: "MMMM DD, YYYY")
      content
      slug
      image {
        childImageSharp {
          fluid(maxWidth: 770) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      show_subscribe_form
      show_contact_form
      blogcategories {
        id
        title
        blogs
      }
    }
  }
`
