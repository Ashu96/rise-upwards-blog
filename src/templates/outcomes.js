import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import HeroContent from '../components/HeroContentSection'
import SectionWithContentAndImage from '../components/SectionWithContentAndImage'
import SectionWithContentInCenter from '../components/SectionWithContentInCenter'
import { getPublicURL } from '../utils'
import ReportSection from '../components/ReportSection'

function Outcomes({ data }) {
  const { strapiPage, allReportSections } = data
  
  const {
    heroSection,
    sectionWithContentInCenter,
    sectionWithContentAndImage,
    // reportSections
    show_contact_form,
    show_footer,
    show_header,
    show_subscribe_form
  } = strapiPage

  const reportInsight = sectionWithContentInCenter.find(
    section => section.title === 'Reporting & Insights'
  )
  const caseStudies = sectionWithContentInCenter.find(
    section => section.title === 'Case Studies'
  )

  return (
    <Layout
      showContact={show_contact_form}
      showSubscribe={show_subscribe_form}
      showHeader={show_header}
      showFooter={show_footer}
    >
      <HeroContent
        title={heroSection.title}
        imageSrc={getPublicURL(heroSection.image.url)}
        actions={heroSection.action}
      />

      <SectionWithContentInCenter
        title={reportInsight.title}
        body={reportInsight.body}
        bgPrimary
      />
      {allReportSections.edges.map((edge, index) => {
        const { node: reportSection } = edge
        return (
          <ReportSection
            key={reportSection.id}
            title={reportSection.title}
            reports={reportSection.reports}
            bgPrimary={index === 1}
          />
        )
      })}
      <SectionWithContentInCenter
        bgPrimary
        title={caseStudies.title}
        body={caseStudies.body}
        action={caseStudies.action.primary}
      />
      <SectionWithContentAndImage
        title={sectionWithContentAndImage.title}
        body={sectionWithContentAndImage.body}
        action={sectionWithContentAndImage.action.primary}
        imageSrc={getPublicURL(sectionWithContentAndImage.image.url)}
      />
    </Layout>
  )
}

export default Outcomes

export const query = graphql`
  query($id: String!) {
    strapiPage(id: { eq: $id }) {
      heroSection: herosection {
        id
        title
        action {
          primary {
            label
            link
          }
        }
        image {
          url
        }
        # image {
        #   childImageSharp {
        #     fixed(width: 480) {
        #       ...GatsbyImageSharpFixed
        #     }
        #   }
        # }
      }
      reportSections: reportsections {
        id
      }
      sectionWithContentAndImage: sectionwithcontentandimage {
        body
        action {
          primary {
            label
            link
          }
        }
        image_first
        title
        updatedAt
        id
        image {
          size
          url
        }
      }
      show_contact_form
      show_footer
      show_header
      show_subscribe_form
      slug
      strapiId
      title
      sectionWithContentInCenter: sectionwithcontentincenters {
        body
        action {
          primary {
            label
            link
          }
        }
        page
        title
        id
      }
    }

    allReportSections: allStrapiReportsection {
      edges {
        node {
          id
          order
          strapiId
          title
          reports {
            body
            id
            label
            legend
            legend_after
            legend_before
            title
            before_image {
              publicURL
            }
            after_image {
              publicURL
            }
          }
        }
      }
    }
  }
`
