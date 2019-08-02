import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Styled from 'styled-components'
import { COLORS } from '../constants/styles'
import { OutLineButton, LinkButton } from '../styles/buttons'

const HeaderContainer = Styled.header`
  background-color: ${COLORS.fadeBackground};
  min-height: 70px;

  & .row {
    padding: 27px 0px;
  }

  & .header__logo {
    margin: 0px;
  }

  & ul {
    list-style: none;
    display: flex;
    margin: 0px;
    & li {
      margin: 0px;
      margin-right: 49px;

      & a {
        color: ${COLORS.textFaded};
        text-decoration: none;
        font-size: 16px;
      }
    }
  }

  & .mobile--hide {
    display: none !important;
  }

  @media (min-width: 1220px) {
    & .mobile--hide {
      display: block;
    }
  }
`

const Header = ({ siteTitle }) => (
  <HeaderContainer className="container-fluid nav-header">
    <div className="container">
      <div className="row">
        <div className="col-8 d-flex align-items-center ">
          <Link to="/">
            <img
              className="header__logo"
              alt="uprise logo"
              src={require('../images/upriselogo.svg')}
            />
          </Link>
          <ul className="mobile--hide">
            <li>
              <Link to="/">For Employers</Link>
            </li>
            <li>
              <Link to="/">For Employees</Link>
            </li>
            <li>
              <Link to="/">Pricing</Link>
            </li>
            <li>
              <Link to="/">Help</Link>
            </li>
          </ul>
        </div>
        <div className="mobile--hide col-4 d-flex align-items-center justify-content-end">
          <LinkButton>Login</LinkButton>
          <OutLineButton>Book demo</OutLineButton>
        </div>
        <Menu />
      </div>
    </div>
  </HeaderContainer>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header

const MenuContainer = Styled.div`
  /* color: black; */
  /* position: relative; */
  & button {
    margin: 0px;
    padding: 0px;
    background: none;
    border: none;
  }

  & .menu-icon {
    position: absolute;
    top: 27px;
    right: 20px;
    width: 24px;
    height: 24px;
  }

  & .menu__container {
    position: fixed;
    z-index: 20;
    background-color: ${COLORS.uprisePurple};
    color: ${COLORS.justWhite};
    width: 100%;
    height: 100vh;
    top: 70px;
    left: 0px;
  }

  & .menu__list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;

    & li {
      margin: 0px;
      margin-top: 49px;

      & a {
        color: ${COLORS.justWhite};
        text-decoration: none;
        font-size: 18px;
      }
    }
  }
`

function Menu() {
  const [open, toggleOpen] = React.useState(false)

  return (
    <MenuContainer>
      <button onClick={() => toggleOpen(!open)}>
        {!open ? (
          <img className="menu-icon" src={require('../images/menu.svg')} />
        ) : (
          <img
            className="menu-icon close"
            src={require('../images/close.svg')}
          />
        )}
      </button>
      {open && (
        <div className="menu__container">
          <ul className="menu__list">
            <li>
              <Link to="/">For Employers</Link>
            </li>
            <li>
              <Link to="/">For Employees</Link>
            </li>
            <li>
              <Link to="/">Pricing</Link>
            </li>
            <li>
              <Link to="/">Help</Link>
            </li>
          </ul>
        </div>
      )}
    </MenuContainer>
  )
}

// export default Menu;
