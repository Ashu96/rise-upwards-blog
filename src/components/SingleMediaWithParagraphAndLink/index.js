import React from 'react'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'
import { extractQueryData } from '../../utils'
import SingleMediaWithParagraphAndLink from './SingleMediaWithParagraphAndLink'

function SingleMediaWithParagraphAndLinkContainer({ id, bgPrimary }) {
	const data = useStaticQuery(graphql`
		{
			allStrapiSectionwithcontentandimage {
				edges {
					node {
						id
						strapiId
						title
						body
						imageFirst
						image {
							childImageSharp {
								fixed(width: 285) {
									...GatsbyImageSharpFixed
								}
							}
						}
						action {
							primary {
								label
								link
							}
						}
						actionType
					}
				}
			}
		}
	`)

	const node = extractQueryData({
		data: data.allStrapiSectionwithcontentandimage,
		id
	})

	if (!node) {
		return null
	}

	return <SingleMediaWithParagraphAndLink bgPrimary={bgPrimary} {...node} />
}

SingleMediaWithParagraphAndLinkContainer.propTypes = {
	bgPrimary: PropTypes.bool,
	id: PropTypes.string.isRequired
}

SingleMediaWithParagraphAndLinkContainer.defaultProps = {
	bgPrimary: false
}

export default SingleMediaWithParagraphAndLinkContainer
