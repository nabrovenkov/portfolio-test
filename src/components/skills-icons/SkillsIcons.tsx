import { styled } from "styled-components";
import { SkillIcon } from "./SkillIcon";
import psIcon from '../../assets/image/SkillsIcons/ps-icon.png'
import aeIcon from '../../assets/image/SkillsIcons/ae-icon.png'
import aiIcon from '../../assets/image/SkillsIcons/ai-icon.png'
import figmaIcon from '../../assets/image/SkillsIcons/figma-icon.png'


export function SkillsIcons () {
  return (
    <StyledSkillsIcons>
      <SkillIcon iconId={psIcon}></SkillIcon>
      <SkillIcon iconId={aeIcon}></SkillIcon>
      <SkillIcon iconId={aiIcon}></SkillIcon>
      <SkillIcon iconId={figmaIcon}></SkillIcon>
    </StyledSkillsIcons>
  )
}

const StyledSkillsIcons = styled.div`
  display: flex;
  gap: 13px;
`