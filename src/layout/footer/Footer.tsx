import { styled } from "styled-components"
import { IconSvg } from "../../components/icon/IconSvg"
import wave from "../../assets/image/footer/wave.svg"
import block from "../../assets/image/footer/block.svg"

export function Footer () {
  return (
		<FooterStyled>
			<Text>
				<Name>Coded by Alireza Kavousy nezhad</Name>
				<Info>All Rights Reserved 2022</Info>
			</Text>
			<Background>
				<WaveBack />
				<Back />
			</Background>
		</FooterStyled>
	)
}

const FooterStyled = styled.footer`
    background-color: #222;
  `


const Text = styled.div`
	display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const Name = styled.span`
	color: #fff;
	font-family: Inter;
	font-size: 16.075px;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
`

const Info = styled.span`
	color: #fff;
	font-family: Inter;
	font-size: 11.482px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
`

const Background = styled.div`
`

const WaveBack = styled.div`
  height: 100px;
  background-image: url(${wave});
  background-repeat: repeat-x;
`
const Back = styled.div`
  height: 100px;
	background-color: #24335c;
`