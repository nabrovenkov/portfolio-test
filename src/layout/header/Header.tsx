import styled from "styled-components"
import { Logo } from "../../components/logo/Logo"
import { Menu } from "../../components/menu/Menu"
import { Container } from "../../components/Container"
import { theme } from "../../styles/Theme"
import { FlexWrapper } from "../../components/FlexWrapper"
import moon from "../../assets/image/moon.svg"

const itemsArr = ["Home", "Project", "About", "Content"];

export function Header () {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper justify='space-between'>
          <Logo />
          <Menu itemsMenuArr={itemsArr}/>
          <button>
            <img src={moon} alt="" />
          </button>
        </FlexWrapper>
      </Container>
    </StyledHeader>

  )
}

const StyledHeader = styled.header`
  background-color: ${theme.color.primary};
`
function Moon () {
  
}