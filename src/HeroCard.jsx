/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';
import AboutMeModal from './AboutMeModal';
import ContactModal from './ContactModal';

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
`;

// Styled Components
const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const HeroCardStyled = styled.div`
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  border-radius: 7px;
  backdrop-filter: blur(15px);
  padding: 60px 100px;
  width: 70vw;
  max-width: 800px;
  min-height: 350px;
  text-align: center;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  animation: ${fadeIn} 1s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

  @media (max-width: 768px) {
    width: 90vw;
    max-width: 90vw;
    padding: 50px 25px;
    min-height: auto;
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

const Subtitle = styled.p`
  font-size: clamp(1.3rem, 2.5vw, 1.8rem);
  color: ${(props) => props.theme.color};
  margin-top: 10px;
  max-width: 80%;
  line-height: 1.6;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
  justify-content: center;
`;

const Button = styled.button`
  cursor: pointer;
  padding: 14px 28px;
  font-size: 1.2rem;
  font-weight: bold;
  color: ${(props) => props.theme.color};
  background: ${(props) => props.theme.primary};
  border: 0.5px solid ${(props) => props.theme.button};
  border-radius: 7px;
  text-decoration: none;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: ${(props) => props.theme.highlight}; /* Highlight for hover */
    color: ${(props) => props.theme.background};
    transform: scale(1.05);
  }
`;

const MotionHeroCard = motion(HeroCardStyled);

const HeroCard = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <HeroContainer>
      <MotionHeroCard
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Title>Hello, I'm Douglas Sellers 👋</Title>
        <Subtitle>
          Front-End Engineer crafting seamless, high-performance UIs
        </Subtitle>
        <Subtitle>Rooted in simplicity, inspired by natural design.</Subtitle>
        <ButtonContainer>
          <Button primary onClick={() => setIsAboutOpen(true)}>
            About Me
          </Button>
          <Button primary onClick={() => setIsContactOpen(true)}>
            Contact Me
          </Button>
        </ButtonContainer>
      </MotionHeroCard>
      <AboutMeModal
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
      />
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </HeroContainer>
  );
};

export default HeroCard;
