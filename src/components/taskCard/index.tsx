import React, { useState } from "react"

import {
  Container,
  Icon,
  TextCards,
  TrashContainerButton,
  CheckboxCard,
  ContainerText,
  ContainerContent,
  ContainerCheckbox,
} from "./styles"
import { PropsTaskCard } from "./props"

export function TaskCard({ title, isChecked, ...rest }: PropsTaskCard) {
  function filterTitleLength(desc: string) {
    if(desc.length < 22){
        return desc;
}

    return `${desc.substring(0, 55)}...`;
} 
  return (
    <Container>
      <ContainerContent>
        <ContainerCheckbox>
          <CheckboxCard value={isChecked} {...rest} />
        </ContainerCheckbox>
        <ContainerText>
          <TextCards>{filterTitleLength(title) }</TextCards>
        </ContainerText>
        <TrashContainerButton>
          <Icon name="trash" />
        </TrashContainerButton>
      </ContainerContent>
    </Container>
  )
}
