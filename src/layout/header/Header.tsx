import React from "react"
import styled from "styled-components"
import { Logo } from "../../components/logo/Logo"
import { Menu } from "../../components/menu/Menu"
import { SkillsIcons } from "../../components/skills-icons/SkillsIcons"

export function Header () {
  return (
    <StyledHeader>
      <Logo />
      <Menu />
    </StyledHeader>

  )
}

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  position: relative;
  background-color: #222;
`