import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import theme from "../../styles/theme";

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.background_secondary};
`;

export const Header = styled.View`
  width: 100%;
  height: 325px;

  background-color: ${theme.colors.header};

  justify-content: center;
  padding: 25px;
`;
export const Title = styled.Text`
color: ${theme.colors.shape};
font-family: ${theme.fonts.secondary_600}
font-size: ${RFValue(34)}px;


margin-top: 34px;

`;
