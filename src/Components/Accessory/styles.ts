import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import theme from "../../styles/theme";

export const Container = styled.View`
  width: 109px;
  height: 92px;

  justify-content: center;
  align-items: center;

  background-color: ${theme.colors.background_secondary};

  padding: 16px;
  margin-bottom: 8px;
`;

export const Name = styled.Text`
  font-family: ${theme.fonts.primary_500}
  color: ${theme.colors.text}
  font-size: ${RFValue(13)}px


`;
