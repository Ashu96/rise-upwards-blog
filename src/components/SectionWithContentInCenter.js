import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'
import { Container, Row, Col } from '../styles/grid'
import { Heading2, BodyText } from '../styles/text'
import { PrimaryButton } from '../styles/buttons'
import { COLORS } from '../constants/styles'
import Icon from './Icon'

const SectionWithContentInCenterContainer = Styled.div`
  background-color: ${props =>
    props.bgPrimary ? COLORS.fadeBackground : COLORS.justWhite};

  & .content {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 100px 0px;

    & p {
      text-align: center;
    }
  }
`

function SectionWithContentInCenter({ title, body, action, bgPrimary }) {
  return (
    <SectionWithContentInCenterContainer
      className="container-fluid"
      bgPrimary={bgPrimary}
    >
      <Container>
        <Row>
          <Col>
            <div className="content">
              <Heading2 className="mgn-b-20">{title}</Heading2>
              <BodyText>{body}</BodyText>
              {action && (
                <PrimaryButton className="mgn-t-50" onClick={action.action}>
                  {action.label}
                  <Icon fill={COLORS.justWhite} />
                </PrimaryButton>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </SectionWithContentInCenterContainer>
  )
}

SectionWithContentInCenter.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string,
  action: PropTypes.shape({
    label: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired
  }),
  bgPrimary: PropTypes.bool
}

SectionWithContentInCenter.defaultProps = {
  bgPrimary: false
}

export default SectionWithContentInCenter