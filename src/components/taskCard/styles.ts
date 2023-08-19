import { RFValue } from "react-native-responsive-fontsize"
import styled from "styled-components/native"
import { Feather } from "@expo/vector-icons"

export const Container = styled.View`
  flex-direction: row;
  width: 100%;
  height: ${RFValue(64)}px;
  background-color: ${({ theme }) => theme.colors.baseGray500};
  margin-top: 70px;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
`

export const TextCards = styled.Text`
  margin-left: 16px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.baseGray100};
`

export const TrashContainerButton = styled.TouchableOpacity`
  margin: 0 16px;
  align-items: center;
  width: ${RFValue(32)}px;
  height: ${RFValue(32)}px;
  justify-content: center;
`

export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.baseGray300};
`
