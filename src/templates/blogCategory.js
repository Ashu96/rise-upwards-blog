import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import CategorySection from '../components/Blog/CategorySection'
import CategoryMenu from '../components/Blog/CategoryMenu'

import { SectionWrapper } from '../styles/grid'

function BlogCategory({ data }) {
  const { strapiBlogCategories, allStrapiBlogCategories } = data

  return (
    <Layout headerProps={{ bgPrimary: false }}>
      <SectionWrapper
        bgPrimary
        containerProps={{ style: { padding: '0px 0px' } }}
      >
        <CategoryMenu
          categories={allStrapiBlogCategories}
          activeCategory={strapiBlogCategories.strapiId}
        />
      </SectionWrapper>
      <CategorySection
        title={strapiBlogCategories.title}
        blogs={strapiBlogCategories.blogs}
        showAll={false}
      />
    </Layout>
  )
}

export default BlogCategory

export const query = graphql`
  query($id: String!) {
    strapiBlogCategories: strapiBlogcategories(id: { eq: $id }) {
      strapiId
      title
      blogs {
        id
        title
        slug
        body
        content
        # date(fromNow: true)
        date(formatString: "MMMM DD, YYYY")
        show_contact_form
        show_subscribe_form
        image {
          childImageSharp {
            fluid(maxWidth: 370) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    allStrapiBlogCategories: allStrapiBlogcategories {
      edges {
        node {
          active
          slug
          strapiId
          title
          blogs {
            id
          }
        }
      }
    }
  }
`
