import { styled } from "styled-components"
import { theme } from "../../styles/Theme"
import { Header } from "../header/Header"
import { Main } from "./main/Main"
import { SkillsIcons } from "../../components/skills-icons/SkillsIcons"

export function MainSection () {
  return (
    <MainSectionStyled>
      <Header />
      <Main/>
			<SkillsIcons/>
    </MainSectionStyled>  
  )
}

const MainSectionStyled = styled.section`
	min-height: 946px;
	background-image: linear-gradient(
		to right,
		${theme.color.secondary} 32%,
		${theme.color.primary} 0
	);
	padding-top: 33px;
`