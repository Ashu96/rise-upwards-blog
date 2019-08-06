import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'
import { navigate } from 'gatsby'
import { Container, Row, Col } from '../styles/grid'
import { Heading1, Heading4, BodyText } from '../styles/text'
import { PrimaryButton, OutLineButton } from '../styles/buttons'

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

function HeroContent({ title, subTitle, description, actions, imageSrc }) {
  return (
    <HeroContentContainer className="container-fluid">
      <Container>
        <Row>
          <Col>
            <div className="hero__heading">
              <Heading1 className="mgn-b-10">{title}</Heading1>
              <Heading4 className="mgn-b-20">{subTitle}</Heading4>
              <BodyText>{description}</BodyText>
              <div className="hero__cta-container">
                <PrimaryButton onClick={actions.primary.action}>
                  {actions.primary.label}
                </PrimaryButton>
                {actions.secondary && (
                  <OutLineButton onClick={actions.primary.action}>
                    {actions.secondary.label}
                  </OutLineButton>
                )}
              </div>
              <div className="hero__image-container">
                <img alt="hero" src={imageSrc} />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </HeroContentContainer>
  )
}

HeroContent.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  description: PropTypes.string,
  actions: PropTypes.shape({
    primary: PropTypes.shape({
      label: PropTypes.string.isRequired,
      action: PropTypes.func.isRequired
    }).isRequired,
    secondary: PropTypes.shape({
      label: PropTypes.string.isRequired,
      action: PropTypes.func.isRequired
    })
  }),
  imageSrc: PropTypes.string.isRequired
}

HeroContent.defaultProps = {
  actions: {
    primary: {
      label: 'Book a demo',
      action: () => navigate('/')
    }
  }
}

export default HeroContent
