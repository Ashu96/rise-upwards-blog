import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'
import { backgrounds, extended, primary } from '../../constants/colors'
import { Heading1, BodyText, Note } from '../../styles/text'

const BlogCardContainer = Styled.div`
  background-color: ${backgrounds.white}; 
  border-radius: 10px;
  box-shadow: 0 2px 4px 0 rgba(219, 221, 227, 0.8);
  width: 370px;

  & img {
    width: 100%;
    height: 100%;
  }

  & .content {
    padding: 24px;

    & .title {
      margin-bottom: 5px;
    }

    & .body {
      margin-bottom: 20px;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;

    }

    @media (min-width: 768px) {
      /* padding: 60px 70px; */

    }
  }
`

function BlogCard({ title, media, body, date, category }) {
  return (
    <BlogCardContainer>
      <div className="media">
        <img src={media} />
      </div>
      <div className="content">
        <BodyText className="title" bold color={primary.charcoal}>
          {title}
        </BodyText>
        <Note className="body" color={extended.charcoal.one}>
          {body}
        </Note>
        <div className="meta">
          <Note color={extended.charcoal.three}>
            {date} | {category}
          </Note>
        </div>
      </div>
    </BlogCardContainer>
  )
}

export default BlogCard

BlogCard.propTypes = {
  title: PropTypes.string.isRequired
}

BlogCard.defaultProps = {
  media: require('../../images/blogs/1@3x.jpg'),
  title: `Learn what HR Managers think is the best EAP Strategy`,
  body: `Uprise recently surveyed a group of 47 HR and WHS managers and asked about their views on mental health and EAP strategy. Those surveyed were from mostly whi…`,
  date: 'June 13, 2019',
  category: 'Wellbeing'
}
