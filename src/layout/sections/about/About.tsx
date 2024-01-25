import styled from "styled-components"
import backgroundImage from "../../../assets/image/background-image/map.png"
import { InfoCard } from "./InfoCard"
import photo from "../../../assets/image/photo/imagery-photo.png"
import { Container } from "../../../components/Container"
import map from "../../../assets/image/background-image/map.png"

export function About () {
  return (
    <StyledAbout>
      <BackgroundImage>
        <Map src={map}/>
        <Photo src={photo}/>
        <InfoCard />
      </BackgroundImage>

      

    </StyledAbout>
  )
}

const StyledAbout = styled.section`
	background: #a6bcfa;
	box-shadow: 0px 2px 27px 0px rgba(0, 0, 0, 0.05);
  
`

const BackgroundImage = styled.div`
	width: 1440px;
	height: 946px;
	margin: 0 auto;
	border: 1px solid red;

  position: relative;
`

const Map = styled.img`
  max-width: 880px;
  width: 100%;
  margin-top: 65px;
  margin-left: 42px;
`

const Photo = styled.img`
  /* width: 820px;
  width: 100%; */
  max-height: 946px;
  height: 100%;
  filter: grayscale(100%);
  position: absolute;
  top: 0;
  right: -22px;
  /* z-index: 12; */
`
