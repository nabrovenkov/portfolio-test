import { styled } from "styled-components"
import { Container } from "../../../components/Container"
import { SectionTitle } from "../../../components/SectionTitle"
import { ContactIcon } from "./ContactIcon"
import { FlexWrapper } from "../../../components/FlexWrapper"
import location from '../../../assets/image/contact-icon/location.png'
import phone from '../../../assets/image/contact-icon/phone.png'
import email from '../../../assets/image/contact-icon/mail.png'

export function Contact () {
  return (
		<ContactStyled>
			<Container>
				<SectionTitle>Contact Us</SectionTitle>
				<ContactForm>
					<NameForm>Get in touch</NameForm>
					<Field placeholder='E-mail' />
					<Field placeholder='Phone' />
					<Field className='textArea' placeholder='Message' as={'textarea'} />
					<ContactInfo>
						<ContactIcon image={location} name='Location' data='Mashhad/Iran' />
						<ContactIcon image={phone} name='Phone' data='+989150063913' />
						<ContactIcon
							image={email}
							name='Email'
							data='arkn3913@gmail.com'
						/>
					</ContactInfo>
					<ContactButton>Send</ContactButton>
				</ContactForm>
			</Container>
		</ContactStyled>
	)
}

const ContactStyled = styled.section`
  background-color: #222;
`

const ContactForm = styled.form`
	max-width: 932px;
	width: 100%;
  margin: 0 auto;
  padding-left: 82px;
	background-color: #2c2b2b;
	box-shadow: 8px 8px 34px 0px rgba(0, 0, 0, 0.05);
`
const NameForm = styled.h3`
	color: #fff;
	text-align: center;
	font-size: 36px;
	font-weight: 500;
	line-height: 48.96px;
`
const Field = styled.input`
	width: 211px;
	height: 36px;

	border-radius: 9px;
	background-color: #393838;

  &.textArea {
    max-width: 430px;
    width: 100%;
    min-height: 152px;
  }
`

const ContactInfo = styled.div`

`

const ContactButton = styled.button`
	width: 117px;
	height: 43px;

	border-radius: 9px;
	background-color: #2350d6;
`