import React from "react"

import { PropsTaskCard } from "./props"
import {
  CheckboxCard,
  Container,
  ContainerCheckbox,
  ContainerText,
  Icon,
  TextCards,
  TrashContainerButton,
} from "./styles"

export function TaskCard({ title, isChecked, ...rest }: PropsTaskCard) {
  function filterTitleLength(title: string) {
    if (title.length < 60) {
      return title
    }

    return `${title.substring(0, 67)}...`
  }
  return (
    <Container>
      <ContainerCheckbox>
        <CheckboxCard
          value={isChecked}
          style={{ borderRadius: 50 }}
          {...rest}
        />
      </ContainerCheckbox>
      <ContainerText>
        <TextCards>{filterTitleLength(title)}</TextCards>
      </ContainerText>
      <TrashContainerButton>
        <Icon name="trash" />
      </TrashContainerButton>
    </Container>
  )
}
