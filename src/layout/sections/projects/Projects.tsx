import styled from "styled-components"
import { Menu } from "../../../components/menu/Menu"
import { SectionTitle } from "../../../components/SectionTitle";
import { ProjectCard } from "../../../components/card/ProjectCard";
import projectImage1 from "../../../assets/image/project-image/image1-project.jpg"
import projectImage2 from "../../../assets/image/project-image/image2-project.jpg"
import projectImage3 from "../../../assets/image/project-image/image3-project.jpeg"
import projectImage4 from "../../../assets/image/project-image/image4-project.jpg"
import { FlexWrapper } from "../../../components/FlexWrapper";

const itemsArr = ["Story", "Post", "Banner", "Trailer", "Design", "More"];

export function Projects () {
  return (
    <StyledProject>
      <FlexWrapper wrap="wrap">
        <SectionTitle>Project</SectionTitle>
        <Menu itemsMenuArr={itemsArr}/>
        <ProjectsCards>
          <ProjectCard image={projectImage1} text={"Story motion for sale English courses"}/>
          <ProjectCard image={projectImage2} text={"Story motion for sale English courses"}/>
          <ProjectCard image={projectImage3} text={"Story motion for sale English courses"}/>
          <ProjectCard image={projectImage4} text={"Story motion for sale English courses"}/>
          <ProjectCard image={projectImage1} text={"Story motion for sale English courses"}/>
          <ProjectCard image={projectImage2} text={"Story motion for sale English courses"}/>
          <ProjectCard image={projectImage3} text={"Story motion for sale English courses"}/>
          <ProjectCard image={projectImage4} text={"Story motion for sale English courses"}/>
        </ProjectsCards>
      </FlexWrapper>
    </StyledProject>
  )
}

const StyledProject = styled.section`
  background-color: #222;
`
const ProjectsCards = styled.div`
  display: flex;
  flex-wrap: wrap;
`
