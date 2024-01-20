import { styled } from "styled-components";
import { SkillIcon } from "./SkillIcon";
import psIcon from '../../assets/image/skills-icons/ps-icon.png'
import aeIcon from '../../assets/image/skills-icons/ae-icon.png'
import aiIcon from '../../assets/image/skills-icons/ai-icon.png'
import figmaIcon from '../../assets/image/skills-icons/figma-icon.png'


export function SkillsIcons () {
  return (
    <StyledSkillsIcons>
      <SkillIcon iconId={psIcon} title="Photoshop"/>
      <SkillIcon iconId={aeIcon} title="After Effect" />
      <SkillIcon iconId={aiIcon} title="Illustrator" />
      <SkillIcon iconId={figmaIcon} title="Figma" />
    </StyledSkillsIcons>
  )
}

const StyledSkillsIcons = styled.div`
  display: flex;
  gap: 13px;

  margin-top: 775px;
  margin-left: 500px;
  padding-bottom: 80px;
`