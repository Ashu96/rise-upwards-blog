import React from 'react'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'
import Header from './Header'

function HeaderContainer({ siteTitle, bgPrimary }) {
	const data = useStaticQuery(graphql`
		{
			strapiHeaders {
				id
				strapiId
				title
				bgPrimary
				navItems: navitems {
					id
					RHS
					active
					header
					link
					title
					type
					actionType
					image {
						childImageSharp {
							fixed(width: 100) {
								...GatsbyImageSharpFixed
							}
						}
					}
				}
			}
			allStrapiNavItems: allStrapiNavitems {
				group(field: strapiId) {
					field
					fieldValue
					nodes {
						RHS
						actionType
						active
						id
						link
						strapiId
						title
						type
						navitems {
							actionType
							id
							link
							active
							title
							type
						}
					}
				}
			}
		}
	`)

	const { strapiHeaders, allStrapiNavItems } = data

	const { navItems } = strapiHeaders

	const allNavItems = {}

	allStrapiNavItems.group.forEach(item => {
		allNavItems[item.fieldValue] = item.nodes[0]
	})

	return (
		<Header
			bgPrimary={bgPrimary}
			siteTitle={siteTitle}
			navItems={navItems}
			allNavItems={allNavItems}
		/>
	)
}

HeaderContainer.propTypes = {
	bgPrimary: PropTypes.bool
	// id: PropTypes.string.isRequired
}

HeaderContainer.defaultProps = {
	bgPrimary: false
}

export default HeaderContainer
