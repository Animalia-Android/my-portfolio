import PropTypes from 'prop-types';
import styled from 'styled-components';

const ProjectCardWrapper = styled.div`
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  padding: 20px;
  border-radius: 5px;
  text-align: center;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  min-width: 280px;
  max-width: 350px;
  height: 420px;
  flex: 1 1 320px;
  display: flex
  flex-direction: column
  justify-content: space-between

  &:hover {
    transform: perspective(1000px) rotateX(5deg) rotateX(3deg) scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 198, 255, 0.5);
  }

  @media (max-width: 768px) {
    // min-width: 90%;
    // max-width: 90%;
    flex: 1 1 auto;
    height: auto;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 5px;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: ${(props) => props.theme.color};
  margin-top: 10px;
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
  gap: 10px;
  justify-content: center;
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

const ProjectCard = ({ project }) => {
  return (
    <ProjectCardWrapper>
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
    </ProjectCardWrapper>
  );
};

//Define PropTypes to ensure correct props are passed
ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tech: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    live: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectCard;
