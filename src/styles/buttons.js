import Styled from 'styled-components'
import { COLORS } from '../constants/styles'

const Button = Styled.button`
  background: none;
  border: none;
  margin: 0px;
  height: 40px;
  padding: 11px 16px;
  color: ${COLORS.uprisePurple};
  cursor: pointer;
  font-size: 18px;
`

export const OutLineButton = Styled(Button)`
  border-radius: 5px;
  color: ${props => (props.secondary ? COLORS.spaceBlue : COLORS.uprisePurple)};
  border: solid 1px ${props =>
    props.secondary ? COLORS.spaceBlue : COLORS.uprisePurple};
`
export const LinkButton = Styled(Button)`
  color: ${COLORS.uprisePurple};
`
export const PrimaryButton = Styled(Button)`
  border-radius: ${props => (props.large ? '10px' : '5px')}
  border: solid 1px ${props =>
    props.secondary ? COLORS.spaceBlue : COLORS.uprisePurple};
  background-color: ${props =>
    props.secondary ? COLORS.spaceBlue : COLORS.uprisePurple};
  color: ${COLORS.justWhite};
  width: ${props => (props.large ? '100%' : 'auto')}
  height: ${props => (props.large ? '60px' : '')}

`
