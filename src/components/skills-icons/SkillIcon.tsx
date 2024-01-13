import styled from 'styled-components'

type SkillIconPropsType = {
  iconId?: string
  title?: string
}
export function SkillIcon (props: SkillIconPropsType) {
  return (
    <>
      <img src={props.iconId} alt="" />
      <SkillBack>{props.title}</SkillBack>
    </>
  )
}

const SkillBack = styled.div`
  width: 161px;
  height: 91px;
  border-radius: 24px;
  background-color: #24335C;
  box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.15);

`