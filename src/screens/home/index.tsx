import React, { useState } from "react"

import { Header } from "../../components/header/Header"
import { Input } from "../../components/form/input/Input"
import { TaskCard } from "../../components/taskCard"
import {
  Container,
  ContainerInput,
  ButtonPlus,
  ContainerButtonPlus,
  Icon,
  ContainerTasks,
  ContainerInformationTask
} from "./styles"
import { Text } from "react-native"

export default function Home() {
  const [isChecked, setIsChecked] = useState(false)
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

      <ContainerInformationTask>
        <Text>Criadas</Text>
        <Text>Comcluídas</Text>
      </ContainerInformationTask>
      <ContainerTasks>
        <TaskCard
          onValueChange={setIsChecked}
          isChecked={isChecked}
          title="Integer urna interdum massa libero auctor neque turpis turpis semper."
        />
      </ContainerTasks>
      <ContainerTasks>
        <TaskCard
          onValueChange={setIsChecked}
          isChecked={isChecked}
          title="Estudar React Native com estadosEstudar React Native com estadosEstudar React Native com estadosEstudar React Native com estados"
        />
      </ContainerTasks>
    </Container>
  )
}
