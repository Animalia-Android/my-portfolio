import { useRef } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

// Sample Projects Data
const projects = [
  {
    title: 'Weather App',
    description: 'A React app that fetches real-time weather data.',
    tech: 'React, API, Tailwind',
    github: 'https://github.com/yourgithub/weather-app',
    live: 'https://weatherapp.example.com',
    image: 'https://source.unsplash.com/400x250/?weather,app', // Replace with real images
  },
  {
    title: 'E-Commerce Store',
    description: 'A full-stack online store with payments integration.',
    tech: 'React, Node.js, MongoDB',
    github: 'https://github.com/yourgithub/ecommerce',
    live: 'https://ecommerce.example.com',
    image: 'https://source.unsplash.com/400x250/?shopping,store',
  },
  {
    title: 'Portfolio Website',
    description: 'The portfolio site you’re viewing now!',
    tech: 'React, Styled Components, Framer Motion',
    github: 'https://github.com/yourgithub/portfolio',
    live: '#',
    image: 'https://source.unsplash.com/400x250/?coding,developer',
  },
];

const CarouselWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  padding: 40px 0;
  background: ${(props) => props.theme.cardBackground}; /* ✅ Uses theme */
  color: ${(props) => props.theme.text}; /* ✅ Uses theme */
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #00c6ff;
  margin-bottom: 20px;
`;

const CarouselContainer = styled(motion.div)`
  display: flex;
  gap: 20px;
  cursor: grab;
`;

const ProjectCard = styled.div`
  background: ${(props) => props.theme.cardBackground};
  color: ${(props) => props.theme.text};
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: perspective(1000px) rotateY(5deg) rotateX(3deg) scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 198, 255, 0.5);
  }
`;

const Image = styled.img`
  width: 100%;
  border-radius: 8px;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: white;
  margin-top: 10px;
`;

const Description = styled.p`
  color: #b0bec5;
  font-size: 1rem;
  margin: 10px 0;
`;

const TechStack = styled.p`
  font-size: 0.9rem;
  color: #00c6ff;
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
  color: white;
  background: ${(props) => (props.primary ? '#00c6ff' : 'transparent')};
  border: ${(props) => (props.primary ? 'none' : '2px solid #00c6ff')};
  border-radius: 6px;
  text-decoration: none;
  transition: 0.3s;
  &:hover {
    background: ${(props) => (props.primary ? '#008ba3' : '#00c6ff')};
    color: ${(props) => (props.primary ? 'white' : 'black')};
  }
`;

export default function ProjectsCarousel() {
  const carouselRef = useRef();

  return (
    <CarouselWrapper id="projects">
      <Title>My Projects</Title>
      <motion.div ref={carouselRef} whileTap={{ cursor: 'grabbing' }}>
        <CarouselContainer drag="x" dragConstraints={{ right: 0, left: -800 }}>
          {projects.map((project, index) => (
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
        </CarouselContainer>
      </motion.div>
    </CarouselWrapper>
  );
}
