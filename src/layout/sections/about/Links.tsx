import styled from "styled-components"
import linkIcon from '../../../assets/image/icons-sprite.svg'
import { Link } from "../../../components/icon/Link"
import { FlexWrapper } from "../../../components/FlexWrapper"

export function Links () {
  return (
    <StyledLinks>
      <Link iconId={"vector"} />
      <Link iconId={"wa"}/>
      <Link iconId={"ins"}/>
    </StyledLinks> 
  )
}

const StyledLinks = styled.div`
display: flex;
justify-content: flex-end;
  gap: 10px;

`
