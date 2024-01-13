import styled from "styled-components"
import backgroundImage from "../../../assets/image/background-image/map.png"
import { InfoCard } from "./InfoCard"
import photo from "../../../assets/image/photo/imagery-photo.png"

export function About () {
  return (
    <StyledAbout>
      <InfoCard />
      <ImagePhoto src={photo}/>
    </StyledAbout>
  )
}

const StyledAbout = styled.section`
  min-height: 50vh;
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  position: relative;
`
const ImagePhoto = styled.img`
  position: absolute;
  object-fit: cover;
  max-width: 600px;
`