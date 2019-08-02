import React from 'react'
import Styled from 'styled-components'
import { Heading2 } from '../styles/text'

const AwardContentContainer = Styled.div`
  margin-top: 120px;
  margin-bottom: 120px;

  flex-direction: column;
  & button {
    margin-right: 16px;

  }
`

function AwardSection({ data }) {
  const { title, images } = data
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
            <AwardContentContainer className="d-flex justify-content-center align-items-center">
              <Heading2>{title}</Heading2>
              <List images={images} />
            </AwardContentContainer>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AwardSection

const ListContainer = Styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  padding: 0px;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`

const ListItem = Styled.li`
  & img {
    height: 60px;
    margin-bottom: 16px;
    @media (min-width: 768px) {
      margin-right: 40px;
    }
    /* margin-right: 69px; */
  }
`

function List({ images }) {
  return (
    <ListContainer>
      {images.map(image => (
        <ListItem key={image.id}>
          <img src={getPublicUrl(image.url)} />
        </ListItem>
      ))}
    </ListContainer>
  )
}

// export default List;


function getPublicUrl(url) {
  const baseURL = process.env.DEPLOY_URL
    ? 'https://rise-upwards.herokuapp.com'
    : 'http://localhost:1337',
  
  return `${baseURL}${url}`
}