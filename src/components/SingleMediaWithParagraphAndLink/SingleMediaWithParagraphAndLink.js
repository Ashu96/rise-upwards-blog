import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'
import { navigate } from 'gatsby'
import Img from 'gatsby-image'
import { Container, Row, Col } from '../../styles/grid'
import { Heading2, BodyText } from '../../styles/text'
import { backgrounds, primary } from '../../constants/colors'
import Icon from '../Icon'
import { getButton } from '../../utils'

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

function SingleMediaWithParagraphAndLink({
  bgPrimary,
  title,
  body,
  action,
  image,
  imageFirst,
  actionType
}) {
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
                  <Icon fill={primary.purple} />
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
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  action: PropTypes.object.isRequired,
  image: PropTypes.object.isRequired,
  imageFirst: PropTypes.bool.isRequired,
  actionType: PropTypes.string.isRequired,
  bgPrimary: PropTypes.bool
}

SingleMediaWithParagraphAndLink.defaultProps = {
  title: `Uprise is the only Employee Assistance Program based on science with published research`,
  body: `Uprise only uses evidence-based approaches and has been evaluated in 14 published studies.
   Our Upskill Program outcomes are holistic and sustained for 3 months on measures 
  like wellbeing, engagement, performance, and stress and are reported quarterly. `,
  action: {},
  image: null,
  imageFirst: false,
  actionType:'link',
  bgPrimary: false
}

export default SingleMediaWithParagraphAndLink
