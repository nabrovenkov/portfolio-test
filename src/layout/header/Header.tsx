import React from "react"
import styled from "styled-components"
import { Logo } from "../../components/logo/Logo"
import { Menu } from "../../components/menu/Menu"
import { MainCard } from "../../components/card/MainCard"

export function Header () {
  return (
    <StyledHeader>
      <Logo />
      <Menu />
      <MainCard />
    </StyledHeader>

  )
}

const StyledHeader = styled.header`
  height: 946px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  position: relative;
  background-color: #222;
`