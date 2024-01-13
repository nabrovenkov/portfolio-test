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
			<FlexWrapper>
				<Text>{props.text}</Text>
				<Button>Edit for you</Button>
				<Button>See preview</Button>
			</FlexWrapper>
		</StyledProjectCard>
	)
}

const StyledProjectCard = styled.div`
  
  /* max-width: 270px;
  max-height: 391px; */
`
const Image = styled.img`
	object-fit: cover;
	max-width: 270px;
	max-height: 391px;
`
const Text = styled.p`
  
`