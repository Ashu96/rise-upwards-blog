import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import HeroSection from '../components/heroSection'
import TinySection from '../components/tinySection'
import FeatureSection from '../components/featureSection'
import AwardsSection from '../components/awardSection'
import TourSection from '../components/tourSection'
import ContactSection from '../components/contactSection'
import SubscribeSection from '../components/subscribeSection'

function IndexPage({ data }) {
  console.count('Render')

  console.log({ main: data })
  const { allStrapiPride } = data
  const [isLoading, toggleLoading] = React.useState(true)
  const [showCase, setShowCase] = React.useState({
    awards: {},
    featured: {},
    partners: {}
  })

  React.useEffect(() => {
    console.count('Effect')
    let newShowCase = { ...showCase }
    allStrapiPride.edges.forEach(edge => {
      const { node } = edge
      newShowCase[node.uuid] = node
    })
    setShowCase(newShowCase)
    toggleLoading(false)
  }, [allStrapiPride])

  console.log({ showCase })

  if (isLoading) {
    return <p>Loading ...</p>
  }

  return (
    <Layout>
      <HeroSection />
      <TinySection />
      <FeatureSection />
      <AwardsSection data={showCase.awards} />
      <TourSection />
      <AwardsSection data={showCase.partners} />
      <AwardsSection data={showCase.featured} />
      <ContactSection />
      <SubscribeSection />
      <div className="mgn-t-100" />
    </Layout>
  )
}

export default IndexPage

export const MainQuery = graphql`
  {
    allStrapiPride {
      edges {
        node {
          images {
            url
            id
          }
          title
          uuid
          id
        }
      }
    }
  }
`
