import { RFPercentage, RFValue } from "react-native-responsive-fontsize"
import { Feather } from "@expo/vector-icons"
import styled from "styled-components/native"

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.baseGray600};
`

export const ContainerInput = styled.View`
  flex-direction: row;
  position: absolute;
  margin-top: ${RFPercentage(21)}px;
  padding: 0 16px;
  align-items: center;
  justify-content: center;
`
export const ContainerButtonPlus = styled.View``

export const ButtonPlus = styled.TouchableOpacity.attrs({
  activeOpacity: 0.97,
})`
  width: ${RFValue(52)}px;
  height: ${RFValue(52)}px;
  border-radius: 5px;
  margin-left: ${RFValue(4)}px;
  background-color: ${({ theme }) => theme.colors.productBlueOne};
  align-items: center;
  justify-content: center;
`
export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.baseGray100};
  font-size: ${RFValue(15.97)}px;
`
export const ContainerTasks = styled.View`
  padding: 0 16px;
  align-items: center;
  justify-content: center;
`
