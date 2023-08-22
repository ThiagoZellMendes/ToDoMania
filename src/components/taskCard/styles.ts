import { RFValue } from "react-native-responsive-fontsize"
import styled from "styled-components/native"
import { Feather } from "@expo/vector-icons"
import Checkbox from "expo-checkbox"
import { PropsTaskCard } from "./props"

export const Container = styled.View`
  flex: 1;
  border-radius: ${RFValue(5)}px;
  background-color: ${({ theme }) => theme.colors.baseGray500};
  padding: ${RFValue(12)}px ${RFValue(8)}px ${RFValue(12)}px ${RFValue(12)}px;
  margin-bottom: 8px ;
`
export const ContainerContent = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const ContainerCheckbox =styled.View`
  margin-right: ${RFValue(8)}px;
`;

export const CheckboxCard = styled(Checkbox).attrs<PropsTaskCard>(
  ({ theme }) => ({
    color: theme.colors.productBlueOne,
  })
)``

export const ContainerText = styled.View`
  width: 80%;
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
