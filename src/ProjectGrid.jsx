import { useState } from 'react';

const ProjectGrid = () => {
  const [showAll, setShowAll] = useState(false);
  const nonFeaturedProjects = projects.filter((project) => !project.featured);
  const visibleProjects = showAll
    ? nonFeaturedProjects
    : nonFeaturedProjects.slice(0, 3);

  const ProjectGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
    justify-content: center;
    padding: 20px;

    @media (max-width: 768px) {
      grid-template-columns: repeat(
        1,
        1fr
      ); /* Stack projects on small screens */
    }
  `;

  return (
    <div>
      <Title>📁 More Projects</Title>
      <GridContainer>
        {visibleProjects.map((project, index) => (
          <ProjectCard key={index}>
            <Image src={project.image} alt={project.title} />
            <ProjectTitle>{project.title}</ProjectTitle>
            <Description>{project.description}</Description>
            <TechStack>{project.tech}</TechStack>
            <Buttons>
              <Button href={project.github} target="_blank">
                GitHub
              </Button>
              <Button href={project.live} target="_blank" primary>
                Live Demo
              </Button>
            </Buttons>
          </ProjectCard>
        ))}
      </GridContainer>

      {/* Expand/Collapse Button */}
      <ExpandButton onClick={() => setShowAll(!showAll)}>
        {showAll ? 'Show Less' : 'Show More'}
      </ExpandButton>
    </div>
  );
};

export default ProjectGrid;
