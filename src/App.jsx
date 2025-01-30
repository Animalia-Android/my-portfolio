import Navbar from './Navbar';
import ProjectsCarousel from './ProjectsCarousel';
import Footer from './Footer';

import { ThemeProvider } from './ThemeContext';
// import { Typewriter } from 'react-simple-typewriter';
import FloatingShapes from './FloatingShapes';

import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

import styled, { keyframes } from 'styled-components';

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
`;

// Navbar
// const Navbar = styled.nav`
//   width: 100%;
//   position: absolute;
//   top: 0;
//   display: flex;
//   justify-content: center;
//   padding: 15px 0;
// `;

// const NavLinks = styled.ul`
//   display: flex;
//   gap: 25px;
//   list-style: none;
// `;

// const NavLink = styled.a`
//   color: #ffffff;
//   text-decoration: none;
//   font-size: 1rem;
//   font-weight: bold;
//   transition: 0.3s;
//   &:hover {
//     color: #00c6ff;
//   }
// `;

// Background
const Background = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  background: ${(props) => props.theme.background}; /* ✅ Uses theme */
  color: ${(props) => props.theme.text}; /* ✅ Uses theme */
  font-family: 'Poppins', sans-serif;
  padding-top: 80px;
`;

// Glassmorphism Hero Section
const HeroCard = styled.div`
  background: ${(props) => props.theme.cardBackground}; /* ✅ Uses theme */
  color: ${(props) => props.theme.text}; /* ✅ Uses theme */
  border-radius: 16px;
  backdrop-filter: blur(15px);
  padding: 60px 100px;
  width: 70vw; /* Ensures consistent width */
  max-width: 800px; /* Prevents excessive stretching */
  min-height: 350px;
  text-align: center;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  animation: ${fadeIn} 1s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 90vw;
    max-width: 90vw;
    padding: 50px 25px;
    min-height: auto;
  }
`;

const Title = styled.h1`
  font-size: clamp(3rem, 6vw, 4.5rem); /* Bigger */
  font-weight: bold;
  color: #00c6ff;
  text-shadow: 2px 2px 10px rgba(0, 198, 255, 0.4);
  margin-bottom: 15px;
`;
//TypeWritter effect
// const Title = styled.h1`
//   font-size: clamp(3rem, 6vw, 4.5rem);
//   font-weight: bold;
//   color: #00c6ff;
//   text-shadow: 2px 2px 10px rgba(0, 198, 255, 0.4);
//   margin-bottom: 15px;
// `;

const Subtitle = styled.p`
  font-size: clamp(1.3rem, 2.5vw, 1.8rem);
  color: #b0bec5;
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

const Button = styled(Link)`
  cursor: pointer;
  padding: 14px 28px;
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
  background: ${(props) => (props.primary ? '#00c6ff' : 'transparent')};
  border: ${(props) => (props.primary ? 'none' : '2px solid #00c6ff')};
  border-radius: 10px;
  text-decoration: none;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: ${(props) => (props.primary ? '#008ba3' : '#00c6ff')};
    color: ${(props) => (props.primary ? 'white' : 'black')};
    transform: scale(1.05);
  }
`;

const GlowEffect = styled.div`
  position: absolute;
  width: 350px;
  height: 350px;
  background: radial-gradient(circle, rgba(0, 198, 255, 0.4), transparent);
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
  filter: blur(80px);
  z-index: -1;
`;

const ScrollButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.text};
  border: none;
  padding: 10px 15px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.2rem;
  display: ${({ show }) => (show ? 'block' : 'none')};
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
  }
`;

const MotionHeroCard = motion(HeroCard);

export default function App() {
  return (
    <ThemeProvider>
      <Background>
        <FloatingShapes /> {/* Adds animated background shapes */}
        <GlowEffect /> {/* Adds the floating glow effect */}
        <Navbar />
        <MotionHeroCard
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Title>Hi, I'm Douglas Sellers 👋</Title>
          {/* <Title>
            Hi, I'm{' '}
            <span style={{ color: '#00c6ff' }}>
              <Typewriter
                words={[
                  'Douglas Sellers',
                  'a Front-End Engineer',
                  'a JavaScript Developer',
                ]}
                loop={true}
                cursor
              />
            </span>
          </Title> */}
          <Subtitle>Front-End Developer | React | JavaScript</Subtitle>
          <ButtonContainer>
            <Button href=" smooth={true} duration={800} primary" primary>
              View My Work
            </Button>
            <Button href="mailto:douglas@example.com">Contact Me</Button>
          </ButtonContainer>
        </MotionHeroCard>
        <ProjectsCarousel />
        <Footer />
      </Background>
    </ThemeProvider>
  );
}
