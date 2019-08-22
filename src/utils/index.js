import React from 'react'
import SECTION_TYPES from '../constants/sectionTypes'
import BUTTON_TYPES from '../constants/buttonTypes'
import { PrimaryButton, LinkButton, OutLineButton } from '../styles/buttons'
import HeroSection from '../components/HeroSection'
import ContentWithImageList from '../components/ContentWithImageList'
import TourSection from '../components/tourSection'
import HeadingWithSingleMediaAndButton from '../components/HeadingWithSingleMediaAndButton'
import SingleMediaWithParagraphAndLink from '../components/SingleMediaWithParagraphAndLink'
import Reports from '../components/Reports'
import SectionWithCards from '../components/SectionWithCards'

export function getComponent(type) {
  switch (type) {
    case SECTION_TYPES.HERO_SECTION:
      return HeroSection
    case SECTION_TYPES.MULTIPLE_MEDIA_WITH_CAPTION:
      return ContentWithImageList
    case SECTION_TYPES.SINGLE_MEDIA_WITH_CAPTION_AND_PARAGRAPH:
      return TourSection
    case SECTION_TYPES.WITH_CARDS:
      return SectionWithCards
    case SECTION_TYPES.HEADING_WITH_SINGLE_MEDIA_AND_BUTTON:
      return HeadingWithSingleMediaAndButton
    case SECTION_TYPES.SINGLE_MEDIA_WITH_PARAGRAPH_AND_LINK:
      return SingleMediaWithParagraphAndLink
    case SECTION_TYPES.REPORTS:
      return Reports
    default:
      return () => <h1>No component found</h1>
  }
}

export function getButton(type) {
  switch (type) {
    case BUTTON_TYPES.LINK:
      return LinkButton
    case BUTTON_TYPES.PRIMARY:
      return PrimaryButton
    case BUTTON_TYPES.OUTLINE:
      return OutLineButton
    default:
      return props => <PrimaryButton {...props} secondary />
  }
}

export function getPublicURL(url) {
  return `${process.env.IMAGE_BASE_URL}${url}`
}

export function extractQueryData({ data, id }) {
  if (!data) {
    return null
  }

  const filteredDataArray = data.edges.filter(
    edge => edge.node.strapiId === id.trim()
  )

  const { node } =
    filteredDataArray && filteredDataArray.length && filteredDataArray[0]

  if (!node) {
    return null
  }

  return node
}

export function getSlugFromTitle(title) {
  return title
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-')
}
