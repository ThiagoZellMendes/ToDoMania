import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
;

export const Container = styled.TextInput.attrs(
  ({ theme }) => ({
    placeholder: "Adicione uma nova tarefa",
    placeholderTextColor: theme.colors.baseGray300
  })
)`
  flex: 1;
  height: ${RFValue(54)}px;
  font-size: ${RFValue(14)}px;
  border-radius: 5px;
  background-color: ${({theme}) => theme.colors.baseGray500};
  padding-left: 16px
`;