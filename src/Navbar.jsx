import { useState } from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';

import { useTheme } from './ThemeContext';

const ThemeToggle = styled.button`
  background: ${(props) => props.theme.primary};
  border: 0.5px solid ${(props) => props.theme.primary};
  color: ${(props) => props.theme.color};
  padding: 8px 12px;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 7px;

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

//potentially use in future layout
const NavLink = styled(Link)`
  color: ${(props) => props.theme.color};
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: ${(props) => props.theme.primary};
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
          </NavLink>
          <NavLink to="projects" smooth={true} duration={500}>
            Projects
          </NavLink>
          <NavLink to="contact" smooth={true} duration={500}>
            Contact
          </NavLink> */}
          {/* <NavLink href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            Resume 📄
          </NavLink> */}
        </NavLinks>
        <ThemeToggle onClick={toggleTheme}>
          {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </ThemeToggle>
      </NavContainer>
    </Nav>
  );
}
