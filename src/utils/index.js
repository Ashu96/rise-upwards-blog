import React from 'react'
import SECTION_TYPES from '../constants/sectionTypes'
import HeroSection from '../components/heroSection'
import ContentWithImageList from '../components/ContentWithImageList'
import TourSection from '../components/tourSection'
import HeadingWithSingleMediaAndButton from '../components/HeadingWithSingleMediaAndButton'
import SingleMediaWithParagraphAndLink from '../components/SingleMediaWithParagraphAndLink'

export function getComponent(type) {
  switch (type) {
    case SECTION_TYPES.HERO_SECTION:
      return HeroSection
    case SECTION_TYPES.MULTIPLE_MEDIA_WITH_CAPTION:
      return ContentWithImageList
    case SECTION_TYPES.SINGLE_MEDIA_WITH_CAPTION_AND_PARAGRAPH:
      return TourSection

    case SECTION_TYPES.HEADING_WITH_SINGLE_MEDIA_AND_BUTTON:
      return HeadingWithSingleMediaAndButton
    case SECTION_TYPES.SINGLE_MEDIA_WITH_PARAGRAPH_AND_LINK:
      return SingleMediaWithParagraphAndLink
    default:
      return () => <h1>No component found</h1>
  }
}

export function getPublicURL(url) {
  return `http://localhost:1337${url}`
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
