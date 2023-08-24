import styled from "styled-components/native"
import { countProps } from "./props"
import { RFValue } from "react-native-responsive-fontsize"

export const Container = styled.View`
  flex-direction: row;
`

export const Title = styled.Text<countProps>`
  color: ${({ theme, type }) =>
    type === "create"
      ? theme.colors.productBlueTwo
      : theme.colors.productPupleTwo};
  margin-right: ${RFValue(8)}px;
  font-weight: bold;
  font-size: 18px;
`

export const ContainerCount = styled.View`
  width: ${RFValue(25)}px;
  height: ${RFValue(19)}px;
  align-items: center;
  border-radius: 50px;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.baseGray400};
`
export const Count = styled.Text`
  color: ${({ theme }) => theme.colors.baseGray100};
  font-weight: bold;
`
