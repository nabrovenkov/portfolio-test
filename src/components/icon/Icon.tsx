import mainIcon from '../../assets/image/main-logo.png'
import React from 'react'

type IconPropsType = {
  iconId?: string
}

export function Icon (props: IconPropsType) {
  return (
    <img src={mainIcon} alt="" />
		// <svg
		// 	version='1.0'
		// 	xmlns='http://www.w3.org/2000/svg'
		// 	width='79.000000pt'
		// 	height='79.000000pt'
		// 	viewBox='0 0 79.000000 79.000000'
		// 	preserveAspectRatio='xMidYMid meet'
		// >
		// 	<use xlinkHref={`${iconSprite}#${props.iconId}`}></use>
		// </svg>
	)
}