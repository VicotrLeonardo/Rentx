import React from "react";
import theme from "../../styles/theme";

import { Container, Title } from "./styles";

interface Props {
  title: string;
  color?: string;
  onPress: () => void;
}

export function Button({ title, color, onPress }: Props) {
  return (
    <Container onPress={onPress} color={color ? color : theme.colors.main}>
      <Title>{title}</Title>
    </Container>
  );
}
