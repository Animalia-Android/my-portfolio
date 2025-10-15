import { useState } from 'react';
import { useTheme } from './ThemeContext';
import styled, { ThemeProvider } from 'styled-components';
import projects from './data/projects';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  justify-content: center;
  padding: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr); /* Stack projects on small screens */
  }
`;

const ProjectCard = styled.div`
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  border-radius: 5px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  padding: 15px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.4);
  }
`;

const Title = styled.h1`
  font-size: clamp(3rem, 6vw, 4.5rem);
  font-weight: bold;
  color: ${(props) => props.theme.primary}; /* Primary color from theme */
  text-shadow: ${(props) =>
    props.theme.mode === 'light'
      ? '2px 2px 10px rgba(0, 198, 255, 0.4)' /* Soft glow */
      : '2px 2px 10px rgba(255, 255, 255, 0.2)'}; /* Softer in dark mode */
  margin-bottom: 15px;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: ${(props) => props.theme.color};
  margin-top: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 5px;
`;

const Description = styled.p`
  color: #b0bec5;
  font-size: 1rem;
  height: 15%;
  margin: 10px 0;
`;

const TechStack = styled.p`
  font-size: 0.9rem;
  color: #00c6ff;
  height: 10%;
  margin-bottom: 10px;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
`;

const Button = styled.a`
  padding: 8px 16px;
  font-size: 0.9rem;
  font-weight: bold;
  color: ${(props) => props.theme.color};
  background: ${(props) => props.theme.primary};

  border: 0.1px solid ${(props) => props.theme.button};
  border-radius: 5px;
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    background: ${(props) => props.theme.highlight}; /* Highlight for hover */
    color: ${(props) => props.theme.background};
    transform: scale(1.05);
  }
`;

const ExpandButton = styled.button`
  margin: 20px auto;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: bold;
  color: ${(props) => props.theme.color};
  background: ${(props) => props.theme.primary};
  border: 0.1px solid ${(props) => props.theme.button};
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
  display: block;
  &:hover {
    background: ${(props) => props.theme.highlight};
    color: ${(props) => props.theme.background};
    transform: scale(1.05);
  }
`;

const ProjectGrid = () => {
  const { theme } = useTheme();
  const [showAll, setShowAll] = useState(false);
  const nonFeaturedProjects = projects.filter((project) => !project.featured);
  const visibleProjects = showAll
    ? nonFeaturedProjects
    : nonFeaturedProjects.slice(0, 3);

  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
};

export default ProjectGrid;
