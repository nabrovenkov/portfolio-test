import styled from 'styled-components'

type SkillIconPropsType = {
  iconId?: string
}
export function SkillIcon (props: SkillIconPropsType) {
  return (
    <>
      <img src={props.iconId} alt="" />
      <div></div>
    </>
  )
}