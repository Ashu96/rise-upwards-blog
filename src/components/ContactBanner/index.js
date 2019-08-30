import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { SectionWrapper } from '../../styles/grid'
import { extractQueryData } from '../../utils'
import ContactBanner from './ContactBanner'

function ContactBannerSection({ id, bgPrimary }) {
  const data = useStaticQuery(graphql`
    {
      allStrapiContactBanner: allStrapiContactbanner {
        edges {
          node {
            id
            strapiId
            chat
            email
            phone
            title
            image {
              childImageSharp {
                fluid(maxWidth: 493) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            phoneIcon {
              childImageSharp {
                fixed(width: 32) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            emailIcon {
              childImageSharp {
                fixed(width: 32) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            chatIcon {
              childImageSharp {
                fixed(width: 32) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  `)

  const node = extractQueryData({
    data: data.allStrapiContactBanner,
    id
  })

  if (!node) {
    return null
  }

  const {
    chat,
    email,
    phone,
    title,
    image,
    phoneIcon,
    emailIcon,
    chatIcon
  } = node

  return (
    <SectionWrapper
      bgPrimary={bgPrimary}
      containerProps={{ style: { padding: '100px 0px' } }}
    >
      <ContactBanner
        title={title}
        phone={phone}
        email={email}
        chat={chat}
        media={image.childImageSharp.fluid}
        phoneIcon={phoneIcon.childImageSharp.fixed}
        emailIcon={emailIcon.childImageSharp.fixed}
        chatIcon={chatIcon.childImageSharp.fixed}
      />
    </SectionWrapper>
  )
}

export default ContactBannerSection
