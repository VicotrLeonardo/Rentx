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
            "https://www.brasilwagen.com.br/bw/wp-content/uploads/2017/09/saveiro-cross-cd-branco-cristal.png",
          ]}
        />
      </CarImages>

      <Content>
        <Details>
          <Descripition>
            <Brand>quem ta lendo é gay</Brand>
            <Name>SAVEIRO TUNADA</Name>
          </Descripition>

          <Rent>
            <Period>AO DIA</Period>
            <Price>R$ 1800</Price>
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
