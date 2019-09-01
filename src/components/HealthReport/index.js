import React from 'react'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'
import { extractQueryData } from '../../utils'
import HealthReportBlock from './HealthReportBlock'

function HealthReportContainer({ id, bgPrimary }) {
	const data = useStaticQuery(graphql`
		{
			allStrapiReportSection: allStrapiReportsection {
				edges {
					node {
						strapiId
						title
						order
						reports {
							body
							label
							id
							legend
							legend_before
							legend_after
							title
							after_image {
								publicURL
								childImageSharp {
									fixed(width: 192) {
										...GatsbyImageSharpFixed
									}
								}
							}
							before_image {
								publicURL
								childImageSharp {
									fixed(width: 192) {
										...GatsbyImageSharpFixed
									}
								}
							}
						}
					}
				}
			}
		}
	`)

	const node = extractQueryData({
		data: data.allStrapiReportSection,
		id
	})

	if (!node) {
		return null
	}

	return <HealthReportBlock bgPrimary={bgPrimary} {...node} />
}

HealthReportContainer.propTypes = {
	bgPrimary: PropTypes.bool,
	id: PropTypes.string.isRequired
}

HealthReportContainer.defaultProps = {
	bgPrimary: false
}

export default HealthReportContainer
