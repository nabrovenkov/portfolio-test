import styled from "styled-components"
import { IconSvg } from "../../../components/icon/IconSvg"

export function Links () {
  return (
    <StyledLinks>
      <IconSvg iconId={"vector"} />
      <IconSvg iconId={"wa"}/>
      <IconSvg iconId={"ins"}/>
    </StyledLinks> 
  )
}

const StyledLinks = styled.div`
display: flex;
justify-content: flex-end;
  gap: 10px;

`
