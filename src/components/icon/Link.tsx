import styled from "styled-components"
import iconsSprite from "../../assets/image/icons-sprite.svg"

type LinkPropsType = {
  iconId?: string
  width?: string
  height?: string
  viewBox?: string
}

export function Link (props: LinkPropsType) {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <use xlinkHref={`${iconsSprite}#${props.iconId}`}/>
    </svg>
  )
}

const StyledLink = styled.a`
  background-color: green;
  width: 20px;
  height: 20px;

`