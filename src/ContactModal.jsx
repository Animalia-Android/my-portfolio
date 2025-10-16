/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Darker overlay for contrast */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  backdrop-filter: blur(10px);
  animation: fadeIn 0.3s ease-in-out;
`;

const ModalContent = styled(motion.div)`
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  padding: 40px;
  border-radius: 5px;
  box-shadow: 0 10px 50px rgba(0, 0, 0, 0.3);
  max-width: 500px;
  width: 90%;
  text-align: center;
  position: relative;
  transition: all 0.3s ease-in-out;
  backdrop-filter: blur(20px) saturate(120%);
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: ${(props) => props.theme.primary};
  margin-bottom: 15px;
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  color: ${(props) => props.theme.color};
  opacity: 0.8;
  margin-bottom: 25px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  justify-content: center;
`;

const ContactButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  max-width: 250px;
  padding: 12px 18px;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background: ${(props) => props.theme.button};
  border: none;
  border-radius: 5px;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 4px 15px rgba(0, 198, 255, 0.3);

  &:hover {
    background: ${(props) => props.theme.secondary || '#008ba3'};
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 198, 255, 0.4);
  }
`;

const CloseButton = styled.button`
  margin-top: 25px;
  background: transparent;
  color: ${(props) => props.theme.color};
  font-size: 1rem;
  border: none;
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 0.7;
  }
`;

const ContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      >
        <Title>Get in Touch</Title>
        <Subtitle>Reach out via email or connect with me on socials:</Subtitle>

        <ButtonContainer>
          <ContactButton href="mailto:douglassSellers@gmail.com">
            <MdEmail size={30} /> Email Me
          </ContactButton>
          <ContactButton
            href="https://www.linkedin.com/in/douglas-sellers/"
            target="_blank"
          >
            <FaLinkedin size={30} /> LinkedIn
          </ContactButton>
          <ContactButton
            href="https://github.com/Animalia-Android"
            target="_blank"
          >
            <FaGithub size={30} />
            GitHub
          </ContactButton>
        </ButtonContainer>

        <CloseButton onClick={onClose}>Close</CloseButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ContactModal;
