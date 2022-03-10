import React, { useEffect, useState } from "react";
import { Feather } from "@expo/vector-icons";
import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Descripition,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  Accessories,
  Footer,
  RentalPeriod,
  CalendarIcon,
  DateInfo,
  DateTitle,
  DateValue,
  RentalPrice,
  RentalPriceLabel,
  RentalPriceDetails,
  RentalPriceQuota,
  RentalPriceTotal,
} from "./styles";

import { Accessory } from "../../Components/Accessory";
import { BackButton } from "../../Components/BackButton";
import { ImageSlider } from "../../Components/ImageSlider";
import { Button } from "../../Components/Button";
import theme from "../../styles/theme";
import { RFValue } from "react-native-responsive-fontsize";
import { useNavigation, useRoute } from "@react-navigation/native";
import { CarDTO } from "../../dtos/CarDTO";
import { getAccessoryIcon } from "../../utils/getAccessoryIcon";
import { MarkedDateProps } from "../../Components/Calendar";
import { format } from "date-fns";
import { getPlatformDate } from "../../utils/getPlataformDate";
import { api } from "../../services/api";
import { Alert } from "react-native";

interface Params {
  car: CarDTO;
  dates: string[];
}

interface RentalPeriod {
  start: string;
  end: string;
}

export function SchedulingDetails() {
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>(
    {} as RentalPeriod
  );

  const navigation = useNavigation();

  const route = useRoute();
  const { car, dates } = route.params as Params;

  const rentTotal = dates.length * car.rent.price;

  async function handleConfirmRental() {
    const response = await api.get(`/schedules_bycars/${car.id}`);

    const unavailable_dates = [...response.data.unavailable_dates, ...dates];

    await api.post("schedules_byuser", {
      user_id: 1,
      car,
    });

    api
      .put(`/schedules_bycars/${car.id}`, {
        id: car.id,
        unavailable_dates,
      })
      .then(() => navigation.navigate("SchedulingComplete"))
      .catch(() => Alert.alert("Não foi possível confirmar o agendamento."));
  }

  function handleBackButton() {
    navigation.goBack();
  }

  useEffect(() => {
    setRentalPeriod({
      start: format(getPlatformDate(new Date(dates[0])), " dd/MM/yyyy"),
      end: format(
        getPlatformDate(new Date(dates[dates.length - 1])),
        " dd/MM/yyyy"
      ),
    });

    console.log(car.id);
  }, []);

  return (
    <Container>
      <Header>
        <BackButton onPress={handleBackButton} />
      </Header>

      <CarImages>
        <ImageSlider imagesUrl={car.photos} />
      </CarImages>

      <Content>
        <Details>
          <Descripition>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Descripition>

          <Rent>
            <Period>{car.rent.period}</Period>
            <Price>R${car.rent.price}</Price>
          </Rent>
        </Details>
        <Accessories>
          {car.accessories.map((accessory) => (
            <Accessory
              key={accessory.type}
              name={accessory.name}
              icon={getAccessoryIcon(accessory.type)}
            />
          ))}
        </Accessories>

        <RentalPeriod>
          <CalendarIcon>
            <Feather
              name="calendar"
              size={RFValue(24)}
              color={theme.colors.shape}
            />
          </CalendarIcon>

          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>{rentalPeriod.start}</DateValue>
          </DateInfo>

          <Feather
            name="chevron-right"
            size={RFValue(10)}
            color={theme.colors.text}
          />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue>{rentalPeriod.end}</DateValue>
          </DateInfo>
        </RentalPeriod>

        <RentalPrice>
          <RentalPriceLabel>Total</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>
              R$ {car.rent.price} X {dates.length} diárias
            </RentalPriceQuota>
            <RentalPriceTotal>R$ {rentTotal}</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Content>

      <Footer>
        <Button
          onPress={handleConfirmRental}
          title="Alugar Agora"
          color={theme.colors.sucess}
        />
      </Footer>
    </Container>
  );
}
