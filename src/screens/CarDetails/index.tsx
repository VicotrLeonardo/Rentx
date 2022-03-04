import React from "react";

import { Accessory } from "../../Components/Accessory";
import { BackButton } from "../../Components/BackButton";
import { ImageSlider } from "../../Components/ImageSlider";

import speedSvg from "../../assets/speed.svg";
import accelerationSvg from "../../assets/acceleration.svg";
import forceSvg from "../../assets/force.svg";
import gasolineSvg from "../../assets/gasoline.svg";
import exchangeSvg from "../../assets/exchange.svg";
import peopleSvg from "../../assets/people.svg";

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
  About,
  Acessories,
  Footer,
} from "./styles";
import { Button } from "../../Components/Button";

export function CarDetails() {
  return (
    <Container>
      <Header>
        <BackButton onPress={() => {}} />
      </Header>

      <CarImages>
        <ImageSlider
          imagesUrl={[
            "https://w7.pngwing.com/pngs/833/338/png-transparent-audi-rs5-car-audi-q5-audi-s5-audi-convertible-car-performance-car.png",
          ]}
        />
      </CarImages>

      <Content>
        <Details>
          <Descripition>
            <Brand></Brand>
            <Name></Name>
          </Descripition>

          <Rent>
            <Period></Period>
            <Price></Price>
          </Rent>
        </Details>
        <Acessories>
          <Accessory name="380Km/h" icon={speedSvg} />
          <Accessory name="3.2s" icon={accelerationSvg} />
          <Accessory name="800 HP" icon={forceSvg} />
          <Accessory name="Gasolina" icon={gasolineSvg} />
          <Accessory name="Auto" icon={exchangeSvg} />
          <Accessory name="2 pessoas" icon={peopleSvg} />
        </Acessories>
        <About></About>

        <Footer>
          <Button title="Confirmar" />
        </Footer>
      </Content>
    </Container>
  );
}
