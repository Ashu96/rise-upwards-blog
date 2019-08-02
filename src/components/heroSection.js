import { useStaticQuery, navigate, graphql } from 'gatsby'
import React from 'react'
import Styled from 'styled-components'
import { COLORS } from '../constants/styles'
import { OutLineButton, PrimaryButton } from '../styles/buttons'
import { Heading1, Heading4, BodyText } from '../styles/text'

const HeroContentContainer = Styled.div`
  text-align: center;
  margin-top: 47px;

  & .hero__cta-container {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;

    & button {
      width: 75%;
      &:first-child {
        margin-bottom: 16px; 
      }
    }

    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: center;
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
    img {
      max-width: 100%;
    }
  }
`

function HeroSection() {
  const data = useStaticQuery(graphql`
    {
      strapiHerosection {
        id
        title
        description
        subTitle
        image {
          url
        }
      }
    }
  `)
  console.log({ Hero: data })

  if (!data) {
    return null
  }

  const {
    title,
    subTitle,
    description,
    image: { url: imageSrc }
  } = data.strapiHerosection

  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row">
          <div className="col">
            <HeroContentContainer className="hero__heading">
              <Heading1 className="text--semi-bold mgn-b-10">{title}</Heading1>
              <Heading4 className="text--brand mgn-b-20">{subTitle}</Heading4>
              <BodyText>{description}</BodyText>
              <div className="hero__cta-container">
                <PrimaryButton onClick={() => navigate('/help')}>
                  Book a demo
                </PrimaryButton>
                <OutLineButton onClick={() => navigate('/help')}>
                  Watch a minute video
                </OutLineButton>
              </div>
              <div className="hero__image-container">
                <img alt="hero" src={imageSrc} />
              </div>
            </HeroContentContainer>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
