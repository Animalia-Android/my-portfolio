import { useRef } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

// Sample Projects Data
const projects = [
  {
    title: 'Cine Match',
    description: 'A React app that fetches real-time weather data.',
    tech: 'Next.js, API, Tailwind, Firebase',
    github: 'https://github.com/Animalia-Android/cine-match',
    live: 'https://github.com/Animalia-Android/cine-match',
    image:
      'https://images.unsplash.com/photo-1651204978999-00d7ce1b078a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fFZIU3xlbnwwfDB8MHx8fDA%3D',
  },
  {
    title: 'Daily Weather',
    description: 'A full-stack online store with payments integration.',
    tech: 'React, Node.js, MongoDB',
    github: 'https://github.com/Animalia-Android/daily-weather',
    live: 'https://ecommerce.example.com',
    image:
      'https://images.unsplash.com/photo-1602096675810-9dce30949e80?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8VGVtcGVyYXR1cmV8ZW58MHwwfDB8fHww',
  },
  {
    title: 'Stock Pulse',
    description: 'The portfolio site you’re viewing now!',
    tech: 'Next.js, Styled Components, Framer Motion',
    github: 'https://github.com/Animalia-Android/stock-pulse',
    live: '#',
    image:
      'https://plus.unsplash.com/premium_photo-1681487769650-a0c3fbaed85a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U3RvY2slMjBNYXJrZXR8ZW58MHwwfDB8fHww',
  },
  {
    title: 'Digital Passport',
    description: 'The portfolio site you’re viewing now!',
    tech: 'React, Express, API',
    github: 'https://github.com/Animalia-Android/passport-travel-log-app',
    live: '#',
    image:
      'https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VHJhdmVsJTIwUGFzc3BvcnR8ZW58MHwwfDB8fHww',
  },
  {
    title: 'AI Recipe Assistant',
    description: 'The portfolio site you’re viewing now!',
    tech: 'React, Styled Components, Framer Motion',
    github: 'https://github.com/Animalia-Android/passport-travel-log-app',
    live: '#',
    image:
      'https://plus.unsplash.com/premium_photo-1663126351065-741a1d338b5d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UmVjaXBlc3xlbnwwfDB8MHx8fDA%3D',
  },
];

const CarouselWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  padding: 40px 0;
  background: ${(props) => props.theme.cardBackground}; /*Uses theme */
  color: ${(props) => props.theme.text}; /*Uses theme */
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
  color: ${(props) => props.theme.text};
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
  color: ${(props) => props.theme.text};
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
                <Button href={project.github} target="_blank" color={'black'}>
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
