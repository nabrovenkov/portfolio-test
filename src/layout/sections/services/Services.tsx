import { styled } from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { ServiceCard } from "./ServiceCard";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";

export function Services () {
  return (
		<ServicesStyled>
			<Container>
				<SectionTitle>Services</SectionTitle>
				<FlexWrapper gap='30px' justify='center'>
					<ServiceCard iconId="video" name='Ui/Ux Designer' size='76' />
					<ServiceCard iconId="ui" name='Video Edit Service' size='76' />
					<ServiceCard iconId="noteBook" name='Website Developer' size='76' />
				</FlexWrapper>
			</Container>
		</ServicesStyled>
	)
}

const ServicesStyled = styled.section`
  background-color: #222;
`

const CardWrapper = styled.div`
  display: flex;
`