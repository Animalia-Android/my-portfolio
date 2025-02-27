/* eslint-disable react/prop-types */
// import styled from 'styled-components';
// import { Link } from 'react-scroll';
// import { motion } from 'framer-motion';

// const ModalOverlay = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background: ${(props) => props.theme.overlayBackground};
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   z-index: 100;
//   backdrop-filter: blur(6px);
// `;

// const ModalContent = styled(motion.div)`
//   background: ${(props) => props.theme.modalBackground};
//   color: ${(props) => props.theme.textColor};
//   padding: 50px;
//   border-radius: 12px;
//   box-shadow: 0 10px 40px rgba(0, 0, 0, 0.6);
//   max-width: 800px;
//   width: 90%;
//   text-align: center;
//   position: relative;
//   transition: all 0.3s ease-in-out;
// `;

// const Button = styled(Link)`
//   cursor: pointer;
//   padding: 14px 28px;
//   font-size: 1.2rem;
//   font-weight: bold;
//   color: white;
//   background: ${(props) => (props.primary ? '#00c6ff' : 'transparent')};
//   border: ${(props) => (props.primary ? 'none' : '2px solid #00c6ff')};
//   border-radius: 10px;
//   text-decoration: none;
//   transition: all 0.3s ease-in-out;

//   &:hover {
//     background: ${(props) => (props.primary ? '#008ba3' : '#00c6ff')};
//     color: ${(props) => (props.primary ? 'white' : 'black')};
//     transform: scale(1.05);
//   }
// `;

// const CloseButton = styled.button`
//   background: ${(props) => props.theme.primary};
//   color: white;
//   border: none;
//   padding: 10px 20px;
//   margin-top: 20px;
//   cursor: pointer;
//   border-radius: 8px;
//   font-size: 1rem;
//   transition: all 0.2s ease-in-out;

//   &:hover {
//     background: ${(props) => props.theme.secondary || '#008ba3'};
//   }
// `;

// const ContactModal = ({ isOpen, onClose }) => {
//   if (!isOpen) return null;
//   console.log('From Contact Modal');
//   return (
//     <ModalOverlay onClick={onClose}>
//       <ModalContent onClick={(e) => e.stopPropagation()}>
//         <h2>Contact Me</h2>
//         <p>You can reach me via email or connect on my socials:</p>
//         <Button as="a" href="mailto:douglassSellers@gmail.com">
//           📧 Email Me
//         </Button>
//         <Button
//           as="a"
//           href="https://linkedin.com/in/yourprofile"
//           target="_blank"
//         >
//           🔗 LinkedIn
//         </Button>
//         <Button as="a" href="https://github.com/yourgithub" target="_blank">
//           🐙 GitHub
//         </Button>
//         <CloseButton onClick={onClose}>Close</CloseButton>
//       </ModalContent>
//     </ModalOverlay>
//   );
// };

// export default ContactModal;

import styled from 'styled-components';
import { motion } from 'framer-motion';

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
  background: ${(props) => props.theme.modalBackground};
  color: ${(props) => props.theme.textColor};
  padding: 40px;
  border-radius: 16px;
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
  color: ${(props) => props.theme.text};
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
  background: ${(props) => props.theme.primary};
  border: none;
  border-radius: 12px;
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
  color: ${(props) => props.theme.text};
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
            📧 Email Me
          </ContactButton>
          <ContactButton
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
          >
            🔗 LinkedIn
          </ContactButton>
          <ContactButton href="https://github.com/yourgithub" target="_blank">
            🐙 GitHub
          </ContactButton>
        </ButtonContainer>

        <CloseButton onClick={onClose}>Close</CloseButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ContactModal;
