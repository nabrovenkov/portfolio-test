import { styled } from 'styled-components'
import imageMain from '../../assets/image/photo/image-main.webp'

export function MainPhoto () {
  return (
    <StyledMainPhoto src={imageMain} alt="Main Photo" />
  )
}

const StyledMainPhoto = styled.img`
  width: 400px;
  height: 400px;
  border-radius: 334px;
  border: 25px solid #FFF;
  background: lightgray 50% / cover no-repeat, #24335C;
  margin-top: 43px;
  margin-left: 105px;
  margin-right: 75px;

`