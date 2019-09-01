import React from 'react'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'
import { extractQueryData } from '../../utils'
import HeroBanner from './HeroBanner'

function HeroBannerContainer({ id, bgPrimary }) {
	const data = useStaticQuery(graphql`
		{
			allHeroSection: allStrapiHerosection {
				edges {
					node {
						id
						strapiId
						title
						subTitle
						body
						splitScreen
						action {
							primary {
								label
								link
							}
							secondary {
								label
								link
							}
						}
						image {
							childImageSharp {
								fluid(maxWidth: 1160) {
									...GatsbyImageSharpFluid
								}
							}
						}
					}
				}
			}
		}
	`)

	const node = extractQueryData({
		data: data.allHeroSection,
		id
	})

	if (!node) {
		return null
	}

	const { title, subTitle, body, image, action, splitScreen } = node

	return (
		<HeroBanner
			bgPrimary={bgPrimary}
			title={title}
			subTitle={subTitle}
			body={body}
			action={action}
			image={image}
			splitScreen={splitScreen}
		/>
	)
}

HeroBannerContainer.propTypes = {
	bgPrimary: PropTypes.bool,
	id: PropTypes.string.isRequired
}

HeroBannerContainer.defaultProps = {
	bgPrimary: false
}

export default HeroBannerContainer
