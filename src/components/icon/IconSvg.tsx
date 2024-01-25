import styled from "styled-components"
import iconsSprite from "../../assets/image/icons-sprite.svg"

type IconSvgPropsType = {
  iconId?: string
  size?: string
}

export function IconSvg (props: IconSvgPropsType) {
  return (
		<svg
			width={props.size}
			height={props.size}
			viewBox={`0 0 ${props.size} ${props.size}`}
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<use xlinkHref={`${iconsSprite}#${props.iconId}`} />
		</svg>
	)
}

