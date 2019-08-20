import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'
import { Row, Col } from '../../styles/grid'
import { RoundButton } from '../../styles/buttons'

const CategoryMenuContainer = Styled.div`

  & .content {
    padding: 20px 0px;
    display: flex;
    flex-wrap: wrap;

    & button {
      margin-right: 12px;
      margin-bottom: 24px;
    }

    @media (min-width: 768px) {
      padding: 60px 0px;

    }
  }
`

function CategoryMenu({ menus }) {
  return (
    <CategoryMenuContainer className="row">
      <Row>
        <Col>
          <div className="content">
            {menus.map(menu => (
              <RoundButton key={menu.key} isActive={menu.isActive}>
                {menu.title}
              </RoundButton>
            ))}
          </div>
        </Col>
      </Row>
    </CategoryMenuContainer>
  )
}

export default CategoryMenu

CategoryMenu.propTypes = {
  menus: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      isActive: PropTypes.bool
    }).isRequired
  )
}
