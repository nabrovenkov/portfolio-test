import styled from "styled-components"
import { Links } from "./Links"
import { TitleName } from "../../../components/TitleName"


export function InfoCard () {
  return (
		<StyledInfoCard>
			<Links />
			<Wrapper>
				<TitleName col={'#540b0b'}/>
				<AboutList />
			</Wrapper>
		</StyledInfoCard>
	)
}

const StyledInfoCard = styled.div`
	max-width: 563px;
	width: 100%;
	max-height: 490px;
	height: 100%;
	margin-top: 400px;
	margin-left: 115px;
	margin-bottom: 40px;

	border-radius: 100px 0px;
	border: 2px solid #fff;
	background: linear-gradient(
		147deg,
		rgba(255, 255, 255, 0.5) -6.76%,
		rgba(0, 71, 255, 0.05) 102.96%
	);
	backdrop-filter: blur(10px);

	position: absolute;
	top: 0;
	left: 0;
	z-index: 11;
`

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 60px;
	margin-top: 18px;
	/* width: 463px; */
`
function AboutList () {
	const aboutText = [
		"I was born in Iran-Mashhad",
		"I’m 20 years old",
		"I have started my interest in this field from 2019",
		"I’m designer , video editor , web developer and ...",
		"My phone number in Iran +989212073348"
	];

	return (
		<>
			<AboutListStyled>
				{aboutText.map(item => {
					return (
						<Point>{item}</Point>
					)
				})}
			</AboutListStyled>
		</>
	)
}

const AboutListStyled = styled.ul`
	margin-top: 22px;
`

const Point = styled.li`
	color: #393939;
	font-size: 20px;
	line-height: 136%; /* 27.2px */
	margin-left: 30px;
	margin-top: 5px;
	position: relative;

	/* list-style-type: disc; */
	&::before {
		content: "";
		width: 18px;
		height: 18px;
		border-radius: 50%;
		background-color: #d9d9d9;
		background-image: linear-gradient(180deg, #a6bcfa 0%, #2157f2 100%);
		position: absolute;
		left: -30px;
		top: 50%;
		transform: translateY(-50%)
	}
`