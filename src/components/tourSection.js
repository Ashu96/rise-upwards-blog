import { graphql, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Styled from 'styled-components'
import { Heading1, Heading2, Note, BodyText } from '../styles/text'

const TourContentContainer = Styled.div`
  /* margin-top: 120px;
  margin-bottom: 120px; */
  margin: 60px 0px;

  flex-direction: column;
  & button {
    margin-right: 16px;
  }

  & .steps {
    margin-top: 148px;
    & .row:nth-child(2n) {
      flex-direction: row-reverse;
    }   
  }
`

function TourSection() {
  const data = useStaticQuery(graphql`
    {
      allStrapiStep(sort: { order: ASC, fields: stepNumber }) {
        edges {
          node {
            id
            title
            description
            stepNumber
            image {
              url
            }
          }
        }
      }
    }
  `)
  const { allStrapiStep } = data

  return (
    <div
      className="container-fluid"
      style={{
        borderBottom: '1px solid #cecbfc',
        borderTop: '1px solid #cecbfc'
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col">
            <TourContentContainer className="d-flex justify-content-center align-items-center">
              <Heading1>Our solution is based</Heading1>
              <Heading1>on a new preventative technology called</Heading1>
              <Heading1>Stepped Care</Heading1>
              <div className="steps">
                {allStrapiStep.edges.map(edge => {
                  const { node } = edge
                  return (
                    <Step
                      key={node.id}
                      title={node.title}
                      description={node.description}
                      stepNumber={node.stepNumber}
                      imageSrc={node.image.url}
                    />
                  )
                })}
              </div>
            </TourContentContainer>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TourSection

const StepContainer = Styled.div`
  display: flex;
  margin-bottom: 70px;
  /* margin-bottom: 140px; */

`

const StepImage = Styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  
  & img {
    width: 100%;
    height: auto;
    max-height: 395px;

    @media (min-width: 768px) {
      width: 70%;
    }
  }
`

const StepInfo = Styled.div`
  margin-top: 16px;

  & p {
    margin-bottom: 10px;
  }

  & h2 {
    text-align: left;
    margin-bottom: 20px;
  }
`

function Step({ title, stepNumber, description, imageSrc }) {
  return (
    <StepContainer className="row">
      <div className="col-12 col-lg-6">
        <StepImage>
          <img src={imageSrc} />
        </StepImage>
      </div>
      <div className="col-12 col-lg-6">
        <StepInfo>
          <Note>{`STEP ${stepNumber}`}</Note>
          <Heading2>{title}</Heading2>
          <BodyText>{description}</BodyText>
        </StepInfo>
      </div>
    </StepContainer>
  )
}

// export default Steps;

Step.propType = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  stepNumber: PropTypes.number.isRequired
}
