import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import theme from "../../styles/theme";

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.background_secondary};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  position: absolute;
  margin-top: 20px;
  margin-left: 24px;
`;

export const CarImages = styled.View`
  margin-top: 32px;
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    padding: 24,
    alignItems: "center",
  },
  showsVerticalScrollIndicator: false,
})``;

export const Details = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: 38px;
`;
export const Descripition = styled.View``;
export const Brand = styled.Text`
  font-family: ${theme.fonts.secondary_500};
  color: ${theme.colors.text_detail};
  font-size: ${RFValue(10)}px;

  text-transform: uppercase;
`;
export const Name = styled.Text`
  font-family: ${theme.fonts.secondary_500};
  color: ${theme.colors.title};
  font-size: ${RFValue(25)}px;
`;
export const Rent = styled.View``;

export const Period = styled.Text`
  font-family: ${theme.fonts.secondary_500};
  color: ${theme.colors.text_detail};
  font-size: ${RFValue(10)}px;

  text-transform: uppercase;
`;

export const Price = styled.Text`
  font-family: ${theme.fonts.secondary_500};
  color: ${theme.colors.main};
  font-size: ${RFValue(25)}px;
`;

export const About = styled.Text`
  font-family: ${theme.fonts.primary_400};
  color: ${theme.colors.text};
  font-size: ${RFValue(15)}px;
  text-align: justify;
  margin-top: 23px;
  line-height: ${RFValue(25)}px;
`;

export const Accessories = styled.View`
  width: 100%;

  flex-direction: row;
  flex-wrap: wrap;
  align-items: center
  justify-content:space-between;

  margin-top: 16px;
`;

export const Footer = styled.View`
  width: 100%;
  background-color: ${theme.colors.background_secondary};

  padding: 24px 24px 24px;
`;
