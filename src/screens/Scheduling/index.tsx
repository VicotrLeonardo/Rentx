import React from "react";
import { BackButton } from "../../Components/BackButton";
import theme from "../../styles/theme";

import { Container, Header, Title } from "./styles";

export function Scheduling() {
  return (
    <Container>
      <Header>
        <BackButton onPress={() => {}} color={theme.colors.shape} />

        <Title>
          Escolha uma {"\n"}
          data de início e {"\n"}
          fim do aluguel
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle></DateTitle>
            <DateValue></DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>
    </Container>
  );
}
