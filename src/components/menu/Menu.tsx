import { styled } from "styled-components"

export function Menu (props: {itemsMenuArr: Array<string>}) {
  return (
    <StyledMenu>
      <ul>
        {props.itemsMenuArr.map((item) => {
          return (
            <li>
              <a href="#">{item}</a>
            </li>
          )
        })}
      </ul>
    </StyledMenu>
  )
}

const StyledMenu = styled.nav`
  max-width: 400px;
  padding: 4px;
  ul {
    display: flex;
    gap: 58px;
  }
`