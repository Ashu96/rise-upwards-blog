import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import ReactMarkdown from 'react-markdown'
import Layout from '../components/layout'

const ArticleTemplate = ({ data }) => (
  <Layout>
    <h1>{data.strapiArticle.title}</h1>
    <p>
      by{' '}
      <Link to={`/authors/User_${data.strapiArticle.author.id}`}>
        {data.strapiArticle.author.username}
      </Link>
    </p>
    {/* <Img fluid={data.strapiArticle.image.childImageSharp.fluid} /> */}
    <Img fluid={data.strapiArticle.image.url} />
    <img src={data.strapiArticle.image.url} />
    <ReactMarkdown
      source={data.strapiArticle.content}
      // transformImageUri={uri =>
      //   uri.startsWith('http') ? uri : `${process.env.IMAGE_BASE_URL}${uri}`
      // }
    />
  </Layout>
)

export default ArticleTemplate

export const query = graphql`
  query ArticleTemplate($id: String!) {
    strapiArticle(id: { eq: $id }) {
      title
      content
      image {
        url
      }
      # image {
      #   childImageSharp {
      #     fluid(maxWidth: 960) {
      #       ...GatsbyImageSharpFluid
      #     }
      #   }
      # }
      author {
        id
        username
      }
    }
  }
`
