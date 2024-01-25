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
          <FlexWrapper direction="row" wrap="wrap" justify="flex-start">
            <div>
              <Field placeholder='Phone' />
              <Field placeholder='E-mail' />
            </div>
            <Field className='textArea' placeholder='Message' as={'textarea'} />
            <ContactInfo>
              <ContactIcon 
                image={location} 
                name='Location' 
                data='Mashhad/Iran' />
              <ContactIcon 
                image={phone} 
                name='Phone' 
                data='+989150063913' />
              <ContactIcon
                image={email}
                name='Email'
                data='arkn3913@gmail.com'
              />
            </ContactInfo>
            <ContactButton>Send</ContactButton>
          </FlexWrapper>
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
	font-size: 36px;
	font-weight: 500;
	line-height: 48.96px;
  padding: 53px 0 23px;
`

const Field = styled.input`
	width: 211px;
	height: 36px;
	border-radius: 9px;
	background-color: #393838;

  &:first-child {
    margin-right: 7px
  }

  &.textArea {
    max-width: 430px;
    width: 100%;
    min-height: 152px;
    margin: 23px 0 37px;
  }
`
const ContactInfo = styled.div`
	margin: 0 100px 0 130px;

  position: relative;
  top: -45px;
	
`


const ContactButton = styled.button`
	width: 117px;
	height: 43px;

	border-radius: 9px;
	background-color: #2350d6;

	color: #fff;
	text-align: center;
	font-size: 16px;
	font-weight: 500;
	line-height: 21.76px;
`