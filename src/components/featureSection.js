import React from 'react'
import Styled from 'styled-components'
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

function FeatureSection({ title, cards }) {
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
                {cards.map(card => {
                  return (
                    <div key={card.id} className="col col-lg-4">
                      <FeatureCard
                        title={card.title}
                        body={card.body}
                        imageSrc={card.image.publicURL}
                        imageFixed={card.image.childImageSharp.fixed}
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
