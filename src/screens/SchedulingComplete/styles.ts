import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import theme from "../../styles/theme";

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.header};
  padding-top: 96px;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.Text`
  font-size: ${RFValue(30)}px;
  color: ${theme.colors.shape};
  font-family: ${theme.fonts.secondary_600};
  margin-top: 40px;
`;
export const Message = styled.Text`
  font-size: ${RFValue(15)}px;
  color: ${theme.colors.text_detail};
  font-family: ${theme.fonts.primary_400};
  text-align: center;
  margin-top: 15px;
  line-height: ${RFValue(25)}px;
`;
