import { useStaticQuery, navigate, graphql } from 'gatsby'
import React from 'react'
import Styled from 'styled-components'
import Img from 'gatsby-image'
import { OutLineButton, PrimaryButton } from '../styles/buttons'
import { Heading1, Heading4, BodyText } from '../styles/text'
import { extractQueryData } from '../utils'

const HeroContentContainer = Styled.div`
  text-align: ${props => (props.splitScreen ? 'left' : 'center')};
  padding-top: 100px;
  padding-bottom: 115px;

  & .hero__heading {
    display: flex;
    flex-direction: ${props => (props.splitScreen ? 'row' : 'column')}
    flex-wrap: wrap;
  }

  & .hero__content {
    display: flex;
    flex-direction: column;
    align-items: ${props => (props.splitScreen ? 'start' : 'center')};;
    flex: 0 0 100%;
    max-width: 100%;
    
    & p {
      @media (min-width: 768px) {
        padding: ${props =>
          props.splitScreen ? '0px 25% 0px 0px' : '0px 20%'};
      }
    }

    @media (min-width: 768px) {
      flex: ${props => (props.splitScreen ? '0 0 50%' : '0 0 100%')};
      max-width: ${props => (props.splitScreen ? '50%' : '100%')};
    }
  }


  & .hero__cta-container {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    & button {
      width: 100%;

      &:first-child {
        margin-bottom: 16px; 
      }
    }

    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: center;
      width: auto;
      & button {
        width: auto;
      }
      & button:first-child {
        margin: 0px;
        margin-right: 16px;
      }
    }
  }

  & .hero__image-container {
    margin-top: 50px;
    margin-bottom: 20px;
    & > div {
      /* min-height: 300px; */
    }
    img {
      max-width: 100%;
      /* min-height: 300px; */
    }
    width: 100%;
    @media (min-width: 768px) {
      flex: ${props => (props.splitScreen ? '0 0 50%' : '0 0 100%')};
      max-width: ${props => (props.splitScreen ? '50%' : '100%')};
    }
  }
`

function HeroSection({ id }) {
  const data = useStaticQuery(graphql`
    {
      allHeroSection: allStrapiHerosection {
        edges {
          node {
            id
            strapiId
            title
            subTitle
            body
            splitScreen
            action {
              primary {
                label
                link
              }
              secondary {
                label
                link
              }
            }
            image {
              childImageSharp {
                fluid(maxWidth: 1160, maxHeight: 500) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  const node = extractQueryData({
    data: data.allHeroSection,
    id
  })

  if (!node) {
    return null
  }

  const { title, subTitle, body, image, imageSrc, action, splitScreen } = node

  return (
    <HeroContentContainer className="container-fluid" splitScreen={splitScreen}>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="hero__heading" s>
              <div className="hero__content">
                <Heading1 className="text--semi-bold mgn-b-10">
                  {title}
                </Heading1>
                <Heading4 className="text--brand mgn-b-20">{subTitle}</Heading4>
                <BodyText>{body}</BodyText>
                <div className="hero__cta-container">
                  {action.primary && (
                    <PrimaryButton
                      onClick={() => navigate(action.primary.link)}
                    >
                      {action.primary.label}
                    </PrimaryButton>
                  )}
                  {action.secondary && (
                    <OutLineButton
                      onClick={() => navigate(action.secondary.link)}
                    >
                      {action.secondary.label}
                    </OutLineButton>
                  )}
                </div>
              </div>
              <div className="hero__image-container">
                {imageSrc && <img alt="hero" src={imageSrc} />}
                {image && (
                  <Img fluid={image.childImageSharp.fluid} alt={'hero'} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </HeroContentContainer>
  )
}

export default HeroSection
