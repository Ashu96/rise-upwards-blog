import React from 'react'
import { navigate, Link } from 'gatsby'
import { getButton } from '../../utils'
import Img from 'gatsby-image'
import Icon from '../Icon'
import { backgrounds, primary, extended } from '../../constants/colors'

export function NavLogo({ item }) {
  return (
    <li className="header__logo">
      <Link to={item.link}>
        {item.image && <Img fixed={item.image.childImageSharp.fixed} alt="" />}
        {!item.image && item.title}
      </Link>
    </li>
  )
}

export function NavLink({ item }) {
  return (
    <li className="header__nav-item">
      <Link to={item.link}>
        {item.image && <Img fixed={item.image.childImageSharp.fixed} alt="" />}
        {!item.image && item.title}
      </Link>
    </li>
  )
}

export function NavDropDown({ item }) {
  return (
    <li className="header__nav-item">
      <Link to={item.link}>
        {item.image && <Img fixed={item.image.childImageSharp.fixed} alt="" />}
        {!item.image && item.title}
        {item.type === 'DROP_DOWN' && (
          <Icon
            fill={extended.charcoal.three}
            rotate={90}
            className="header__nav-item--icon"
          />
        )}
      </Link>
    </li>
  )
}

export function NavButton({ item }) {
  const Button = getButton(item.actionType)
  return (
    <li className="header__nav-cta">
      <Button onClick={() => navigate(item.link)}>
        {!item.image && item.title}
      </Button>
    </li>
  )
}
