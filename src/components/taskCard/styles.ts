import { RFPercentage, RFValue } from "react-native-responsive-fontsize"
import styled from "styled-components/native"
import { Feather } from "@expo/vector-icons"
import Checkbox from "expo-checkbox"
import { PropsTaskCard } from "./props"

export const Container = styled.View`
  height: ${RFValue(64)}px;
  border-radius: ${RFValue(5)}px;
  background-color: ${({ theme }) => theme.colors.baseGray500};
  margin-bottom: ${RFValue(8)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px ${RFValue(8)}px 0px ${RFValue(12)}px;
`
export const ContainerCheckbox = styled.View``

export const CheckboxCard = styled(Checkbox).attrs<PropsTaskCard>(
  ({ theme, value }) => ({
      color: value
        ? theme.colors.productPupleOne
        : theme.colors.productBlueOne
  })
)`
 width: ${RFValue(20)}px;
 height: ${RFValue(20)}px;
`

export const ContainerText = styled.View`
  width: ${RFPercentage(30)}px;
  align-items: center;
`
export const TextCards = styled.Text`
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.baseGray100};
  font-family: ${({ theme }) => theme.fonts.regular};
`

export const TrashContainerButton = styled.TouchableOpacity`
  align-items: center;
  width: ${RFValue(32)}px;
  height: ${RFValue(32)}px;
  justify-content: center;
`

export const Icon = styled(Feather)`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.baseGray300};
`
