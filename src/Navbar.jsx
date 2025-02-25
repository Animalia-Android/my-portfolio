import { useState } from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';

import { useTheme } from './ThemeContext';

const ThemeToggle = styled.button`
  background: none;
  border: 2px solid ${(props) => props.theme.primary};
  color: ${(props) => props.theme.text};
  padding: 8px 12px;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.background};
  }
`;

// Styled Components for Navbar
const Nav = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: ${(props) => props.theme.background}; /* ✅ Uses theme */
  backdrop-filter: blur(10px);
  padding: 20px 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  transition: 0.3s ease-in-out;
`;

const NavContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: bold;
  color: #00c6ff;
  text-decoration: none;
  cursor: pointer;
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    background: rgba(30, 30, 46, 0.95);
    position: absolute;
    top: 60px;
    right: 10px;
    width: 200px;
    padding: 15px;
    border-radius: 10px;
  }
`;

const NavLink = styled(Link)`
  color: ${(props) => props.theme.text}; /* ✅ Uses theme */
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: ${(props) => props.theme.primary}; /* ✅ Uses theme */
  }
`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  font-size: 2rem;
  color: white;

  @media (max-width: 768px) {
    display: block;
  }
`;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <Nav>
      <NavContainer>
        <Logo href="#">Douglas</Logo>

        {/* Hamburger Menu (For Mobile) */}
        <Hamburger onClick={() => setIsOpen(!isOpen)}>☰</Hamburger>

        {/* Navigation Links */}
        <NavLinks isOpen={isOpen}>
          {/* <NavLink to="home" smooth={true} duration={500}>
            Home
          </NavLink> */}
          {/* <NavLink to="projects" smooth={true} duration={500}>
            Projects
          </NavLink> */}
          <NavLink to="contact" smooth={true} duration={500}>
            Contact
          </NavLink>
        </NavLinks>
        <ThemeToggle onClick={toggleTheme}>
          {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </ThemeToggle>
      </NavContainer>
    </Nav>
  );
}
