import styled from "styled-components"
import { IconSvg } from "../../../components/icon/IconSvg"

export function Links () {
  return (
		<StyledLinks>
			<IconSvg iconId={'vector'} size='26' />
			<IconSvg iconId={'wa'} size='26' />
			<IconSvg iconId={'ins'} size='26' />
		</StyledLinks>
	)
}

const StyledLinks = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 30px;
  margin-right: 24px;
`
