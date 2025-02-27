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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  background: ${(props) => props.theme.background}; /* Uses theme */
  color: ${(props) => props.theme.text}; /* Uses theme */
  font-family: 'Poppins', sans-serif;
  padding-top: 80px;
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
