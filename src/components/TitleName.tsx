import styled from "styled-components"

export function TitleName () {
  return (
		<TitleNameStyled>
			I’m <NameStyled>Alireza</NameStyled><br/> Kavousy nezjad
		</TitleNameStyled>
	)
}

const TitleNameStyled = styled.h2`
	color: #fff;
	font-family: Roboto;
	font-size: 60px;
	font-style: normal;
	font-weight: 700;
	line-height: 136%; /* 81.6px */
`

const NameStyled = styled.span`
	color: #2157f2;
	font-family: Roboto;
	font-size: 60px;
	font-style: normal;
	font-weight: 700;
	line-height: 136%;
`
