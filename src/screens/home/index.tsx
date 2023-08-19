import React from "react"

import { Header } from "../../components/header/Header"
import { Input } from "../../components/form/input/Input"
import { TaskCard } from "../../components/taskCard"
import {
  Container,
  ContainerInput,
  ButtonPlus,
  ContainerButtonPlus,
  Icon,
  ContainerTasks
} from "./styles"

export default function Home() {
  return (
    <Container>
      <Header />
      <ContainerInput>
        <Input onChangeText={"texto"} />
        <ContainerButtonPlus>
          <ButtonPlus onPress={() => console.log("funcionou")}>
            <Icon name="plus-circle" />
          </ButtonPlus>
        </ContainerButtonPlus>
      </ContainerInput>

      <ContainerTasks>
        <TaskCard
          title="Estudar React Native"
        />
      </ContainerTasks>
    </Container>
  )
}
