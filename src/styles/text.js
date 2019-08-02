import Styled from 'styled-components'
import { COLORS } from '../constants/styles'

export const Heading1 = Styled.h2`
  font-family: 'proxima_nova_ltsemibold';
  font-size: 42px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.25;
  letter-spacing: normal;
  text-align: center;
  color: ${COLORS.textDarker};
`

export const Heading2 = Styled.h2`
  font-family: 'proxima_nova_ltsemibold';
  font-size: 32px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.25;
  letter-spacing: normal;
  text-align: center;
  color: ${COLORS.textDarker};
`

export const Heading3 = Styled.h3`
  font-family: 'proxima_nova_ltsemibold';
  font-size: 24px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.25;
  letter-spacing: normal;
  text-align: center;
  color: ${COLORS.textDarker};
`

export const Heading4 = Styled.h4`
  font-family: 'Proxima Nova';
  font-size: 20px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: ${COLORS.textDarker};
`

export const BodyText = Styled.p`
  font-family: 'Proxima Nova';
  font-size: 18px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.56;
  letter-spacing: normal;
  color: ${COLORS.textFaded};
`

export const Note = Styled.p`
  font-family: 'Proxima Nova';
  font-size: 16px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: ${props => (props.color ? props.color : COLORS.grey)};
`
