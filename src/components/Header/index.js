import React from 'react'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'
import Header from './Header'

function HeaderContainer({ siteTitle, bgPrimary }) {
  const data = useStaticQuery(graphql`
    {
      strapiHeaders {
        id
        strapiId
        title
        bgPrimary
        navItems: navitems {
          id
          RHS
          active
          header
          link
          title
          type
          actionType
          image {
            childImageSharp {
              fixed(width: 100) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `)

  console.log({ strapiHeaders: data.strapiHeaders })
  const { strapiHeaders } = data

  const { navItems } = strapiHeaders

  return (
    <Header bgPrimary={bgPrimary} siteTitle={siteTitle} navItems={navItems} />
  )
}

HeaderContainer.propTypes = {
  bgPrimary: PropTypes.bool,
  // id: PropTypes.string.isRequired
}

HeaderContainer.defaultProps = {
  bgPrimary: false
}

export default HeaderContainer
