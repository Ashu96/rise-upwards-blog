import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import { SectionWrapper } from '../styles/grid'
import FeaturedBlogCard from '../components/Blog/FeatureBlogCard'
import CategoryMenu from '../components/Blog/CategoryMenu'
import CategorySection from '../components/Blog/CategorySection'

function Blog({ data }) {
	const { allStrapiBlog, allStrapiBlogCategories } = data

	return (
		<Layout headerProps={{ bgPrimary: false }}>
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
				<CategoryMenu categories={allStrapiBlogCategories} />
			</SectionWrapper>
			{allStrapiBlog.group.map(item => {
				return (
					<CategorySection
						key={item.fieldValue}
						title={item.fieldValue}
						blogs={item.edges.map(({ node }) => ({ ...node }))}
					/>
				)
			})}
		</Layout>
	)
}

export default Blog

export const query = graphql`
	query allAboutBlogs {
		allStrapiBlog {
			group(field: blogcategories___title) {
				field
				fieldValue
				edges {
					node {
						title
						slug
						body
						content
						# date(fromNow: true)
						date(formatString: "MMMM DD, YYYY")
						show_contact_form
						show_subscribe_form
						strapiId
						blogcategories {
							id
							slug
							title
						}
						image {
							childImageSharp {
								fluid(maxWidth: 370) {
									...GatsbyImageSharpFluid
								}
							}
						}
					}
				}
				totalCount
			}
		}
		allStrapiBlogCategories: allStrapiBlogcategories {
			edges {
				node {
					active
					slug
					strapiId
					title
					blogs {
						id
					}
				}
			}
		}
	}
`
