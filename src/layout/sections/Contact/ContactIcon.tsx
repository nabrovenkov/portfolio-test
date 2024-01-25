import { styled } from 'styled-components'
import { FlexWrapper } from '../../../components/FlexWrapper'


type ContactIconPropsType = {
  name?: string
  data?: string
  image?: string

}

export function ContactIcon (props: ContactIconPropsType) {
  return (
		<ContactIconStyled>
			<FlexWrapper >
				<ContactImage src={props.image}/>
				<FlexWrapper align='flex-start' direction='column'>
					<ContactName>{props.name}</ContactName>
					<ContactData>{props.data}</ContactData>
				</FlexWrapper>
			</FlexWrapper>
		</ContactIconStyled>
	)
}
const ContactIconStyled = styled.div`
	&:nth-child(2) {
		margin: 37px 0
	}
`
const ContactImage = styled.img`
	width: 38px;
	height: 38px;
	margin-right: 23px;
`

const ContactName = styled.span`
	color: #fff;
	text-align: center;
	font-size: 16px;
	font-weight: 500;
	line-height: 21.76px;
`

const ContactData = styled.span`
	color: #8b8b8b;
	text-align: center;
	font-size: 12px;
	font-weight: 400;
	line-height: 16.32px;
`

