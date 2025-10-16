/* eslint-disable no-unused-vars */
import { useState } from 'react';
import styled from 'styled-components';

import { useTheme } from './ThemeContext';
import { Sun } from 'lucide-react';

const ThemeToggle = styled.button`
  background: ${(props) => props.theme.primary};
  border: 0.5px solid ${(props) => props.theme.primary};
  color: ${(props) => props.theme.color};
  padding: 8px 12px;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 5px;

  &:hover {
    background: ${(props) => props.theme.highlight};
    color: ${(props) => props.theme.background};
  }
`;

// Styled Components for Navbar
const Nav = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: ${(props) =>
    props.theme.mode === 'dark'
      ? 'rgba(30, 30, 46, 0.95)'
      : props.theme.background};
  backdrop-filter: ${(props) =>
    props.theme.mode === 'dark' ? 'blur(0px)' : 'blur(10px)'};
  padding: 20px 0;
  border-bottom: 0.5px solid ${(props) => props.theme.border};
  z-index: 100;
  display: flex;
  justify-content: center;
  transition: 0.3s ease-in-out;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: ${(props) => props.theme.border};
    box-shadow: 0 0 10px ${(props) => props.theme.border};
  }
`;

const NavContainer = styled.div`
  width: 100%;
  max-width: 1290px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${(props) => props.theme.color};
  text-decoration: none;
  cursor: pointer;
`;

const NavLinks = styled.ul`
  display: flex;
  color: ${(props) => props.theme.color};
  gap: 20px;
  list-style: none;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw; /* ✅ Makes sure it stays within the screen */
    height: 100vh; /* ✅ Full screen menu */
    background: ${(props) => props.theme.background};
    align-items: center;
    justify-content: center;
    transform: ${(props) =>
      props.isOpen
        ? 'translateY(0)'
        : 'translateY(-100%)'}; /* ✅ Hides the menu off-screen */
    transition: transform 0.4s ease-in-out;
    z-index: 99;
  }
`;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <Nav>
      <NavContainer>
        <Logo href="#">Douglas</Logo>
        {/* Navigation Links */}
        <NavLinks isOpen={isOpen}></NavLinks>

        <ThemeToggle onClick={toggleTheme}>
          {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </ThemeToggle>
      </NavContainer>
    </Nav>
  );
}
