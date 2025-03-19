import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import styled from 'styled-components';

const ScrollButton = styled.button`

  margin-top: 10px;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  cursor: pointer;
  font-weight: bold;
  transition: 0.3s;
  bottom: 20px;
  right: 20px;
  background: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.color};
  border: 0.1px solid ${(props) => props.theme.button};
  border-radius: 7px;
  padding: 10px 15px;
  cursor: pointer;
  font-size: .7rem;
  transition: opacity 0.3s;
  z-index: 9999;


  &:hover {
    opacity: 0.8;
    color: ${(props) => props.theme.color};
  }
  }
`;

export default function BackToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ScrollButton
      show={showButton}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      Back to the top
      <FaArrowUp />
    </ScrollButton>
  );
}
