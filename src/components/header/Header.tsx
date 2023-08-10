import React from "react"
import LogoSvg from "../../assets/logo.svg"

import { Container, WrapperLogo } from "./styles"

export function Header() {
  return (
    <Container>
      <WrapperLogo>
        <LogoSvg width={110.34} height={35} />
      </WrapperLogo>
    </Container>
  )
}
