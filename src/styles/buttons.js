import Styled from 'styled-components'
import { primary, secondary, backgrounds } from 'uprise-uikit/colors/colors'

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
  color: ${primary.purple};
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
