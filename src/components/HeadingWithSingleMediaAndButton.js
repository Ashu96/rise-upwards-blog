import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'
import Img from 'gatsby-image'
import { navigate, useStaticQuery } from 'gatsby'
import { backgrounds } from 'uprise-uikit/colors/colors'

import { Container, Row, Col } from '../styles/grid'
import { Heading2, BodyText } from '../styles/text'
import { PrimaryButton } from '../styles/buttons'
import Icon from './Icon'

const HeadingWithSingleMediaAndButtonContainer = Styled.div`
  background-color: ${props =>
    props.bgPrimary ? backgrounds.fadedPurple : backgrounds.white};

  & .content > div {
    margin-top: 80px;
    width: 100%;
    height: 200px;
  }

  & .content .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }

  & .content {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 100px 0px;

    & p {
      text-align: center;
    }

    & h2 {
      padding: 0 20%;
      text-align: center;
    }
  }
`

function HeadingWithSingleMediaAndButton({ id, bgPrimary }) {
  const data = useStaticQuery(graphql`
    {
      allStrapiSectionwithcontentincenter {
        edges {
          node {
            id
            title
            strapiId
            body
            action {
              primary {
                label
                link
              }
            }
            image {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  if (!data) {
    return null
  }

  const currentData = data.allStrapiSectionwithcontentincenter.edges.filter(
    edge => edge.node.strapiId === id.trim()
  )

  const { node } = currentData && currentData.length && currentData[0]
  if (!node) {
    return null
  }

  const { title, image, action } = node
  return (
    <HeadingWithSingleMediaAndButtonContainer
      className="container-fluid"
      bgPrimary={bgPrimary}
    >
      <Container>
        <Row>
          <Col>
            <div className="content">
              <Heading2 className="mgn-b-20">{title}</Heading2>
              {image && (
                <div>
                  <Img fixed={image.childImageSharp.fluid} />
                </div>
              )}

              {action && action.primary && (
                <PrimaryButton
                  className="mgn-t-50"
                  onClick={() => navigate(action.primary.link)}
                >
                  {action.primary.label}
                  <Icon fill={backgrounds.white} />
                </PrimaryButton>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </HeadingWithSingleMediaAndButtonContainer>
  )
}

HeadingWithSingleMediaAndButton.propTypes = {
  id: PropTypes.string.isRequired,
  bgPrimary: PropTypes.bool
}

HeadingWithSingleMediaAndButton.defaultProps = {
  bgPrimary: false
}

export default HeadingWithSingleMediaAndButton
