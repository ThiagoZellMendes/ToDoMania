import { RFValue } from "react-native-responsive-fontsize"
import styled from "styled-components/native"

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.baseGray700};
  height: ${RFValue(173)}px;
  justify-content: center;
  align-items: center;
`

export const WrapperLogo = styled.View`
  height: ${RFValue(200)}px;
  width: ${RFValue(35)}px;
  align-items: center;
  justify-content: center;
`;