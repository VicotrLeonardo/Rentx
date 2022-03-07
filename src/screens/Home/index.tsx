import React from "react";
import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import { Container, Header, TotalCars, HeaderContent, CarList } from "./styles";
import Logo from "../../assets/logo.svg";
import { CardCar } from "../../Components/CardCar";

export function Home() {
  const carData = {
    brand: "Audi",
    name: "RS 5 Coupé",
    rent: {
      period: "AO DIA",
      price: 180,
    },
    thumbnail:
      "https://w7.pngwing.com/pngs/833/338/png-transparent-audi-rs5-car-audi-q5-audi-s5-audi-convertible-car-performance-car.png",
  };

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <TotalCars>Total 12 carros</TotalCars>
        </HeaderContent>
      </Header>

      <CarList
        data={[1, 2, 3, 4, 5, 6, 7]}
        keyExtractor={(item) => String(item)}
        renderItem={(item) => <CardCar data={carData} />}
      />
    </Container>
  );
}
