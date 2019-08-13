import React from 'react'
import Styled from 'styled-components'
import Layout from '../components/layout'
import Step from '../components/step'
import { Container, Row, Col } from '../styles/grid'
import { Heading1, Heading2, BodyText } from '../styles/text'
import { PrimaryButton, LinkButton } from '../styles/buttons'
import { COLORS } from '../constants/styles'

const HeroSectionContainer = Styled.div`
  & .hero__content {
    text-align: left;

    & button {
      width: 100%;
      @media (min-width: 768px) {
        width: auto;
      }
    }
  }
  & .row {
    padding-top: 80px;
    padding-bottom: 140px;
  }
  & img {
    width: 100%;
    max-width: 567px;
    margin-top: 40px;
    @media (min-width: 768px) {
      margin-top: 0px;
    }
  }
`

const WellBeingSupportContainer = Styled.div`
  background-color: ${COLORS.fadeBackground};

  & .wellbeing__content {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 80px 0px;
  }
`
const OutComesContainer = Styled.div`
  & .row {
    padding-top: 100px;
    padding-bottom: 80px;
  }

  & .outcomes__content {
    margin-top: 40px;

    & button {
      margin-top: 30px;
      width: 100%;
     
      @media (min-width: 768px) {
        width: auto;
      }
    }
  }
`

const ProductContainer = Styled.div`
  & .top-row {
    margin-top: 113px;
  }

  & .steps {
    margin-top: 148px;
    & .row:nth-child(2n) {
      flex-direction: row-reverse;
    }   
  }
`

const LeaderShipContainer = Styled.div`
  background-color: ${COLORS.fadeBackground};

  & .leadership__content {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 100px 0px;
  }
`

const TestimonyContainer = Styled.div`
  & .testimony__content {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 100px 0px;
  }

  & img {
    width: 100%;
    max-width: 570px;
  }
`

function HowItWorksEmployer() {
  return (
    <Layout>
      <HeroSectionContainer className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="hero__content">
                <Heading1>Uprise is Employee Assistance PLUS</Heading1>
                <BodyText className="mgn-t-20 mgn-b-40">
                  Science-based, Digital, Preventative WellnessWellbeing
                  Training PLUS traditional EAP
                </BodyText>
                <PrimaryButton>Book a demo</PrimaryButton>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <img
                alt="uprise hero"
                src={require('../images/header-illustration@2x.jpg')}
              />
            </div>
          </div>
        </div>
      </HeroSectionContainer>
      <WellBeingSupportContainer className="container-fluid">
        <Container>
          <Row>
            <Col>
              <div className="wellbeing__content">
                <Heading2 className="mgn-b-80">
                  Wellbeing support should be more than just reacting in crisis.{' '}
                </Heading2>
                <Placeholder />
              </div>
            </Col>
          </Row>
        </Container>
      </WellBeingSupportContainer>
      <OutComesContainer className="container-fluid">
        <Container>
          <Row>
            <Col className="col-lg-6 d-flex justify-content-center">
              <Placeholder />
            </Col>
            <Col className="col-lg-6 ">
              <div className="outcomes__content">
                <Heading2 className="mgn-b-30">
                  Uprise is the only Employee Assistance Program based on
                  science with published research
                </Heading2>
                <BodyText>
                  Uprise only uses evidence-based approaches and has been
                  evaluated in 14 published studies. Our Upskill Program
                  outcomes are holistic and sustained for 3 months on measures
                  like wellbeing, engagement, performance, and stress and are
                  reported quarterly.{' '}
                </BodyText>
                <LinkButton>
                  See our outcomes <Icon />
                </LinkButton>
              </div>
            </Col>
          </Row>
        </Container>
      </OutComesContainer>
      <Separator className="container-fluid" />
      <ProductContainer className="container-fluid">
        <Container>
          <Row className="top-row">
            <Col>
              <Heading2>Product Overview</Heading2>
              <div className="steps">
                {productOverViews.map(step => {
                  console.log({ step })
                  return (
                    <Step
                      key={step.id}
                      title={step.title}
                      description={step.description}
                      imageSrc={step.image}
                    />
                  )
                })}
              </div>
            </Col>
          </Row>
        </Container>
      </ProductContainer>
      <LeaderShipContainer className="container-fluid">
        <Container>
          <Row>
            <Col>
              <div className="leadership__content">
                <Heading2 className="mgn-b-50">
                  Need to explain Uprise to your leadership team?
                </Heading2>
                <PrimaryButton>Download business case</PrimaryButton>
              </div>
            </Col>
          </Row>
        </Container>
      </LeaderShipContainer>
      <TestimonyContainer className="container-fluid">
        <Container>
          <Row>
            <Col>
              <div className="testimony__content">
                <Heading2 className="mgn-b-60">
                  Employee Wellness, Loved by Paypal
                </Heading2>
                <img
                  alt="paypal feedback"
                  src={require('../images/group-38@2x.jpg')}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </TestimonyContainer>
    </Layout>
  )
}

export default HowItWorksEmployer

const PlaceholderContainer = Styled.div`
  width: 100%;
  max-width: 624px;
  height: 418px;
  border-radius: 18px;
  background-image: linear-gradient(208deg, #b9e1ff, #9149ff);
`

function Placeholder() {
  return <PlaceholderContainer />
}

// export default Placeholder;

function Icon({ props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      width="24px"
      fill={COLORS.uprisePurple}
      {...props}
    >
      <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
    </svg>
  )
}

// export default Icon;

const Separator = Styled.div`
  height: 20px;
  width: 100%;
  background-color: ${COLORS.fadeBackground}
`
const productOverViews = [
  {
    id: 1,
    title: 'Modern Employee Assistance',
    image: require('../images/group-19@2x.jpg'),
    description: `face-to-face counselling with online booking system, manager support and launch support and refresh webinars`
  },
  {
    id: 2,
    title: `‘Upskill’ Digital Resilience Program`,
    description: `On-demand resilience training via app or web. Employees learn a toolkit of proven skills for improving resilience and emotional health. `,
    image: require('../images/group-33@2x.jpg')
  }
]
