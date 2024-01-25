import styled from "styled-components";
import { FlexWrapper } from "../FlexWrapper";
import { Button } from "../Button";

type ProjectCardPropsType = {
  image: string
  text: string
}
export function ProjectCard (props: ProjectCardPropsType) {
  return (
		<StyledProjectCard>
			<Image src={props.image} />
			<Description>
				<Wrapper>
					<Text>{props.text}</Text>
					<CardButton>Edit for you</CardButton>
					<LinkCard>See preview</LinkCard>
				</Wrapper>
			</Description>
		</StyledProjectCard>
	)
}

const Description = styled.div`
	width: 100%;	
	height: 155px;
	border-radius: 0px 0px 26px 26px;
	background-color: #353535;
	position: absolute;
	bottom: 0;
`

const StyledProjectCard = styled.div`
	display: flex;
	width: 270px;
	position: relative;

	&:hover {
		& ${Description} {
			background-color: #24335c;
		}
	}
`


const Wrapper = styled.div`
	padding: 17px 33px 23px;
	height: 100%;
`
const Image = styled.img`
	border-radius: 26px;
	object-fit: cover;
	width: 100%;
	height: 395px;
`

const Text = styled.p`
	/* display: block; */
	/* height: 100%; */
	margin-bottom: 25px;

	color: #fff;
	font-family: Kalameh;
	font-size: 20px;
	font-weight: 700;
`

export const CardButton = styled.button`
	width: 100px;
	height: 29px;
	border-radius: 12px;
	background-color: #fff;

	&:hover {
		background-color: #2157f2;
		color: #fff;
	}
`

const LinkCard = styled.a`
	margin-left: 21px;
	color: #a6bcfa;
	font-size: 14px;
	line-height: 148%; /* 20.72px */

	&:hover {
		color: #fff;
	}
`