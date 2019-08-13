import React from 'react'
import { graphql } from 'gatsby'
import orderBy from 'lodash/orderBy'
import Layout from '../components/layout'
import { getComponent } from '../utils'

function Outcomes({ data }) {
  const { strapiPage } = data

  const {
    sections,
    show_contact_form,
    show_footer,
    show_header,
    show_subscribe_form
  } = strapiPage

  return (
    <Layout
      showContact={show_contact_form}
      showSubscribe={show_subscribe_form}
      showHeader={show_header}
      showFooter={show_footer}
    >
      {orderBy(sections, ['order'], ['asc']).map(section => {
        const Component = getComponent(section.component)

        return (
          <Component
            key={section.componentId}
            id={section.componentId}
            bgPrimary={section.backgroundPrimary}
          />
        )
      })}
    </Layout>
  )
}

export default Outcomes

export const query = graphql`
  query($id: String!) {
    strapiPage(id: { eq: $id }) {
      id
      show_contact_form
      show_footer
      show_header
      show_subscribe_form
      strapiId
      sections {
        id
        componentId
        component
        order
        backgroundPrimary
      }
    }
  }
`
