import React from 'react'
import { graphql } from 'gatsby'
import Styled from 'styled-components'
import Img from 'gatsby-image'
import ReactMarkdown from 'react-markdown'
import Layout from '../components/layout'
import RelatedPosts from '../components/Blog/RelatedPosts'
import { Heading1, BodyText } from '../styles/text'
import { SectionWrapper, Row, Col } from '../styles/grid'
import { backgrounds, primary, extended } from '../constants/colors'

const BlogContentContainer = Styled.div`
  background-color: ${backgrounds.white};
  padding: 80px 0px;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(219, 221, 227, 0.8);
`

const ContentWrapper = Styled.div`
  & img {
    width: 100%;
  }

  & li {
    font-family: ${props =>
			props.bold ? 'Proxima Nova Semibold' : 'Proxima Nova'};
    font-size: 18px;
    font-weight: ${props => (props.bold ? 600 : 'normal')};
    font-style: normal;
    font-stretch: normal;
    line-height: 1.56;
    letter-spacing: normal;
    text-align: ${props => (props.textCenter ? 'center' : 'inherit')};
    color: ${props => (props.color ? props.color : extended.charcoal.one)};
    
  }

  & p {
    font-family: ${props =>
			props.bold ? 'Proxima Nova Semibold' : 'Proxima Nova'};
    font-size: 18px;
    font-weight: ${props => (props.bold ? 600 : 'normal')};
    font-style: normal;
    font-stretch: normal;
    line-height: 1.56;
    letter-spacing: normal;
    text-align: ${props => (props.textCenter ? 'center' : 'inherit')};
    color: ${props => (props.color ? props.color : extended.charcoal.one)};
    
    margin-bottom: 50px;
  }

  & h1, h2, h3, h4 {
    margin-bottom: 20px;
  }

  & h2 {
    font-family: 'proxima_nova_ltsemibold';
    font-size: 32px;
    font-weight: 600;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.25;
    letter-spacing: normal;
    text-align: ${props => (props.textCenter ? 'center' : 'inherit')};
    color: ${primary.charcoal};
  }

  & h3 {
    font-family: 'proxima_nova_ltsemibold';
    font-size: 24px;
    font-weight: 600;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.25;
    letter-spacing: normal;
    text-align: ${props => (props.textCenter ? 'center' : 'inherit')};
    color: ${primary.charcoal};Z
  }

`

function Blog({ data }) {
	const { strapiBlog } = data

	const category =
		strapiBlog &&
		strapiBlog.blogcategories &&
		strapiBlog.blogcategories[0] &&
		strapiBlog.blogcategories[0].title

	const relatedBlogsID =
		strapiBlog &&
		strapiBlog.blogcategories &&
		strapiBlog.blogcategories[0] &&
		strapiBlog.blogcategories[0].blogs

	return (
		<Layout
			headerProps={{ bgPrimary: false }}
			showContact={strapiBlog.show_contact_form}
			contactFormProps={{ bgPrimary: false }}
		>
			<SectionWrapper
				bgPrimary
				containerProps={{
					style: { padding: '100px 0px' }
				}}
			>
				<BlogContentContainer>
					<Row className="justify-content-center">
						<Col className="col-lg-9">
							<Heading1 textCenter className="mgn-t-60">
								{strapiBlog.title}
							</Heading1>
							<BodyText textCenter className="mgn-t-20">
								{strapiBlog.date} | {category}
							</BodyText>

							<Img
								fluid={strapiBlog.image.childImageSharp.fluid}
								className="mgn-t-100 mgn-b-40"
								alt="nesting"
							/>
							<ContentWrapper>
								<ReactMarkdown source={strapiBlog.content} />
							</ContentWrapper>
						</Col>
					</Row>
				</BlogContentContainer>
				<RelatedPosts relatedBlogsID={relatedBlogsID} />
			</SectionWrapper>
		</Layout>
	)
}

export default Blog

export const query = graphql`
	query($id: String!) {
		strapiBlog(id: { eq: $id }) {
			id
			strapiId
			title
			body
			date(formatString: "MMMM DD, YYYY")
			content
			slug
			image {
				childImageSharp {
					fluid(maxWidth: 770) {
						...GatsbyImageSharpFluid
					}
				}
			}
			show_subscribe_form
			show_contact_form
			blogcategories {
				id
				title
				blogs
			}
		}
	}
`
