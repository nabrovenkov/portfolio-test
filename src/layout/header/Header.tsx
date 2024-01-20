import styled from "styled-components"
// import { Logo } from "../../components/logo/Logo"
import { Menu } from "../../components/menu/Menu"
import { Container } from "../../components/Container"
import { theme } from "../../styles/Theme"
import { FlexWrapper } from "../../components/FlexWrapper"
import moon from "../../assets/image/moon.svg"
import { Icon } from "../../components/icon/Logo"


const itemsArr = ["Home", "Project", "About", "Content"];

export function Header () {
  return (
		<StyledHeader>
			<Container>
				<FlexWrapper justify='space-between'>
					<Logo>
            <Icon iconId={'mainIcon'} />
          </Logo>
					<Menu itemsMenuArr={itemsArr} />
					<Moon>
						<MoonImg src={moon} />
					</Moon>
				</FlexWrapper>
			</Container>
		</StyledHeader>
	)
}

const StyledHeader = styled.header`

`

const Moon = styled.button`
  /* position: relative; */
  width: 70px;
  height: 70px;
  img {

    position: relative;
  }

`
const MoonImg = styled.img`

`

const Logo = styled.a`
  flex: 1 1 auto;
`