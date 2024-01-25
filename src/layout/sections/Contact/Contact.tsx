import { styled } from "styled-components"
import { Container } from "../../../components/Container"
import { SectionTitle } from "../../../components/SectionTitle"

export function Contact () {
  return (
    <ContactStyled>
      <Container>
        <SectionTitle>Contact Us</SectionTitle>
        <ContactForm>
          <NameForm>Get in touch</NameForm>
          <Field placeholder='E-mail' />
          <Field placeholder='Phone' />
          <Field className="textArea" placeholder='Message' as={'textarea'} />
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