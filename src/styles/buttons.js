import Styled from 'styled-components'
import { primary, secondary, backgrounds, extended } from '../constants/colors'

const Button = Styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  margin: 0px;
  height: 50px;
  padding: 11px 16px;
  color: ${primary.purple};
  cursor: pointer;
  font-size: 18px;
`

export const OutLineButton = Styled(Button)`
  border-radius: 5px;
  color: ${props =>
		props.secondary ? secondary.electricBlue : primary.purple};
  border: solid 1px ${props =>
		props.secondary ? secondary.electricBlue : primary.purple};
`
export const LinkButton = Styled(Button)`
  font-size: 16px;
  color: ${props =>
		props.secondary ? secondary.electricBlue : primary.purple};
`
export const PrimaryButton = Styled(Button)`
  border-radius: ${props => (props.large ? '10px' : '5px')}
  border: solid 1px ${props =>
		props.secondary ? secondary.electricBlue : primary.purple};
  background-color: ${props =>
		props.secondary ? secondary.electricBlue : primary.purple};
  color: ${backgrounds.white};
  width: ${props => (props.large ? '100%' : 'auto')}
  height: ${props => (props.large ? '60px' : '')}

`
export const RoundButton = Styled(Button)`
  font-size: 16px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${props =>
		props.isActive ? backgrounds.white : extended.charcoal.one};
  background-color: ${props =>
		props.isActive ? primary.purple : backgrounds.white};

  border-radius: 25px;
  box-shadow: 0 5px 10px 0 rgba(219, 221, 227, 0.5);
  padding: 15px 24px;

  &:hover {
    box-shadow: 10px 10px 10px 0 rgba(219, 221, 227, 0.8);
  }
`
