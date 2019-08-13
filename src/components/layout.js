import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import ContactSection from './contactSection'
import SubscribeSection from './subscribeSection'

import '../fonts/proxima-nova-web-fonts/fonts.css'
import '../styles/bootstrap-grid-utils.css'
import './layout.css'
import Footer from './footer'

const Layout = ({
  children,
  showContact,
  showSubscribe,
  showHeader,
  showFooter
}) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        {showHeader && <Header siteTitle={data.site.siteMetadata.title} />}
        <main>{children}</main>
        {showContact && <ContactSection />}
        {showSubscribe && <SubscribeSection />}
        {showFooter && <Footer />}
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  showContact: PropTypes.bool,
  showSubscribe: PropTypes.bool,
  showHeader: PropTypes.bool,
  showFooter: PropTypes.bool,
}

Layout.defaultProps = {
  showFooter: true,
  showHeader: true
}

export default Layout
