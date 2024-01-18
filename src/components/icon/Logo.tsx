import mainIcon from '../../assets/image/style-icons/main-logo.png'
import React from 'react'

type IconPropsType = {
  iconId?: string
}

export function Icon (props: IconPropsType) {
  return (
    <img src={mainIcon} alt="" />
		
	)
}