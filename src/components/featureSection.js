import React from 'react'
import Styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import { Heading2 } from '../styles/text'
import FeatureCard from './FeatureCard'

const FeatureSectionContainer = Styled.div`
  margin-top: 100px;
  margin-bottom: 120px;
  text-align: center;

  & .heading {
    display: flex;
    flex-direction: column;

    margin-bottom: 64px;
  }

  & .cards {
    
  }

`

function FeatureSection() {
  const data = useStaticQuery(graphql`
    {
      allStrapiFeature {
        edges {
          node {
            title
            id
            description
            image {
              url
            }
          }
        }
      }
    }
  `)
  if (!data) {
    return null
  }
  const { allStrapiFeature } = data

  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row">
          <div className="col">
            <FeatureSectionContainer>
              <div className="heading">
                <Heading2>Not your traditional</Heading2>
                <Heading2>Employee Assistance Program provider</Heading2>
              </div>
              <div className="row">
                {allStrapiFeature.edges.map(edge => {
                  const { node } = edge
                  return (
                    <div key={node.id} className="col col-lg-4">
                      <FeatureCard
                        title={node.title}
                        description={node.description}
                        imageSrc={node.image.url}
                      />
                    </div>
                  )
                })}
              </div>
            </FeatureSectionContainer>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeatureSection
