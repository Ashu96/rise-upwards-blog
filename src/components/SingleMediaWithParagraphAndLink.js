import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'
import { navigate, graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { Container, Row, Col } from '../styles/grid'
import { Heading2, BodyText } from '../styles/text'
import { backgrounds } from '../constants/colors'
import Icon from './Icon'
import { extractQueryData, getButton } from '../utils'

const SingleMediaWithParagraphAndLinkContainer = Styled.div`
  background-color: ${props =>
    props.bgPrimary ? backgrounds.fadedPurple : backgrounds.white};

  & .row {
    flex-direction: ${props => (props.imageFirst ? 'row' : 'row-reverse')};
  }

  & .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 40px;
    padding-bottom: 60px;
    text-align: center;

    @media (min-width: 768px) {
      align-items: start;
      padding-right: ${props => (props.imageFirst ? '100px' : '80px')};
      padding-top: 100px;
      padding-bottom: 100px;
      text-align: left;
    }
  }
  & .media {
    /* display: flex;
    justify-content: center; */
    padding-top: 60px;
    padding-bottom: 40px;

    @media (min-width: 768px) {
      /* justify-content: flex-end;  */
      padding-right: ${props => (props.imageFirst ? '100px' : '80px')};
      padding-top: 100px;
      padding-bottom: 100px;
    }

    /* & img {
      max-width: 245px;
    } */
  }
`

function SingleMediaWithParagraphAndLink({ id, bgPrimary }) {
  const data = useStaticQuery(graphql`
    {
      allStrapiSectionwithcontentandimage {
        edges {
          node {
            id
            strapiId
            title
            body
            imageFirst
            image {
              childImageSharp {
                fluid(maxWidth: 285) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            action {
              primary {
                label
                link
              }
            }
            actionType
          }
        }
      }
    }
  `)

  const node = extractQueryData({
    data: data.allStrapiSectionwithcontentandimage,
    id
  })

  if (!node) {
    return null
  }

  const { title, body, action, image, imageFirst, actionType } = node

  const Button = getButton(actionType)

  return (
    <SingleMediaWithParagraphAndLinkContainer
      className="container-fluid"
      bgPrimary={bgPrimary}
      imageFirst={imageFirst}
    >
      <Container>
        <Row>
          <Col className="col-lg-6">
            <div className="media">
              {image && <Img fluid={image.childImageSharp.fluid} alt={title} />}
            </div>
          </Col>
          <Col className="col-lg-6">
            <div className="content">
              <Heading2 className="mgn-b-20">{title}</Heading2>
              <BodyText>{body}</BodyText>
              {action && action.primary && (
                <Button
                  className="mgn-t-50"
                  onClick={() => navigate(action.primary.link)}
                >
                  {action.primary.label}
                  <Icon fill={backgrounds.fadedPurple} />
                </Button>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </SingleMediaWithParagraphAndLinkContainer>
  )
}

SingleMediaWithParagraphAndLink.propTypes = {
  bgPrimary: PropTypes.bool,
  id: PropTypes.string.isRequired
}

SingleMediaWithParagraphAndLink.defaultProps = {
  bgPrimary: false
}

export default SingleMediaWithParagraphAndLink
