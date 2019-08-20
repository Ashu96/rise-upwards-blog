import React from 'react'
import Layout from '../components/layout'
import { SectionWrapper, Row, Col } from '../styles/grid'
import FeaturedBlogCard from '../components/Blog/FeatureBlogCard'
import CategoryMenu from '../components/Blog/CategoryMenu'
import BlogCard from '../components/Blog/BlogCard'

const MENUS = [
  {
    key: 1,
    title: 'All categories',
    isActive: true
  },

  {
    key: 2,
    title: 'Workplace wellbeing',
    isActive: false
  },

  {
    key: 3,
    title: 'Workplace wellbeing',
    isActive: false
  },
  {
    key: 4,
    title: 'Workplace wellbeing',
    isActive: false
  }
]

const BLOGS = [
  {
    media: require('../images/blogs/1@3x.jpg'),
    key: 1
  },
  {
    media: require('../images/blogs/2@3x.jpg'),
    key: 2
  },
  {
    media: require('../images/blogs/3@3x.jpg'),
    key: 3
  },
  {
    media: require('../images/blogs/4@3x.jpg'),
    key: 4
  },
  {
    media: require('../images/blogs/5@3x.jpg'),
    key: 5
  },
  {
    media: require('../images/blogs/6@3x.jpg'),
    key: 6
  }
]

const SecondPage = () => (
  <Layout>
    <SectionWrapper
      bgPrimary
      containerProps={{ style: { padding: '100px 0px' } }}
    >
      <FeaturedBlogCard />
    </SectionWrapper>
    <SectionWrapper
      bgPrimary
      containerProps={{ style: { padding: '0px 0px' } }}
    >
      <CategoryMenu menus={MENUS} />
    </SectionWrapper>
    <SectionWrapper
      bgPrimary
      containerProps={{ style: { padding: '0px 0px' } }}
    >
      <Row>
        {BLOGS.map(blog => {
          return (
            <Col key={blog.key} className="col-md-6 col-xl-4 mgn-b-30">
              <BlogCard media={blog.media} />
            </Col>
          )
        })}
      </Row>
    </SectionWrapper>
  </Layout>
)

export default SecondPage
