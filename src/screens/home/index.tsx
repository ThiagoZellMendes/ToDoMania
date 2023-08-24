import React, { useState } from "react"

import { Header } from "../../components/header/Header"
import { Input } from "../../components/form/input/Input"
import { TaskCard } from "../../components/taskCard"
import { CountTask } from "../../components/countTask"
import {
  Container,
  ContainerInput,
  ButtonPlus,
  ContainerButtonPlus,
  Icon,
  ContainerTasks,
  ContainerInformationTask,
} from "./styles"

export default function Home() {
  const [isChecked, setIsChecked] = useState(false)
  console.log(isChecked)
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
        <CountTask title="Criadas" count={2} type="create" />
        <CountTask title="Concluídas" count={2} type="Finish" />
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
          title="Estudar React Native"
          isChecked={isChecked}
        />
      </ContainerTasks>
    </Container>
  )
}
