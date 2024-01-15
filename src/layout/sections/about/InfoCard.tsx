import styled from "styled-components"
import { Links } from "./Links"


export function InfoCard () {
  return (
		<StyledInfoCard>
			<Links />
			<Title>I’m Alireza Kavousy nezjad</Title>
			{/* <List /> */}
		</StyledInfoCard>
	)
}

const StyledInfoCard = styled.div`
  background-color: #1153cc8b;
	max-width: 563px;
	min-height: 491px;
`
const Title = styled.h3`
  
`