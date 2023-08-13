import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
;

export const Container = styled.TextInput`
  width: ${RFValue(271)}px;
  height: ${RFValue(54)}px;
  padding: 16px 18px;
  font-size: ${RFValue(14)}px;
  border-radius: 5px;
  margin-bottom: 8px;
  background-color: ${({theme}) => theme.colors.baseGray500};
`;