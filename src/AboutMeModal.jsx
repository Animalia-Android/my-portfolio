import styled from 'styled-components';
import { motion } from 'framer-motion';

// Updated Modal Styles
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${(props) =>
    props.theme.mode === 'light'
      ? 'rgba(0, 0, 0, 0.3)' /* Lighter for light mode */
      : 'rgba(0, 0, 0, 0.85)'}; /* Darker for dark mode */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  backdrop-filter: ${(props) =>
    props.theme.mode === 'light' ? 'blur(8px)' : 'blur(4px)'};
`;

const ModalContent = styled(motion.div)`
  background: ${(props) =>
    props.theme.mode === 'light'
      ? 'rgba(255, 255, 255, 1)'
      : props.theme.cardBackground};
  color: ${(props) =>
    props.theme.mode === 'light'
      ? '#111'
      : '#ffffff'}; /* Ensuring white text in dark mode */
  padding: 50px;
  border-radius: 12px;
  box-shadow: ${(props) =>
    props.theme.mode === 'light'
      ? '0 10px 50px rgba(0, 0, 0, 0.3)' /* Stronger shadow in light mode */
      : '0 10px 40px rgba(0, 0, 0, 0.6)'};
  max-width: 800px;
  width: 90%;
  text-align: center;
  position: relative;
  transition: background 0.3s ease-in-out, color 0.3s ease-in-out,
    box-shadow 0.3s ease-in-out;
  backdrop-filter: ${(props) =>
    props.theme.mode === 'light' ? 'brightness(0.85) blur(12px)' : 'blur(6px)'};
`;

const CloseButton = styled.button`
  background: ${(props) => props.theme.primary};
  color: white;
  border: none;
  padding: 10px 20px;
  margin-top: 20px;
  cursor: pointer;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${(props) => props.theme.secondary};
  }
`;

const AboutMeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2>About Me</h2>
        <p>
          Hi, I'm Douglas Sellers! I'm a Software Engineer passionate about
          frontend development, AI, and building intuitive web applications. I
          specialize in React, JavaScript, and UI/UX design, crafting
          high-performance user experiences that blend creativity with
          functionality. I love solving complex problems—whether it’s optimizing
          performance, integrating APIs, or exploring AI-driven interfaces—and
          I’m always eager to push technology forward.
        </p>
        <p>
          Beyond development, I have a natural curiosity for science and systems
          engineering. I’m particularly fascinated by mycology and decentralized
          networks, drawing inspiration from fungal ecosystems and their
          parallels to scalable software architectures.
        </p>
        <p>
          When I’m not coding or diving into new tech, you’ll probably find me
          outdoors—skiing, hiking, or exploring NYC with my wife and our dogs. I
          love discovering new places, trying different foods, and studying
          patterns in both nature and technology to fuel my curiosity.
        </p>
        <CloseButton onClick={onClose}>Close</CloseButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default AboutMeModal;
