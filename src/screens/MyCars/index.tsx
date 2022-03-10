import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { BackButton } from "../../Components/BackButton";
import { CarDTO } from "../../dtos/CarDTO";
import { api } from "../../services/api";
import theme from "../../styles/theme";

import {
  Container,
  Header,
  Title,
  SubTitle,
  Content,
  Appointments,
  AppointmentsTitle,
  AppointmentsQuantity,
} from "./styles";

export function MyCars() {
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get("schedules_byuser?user_id=1");
        setCars(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchCars();
  }, []);

  const navigation = useNavigation();

  function handleBackButton() {
    navigation.goBack();
  }

  return (
    <Container>
      <Header>
        <StatusBar backgroundColor="transparent" translucent style="light" />
        <BackButton onPress={handleBackButton} color={theme.colors.shape} />

        <Title>
          Escolha uma {"\n"}
          data de início e {"\n"}
          fim do aluguel
        </Title>
        <SubTitle>Conforto, Segurança e Praticidade</SubTitle>
      </Header>

      <Content>
        <Appointments>
          <AppointmentsTitle>Agendamento Feitos</AppointmentsTitle>
          <AppointmentsQuantity>05</AppointmentsQuantity>
        </Appointments>

        <FlatList data={cars} keyExtractor />
      </Content>
    </Container>
  );
}
