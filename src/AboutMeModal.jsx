/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useEffect, memo } from 'react';
import { useTheme } from './ThemeContext'; // ✅ Import useTheme to access theme

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.overlayBackground};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  backdrop-filter: blur(6px);
`;

const ModalContent = styled(motion.div)`
  background: ${(props) => props.theme.modalBackground};
  color: ${(props) => props.theme.textColor};
  padding: 50px;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.6);
  max-width: 800px;
  width: 90%;
  text-align: center;
  position: relative;
  transition: all 0.3s ease-in-out;

  h2 {
    color: ${(props) =>
      props.theme.text}; /* ✅ Now correctly references theme */
  }
`;

const Paragraph = styled.p`
  margin-bottom: 20px;
  line-height: 1.6;
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
    background: ${(props) => props.theme.secondary || '#008ba3'};
  }
`;

const AboutMeModal = memo(function AboutMeModal({ isOpen, onClose }) {
  const { theme } = useTheme();

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';

    return () => (document.body.style.overflow = 'auto'); // Cleanup
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      const closeButton = document.getElementById('modal-close-btn');
      if (closeButton) closeButton.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  console.log('Theme inside AboutMeModal:', theme); // debugging

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }} // Smooth exit
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2>About Me</h2>
        <Paragraph>
          Hi, I'm Douglas Sellers! I'm a Software Engineer passionate about
          frontend development, AI, and building intuitive web applications. I
          specialize in React, JavaScript, and UI/UX design, crafting
          high-performance user experiences that blend creativity with
          functionality. I love solving complex problems—whether it’s optimizing
          performance, integrating APIs, or exploring AI-driven interfaces—and
          I’m always eager to push technology forward.
        </Paragraph>
        <Paragraph>
          Beyond development, I have a natural curiosity for science and systems
          engineering. I’m particularly fascinated by mycology and decentralized
          networks, drawing inspiration from fungal ecosystems and their
          parallels to scalable software architectures.
        </Paragraph>
        <Paragraph>
          When I’m not coding or diving into new tech, you’ll probably find me
          outdoors—skiing, hiking, or exploring NYC with my wife and our dogs. I
          love discovering new places, trying different foods, and studying
          patterns in both nature and technology to fuel my curiosity.
        </Paragraph>
        <CloseButton id="modal-close-btn" onClick={onClose}>
          Close
        </CloseButton>
      </ModalContent>
    </ModalOverlay>
  );
});

export default AboutMeModal;
