import styled from 'styled-components'

type SkillIconPropsType = {
  iconId?: string
  title?: string
}
export function SkillIcon (props: SkillIconPropsType) {
  return (
		<>
			<SkillBack>
				<Icon src={props.iconId} alt='' />
				<NameSkill>{props.title}</NameSkill>
			</SkillBack>
		</>
	)
}

const SkillBack = styled.div`
	width: 161px;
	height: 91px;
	border-radius: 24px;
	background-color: #24335c;
	box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.15);

	color: #fff;
	font-size: 20px;
	font-style: normal;
	font-weight: 600;
	line-height: 136%; /* 27.2px */
  

	position: relative;
`

const Icon = styled.img`
  position: absolute;
  bottom: 60px;
  left: 25%;
`

const NameSkill = styled.div`
  text-align: center;
	margin-top: 43px;
`