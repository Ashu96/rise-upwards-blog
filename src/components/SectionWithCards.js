import React from 'react'
import Styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { backgrounds } from 'uprise-uikit/colors/colors'
import { Heading2 } from '../styles/text'
import FeatureCard from './FeatureCard'
import { extractQueryData } from '../utils'

const FeatureSectionContainer = Styled.div`
  background-color: ${props =>
    props.bgPrimary ? backgrounds.fadedPurple : backgrounds.white};

  margin-top: 100px;
  margin-bottom: 120px;
  text-align: center;

  & .heading {
    display: flex;
    flex-direction: column;
    margin-bottom: 64px;

    @media (min-width: 768px) {
     padding: 0px 20%;
    }
  }

  & .cards {
    
  }

`

function SectionWithCards({ id, bgPrimary }) {
  const data = useStaticQuery(graphql`
    {
      allStrapiContentwithcard {
        edges {
          node {
            cards {
              body
              id
              order
              title
              image {
                childImageSharp {
                  fluid(maxWidth: 285) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            strapiId
            id
            title
          }
        }
      }
    }
  `)

  const node = extractQueryData({
    data: data.allStrapiContentwithcard,
    id
  })

  if (!node) {
    return null
  }

  const { title, cards } = node

  return (
    <FeatureSectionContainer className="container-fluid" bgPrimary={bgPrimary}>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="content">
              <div className="heading">
                <Heading2>{title}</Heading2>
              </div>
              <div className="row">
                {cards.map(card => {
                  return (
                    <div key={card.id} className="col col-lg-4">
                      <FeatureCard
                        title={card.title}
                        body={card.body}
                        imageSrc={card.image.publicURL || card.image.url}
                        imageFluid={
                          card.image.childImageSharp &&
                          card.image.childImageSharp.fluid
                        }
                      />
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </FeatureSectionContainer>
  )
}

export default SectionWithCards
