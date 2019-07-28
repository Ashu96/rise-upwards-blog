import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import ReactMarkdown from 'react-markdown'
import Layout from '../components/layout'

const IndexPage = ({ data }) => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <ul>
      {data.allStrapiArticle.edges.map(document => (
        <li key={document.node.id}>
          <h2>
            <Link to={`/${document.node.id}`}>{document.node.title}</Link>
          </h2>
          {/* <Img fluid={document.node.image.childImageSharp.fluid} /> */}
          <Img fluid={document.node.image.url} />
          <img src={document.node.image.url} />
          <ReactMarkdown
            source={document.node.content}
            // transformImageUri={uri =>
            //   uri.startsWith('http')
            //     ? uri
            //     : `${process.env.IMAGE_BASE_URL}${uri}`
            // }
          />
        </li>
      ))}
    </ul>

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiArticle {
      edges {
        node {
          id
          image {
            url
          }
          # image {
          #   childImageSharp {
          #     fluid(maxWidth: 500) {
          #       ...GatsbyImageSharpFluid
          #     }
          #   }
          # }
          title
          content
        }
      }
    }
  }
`
