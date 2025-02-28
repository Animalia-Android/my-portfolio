import Navbar from './Navbar';
import ProjectsCarousel from './ProjectsCarousel';
import HeroCard from './HeroCard';
import Footer from './Footer';

import { ThemeProvider } from './ThemeContext';
import FloatingShapes from './FloatingShapes';

import styled from 'styled-components';

// Background
const Background = styled.div`
  min-height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  font-family: 'Poppins', sans-serif;
  padding-top: 80px;
`;

const GlowEffect = styled.div`
  position: absolute;
  width: 400px;
  height: 400px;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 0;
  pointer-events: none;

  background: radial-gradient(
    circle,
    ${(props) => props.theme.highlight} 20%,
    ${(props) => props.theme.primary} 50%,
    transparent 80%
  );

  filter: blur(50px);
  opacity: 0.8;

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
    filter: blur(40px);
  }
`;

export default function App() {
  return (
    <ThemeProvider>
      <Background>
        <FloatingShapes /> {/* Adds animated background shapes */}
        <GlowEffect /> {/* Adds the floating glow effect */}
        <Navbar />
        <HeroCard />
        <ProjectsCarousel />
        <Footer />
      </Background>
    </ThemeProvider>
  );
}
