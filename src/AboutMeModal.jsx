import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Updated Modal Styles
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8); /* Darker background for better readability */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;

const ModalContent = styled(motion.div)`
  background: ${(props) => props.theme.cardBackground};
  color: ${(props) => props.theme.text};
  padding: 40px; /* Increased padding for more space */
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5); /* Stronger shadow for better separation */
  max-width: 700px; /* Increased width */
  width: 90%;
  text-align: center;
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
          Hi, I'm Douglas Sellers! A Software Engineer passionate about frontend
          development, AI, and building scalable, high-performance applications.
          With expertise in React, JavaScript, and UI/UX design, I focus on
          creating intuitive and visually engaging user experiences. I thrive at
          the intersection of technology and creativity, constantly exploring
          new frameworks, performance optimizations, and AI-driven interfaces.
        </p>
        <p>
          Outside of coding, I’m fascinated by AI, mycology, and systems
          engineering—always looking for ways to merge science and software. I
          love exploring the intelligence of fungal networks, studying how
          nature’s decentralized systems can inspire better software
          architectures. My passion lies in solving complex problems, optimizing
          performance, and pushing the boundaries of technology to create
          impactful solutions.
        </p>
        <CloseButton onClick={onClose}>Close</CloseButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default AboutMeModal;
