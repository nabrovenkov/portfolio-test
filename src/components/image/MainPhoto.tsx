import { styled } from 'styled-components'
import imageMain from '../../assets/image/image-main.png'
export function MainPhoto () {
  return (
    <StyledMainPhoto src={imageMain} alt="Main Photo" />
  )
}

const StyledMainPhoto = styled.img`
  width: 400px;
  height: 400px
`