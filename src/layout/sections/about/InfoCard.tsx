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
  
`
const Title = styled.h3`
  
`