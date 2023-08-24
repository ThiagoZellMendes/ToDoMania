import React from "react"
import { Container, Count, Title, ContainerCount } from "./styles"
import { countProps } from "./props"

export function CountTask({ title, count, type }: countProps) {
  return (
    <Container>
      <Title type={type}>{title}</Title>
      <ContainerCount>
        <Count>{count}</Count>
      </ContainerCount>
    </Container>
  )
}
