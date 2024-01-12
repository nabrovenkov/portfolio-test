import { styled } from "styled-components";
import { SkillIcon } from "./SkillIcon";
import psIcon from '../../assets/image/skills-icons/ps-icon.png'
import aeIcon from '../../assets/image/skills-icons/ae-icon.png'
import aiIcon from '../../assets/image/skills-icons/ai-icon.png'
import figmaIcon from '../../assets/image/skills-icons/figma-icon.png'


export function SkillsIcons () {
  return (
    <StyledSkillsIcons>
      <SkillIcon iconId={psIcon} value="Photoshop"/>
      <SkillIcon iconId={aeIcon} value="After Effect" />
      <SkillIcon iconId={aiIcon} value="Illustrator" />
      <SkillIcon iconId={figmaIcon} value="Figma" />
    </StyledSkillsIcons>
  )
}

const StyledSkillsIcons = styled.div`
  display: flex;
  gap: 13px;
`