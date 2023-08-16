import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
;

export const Container = styled.TextInput`
  flex: 1;
  height: ${RFValue(54)}px;
  font-size: ${RFValue(14)}px;
  border-radius: 5px;
  background-color: ${({theme}) => theme.colors.baseGray500};
`;