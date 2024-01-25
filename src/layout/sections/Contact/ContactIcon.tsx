import { styled } from 'styled-components'
import { FlexWrapper } from '../../../components/FlexWrapper'


type ContactIconPropsType = {
  name?: string
  data?: string
  image?: string

}

export function ContactIcon (props: ContactIconPropsType) {
  return (
		<FlexWrapper justify='space-between'>
			<ContactImage src={props.image}/>
      <FlexWrapper direction='column'>
        <ContactName>{props.name}</ContactName>
        <ContactData>{props.data}</ContactData>
      </FlexWrapper>
		</FlexWrapper>
	)
}

const ContactImage = styled.img`
	width: 38px;
	height: 38px;
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

