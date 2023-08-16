import React from "react"

import { Header } from "../../components/header/Header"
import { Input } from "../../components/form/input/Input"
import {
  Container,
  ContainerInput,
  ButtonPlus,
  ContainerButtonPlus,
  Icon,
} from "./styles"

export default function Home() {
  return (
    <Container>
      <Header />
      <ContainerInput>
        <Input 
          onChangeText={"texto"}
        />
        <ContainerButtonPlus>
          <ButtonPlus onPress={() => console.log("funcionou")}>
            <Icon name="plus-circle" />
          </ButtonPlus>
        </ContainerButtonPlus>
      </ContainerInput>
    </Container>
  )
}
