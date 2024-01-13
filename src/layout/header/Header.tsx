import React from "react"
import styled from "styled-components"
import { Logo } from "../../components/logo/Logo"
import { Menu } from "../../components/menu/Menu"
import { SkillsIcons } from "../../components/skills-icons/SkillsIcons"

const itemsArr = ["Home", "Project", "About", "Content"];

export function Header () {
  return (
    <StyledHeader>
      <Logo />
      <Menu itemsMenuArr={itemsArr}/>
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