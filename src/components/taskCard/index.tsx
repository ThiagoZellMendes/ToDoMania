import React from "react"

import { Container, Icon, TextCards, TrashContainerButton } from "./styles"
import { PropsTaskCard } from "./props"

export function TaskCard({ title }: PropsTaskCard) {
  return (
    <Container>
      <TextCards>{title}</TextCards>
      <TrashContainerButton>
        <Icon name="trash" />
      </TrashContainerButton>
    </Container>
  )
}
