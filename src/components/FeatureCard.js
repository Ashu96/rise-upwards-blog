import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'
import Img from 'gatsby-image'
import { COLORS } from '../constants/styles'
import { Heading3, BodyText } from '../styles/text'

const FeatureCardContainer = Styled.div`
  /* width: 370px; */
  width: auto;
  min-height: 561px;
  background-color: ${COLORS.fadeBackground};
  padding: 40px;
  text-align: center;

  margin-top: 16px;

  & .image-container {
    margin: 40px 0px;

    & img {
      height: 171px;
    }
  }

  & .heading {
    display: flex;
    flex-direction: column;

    margin-bottom: 64px;
  }

  @media (min-width: 768px) {
    min-width: 300px;
    min-height: 620px;
  }

  @media (min-width: 1220px) {
    width: 345px;
    min-height: 590px;
  }
`

function FeatureCard({ title, imageSrc, imageFixed, body }) {
  return (
    <FeatureCardContainer>
      <Heading3>{title}</Heading3>
      <div className="image-container">
        {imageSrc && <img src={imageSrc} alt={title} />}
        {imageFixed && <Img fixed={imageFixed} alt={title} />}
      </div>
      <BodyText>{body}</BodyText>
    </FeatureCardContainer>
  )
}

export default FeatureCard

FeatureCard.propTypes = {
  title: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
}
