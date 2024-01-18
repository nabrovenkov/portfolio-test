import React from "react"
import styled from "styled-components"
import { Logo } from "../../components/logo/Logo"
import { Menu } from "../../components/menu/Menu"
import { SkillsIcons } from "../../components/skills-icons/SkillsIcons"
import { Container } from "../../components/Container"
import { theme } from "../../styles/Theme"
import { FlexWrapper } from "../../components/FlexWrapper"

const itemsArr = ["Home", "Project", "About", "Content"];

export function Header () {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper justify='space-between'>
          <Logo />
          <Menu itemsMenuArr={itemsArr}/>
        </FlexWrapper>
      </Container>
    </StyledHeader>

  )
}

const StyledHeader = styled.header`
  background-color: ${theme.color.primary};
`