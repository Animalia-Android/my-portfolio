import styled from 'styled-components';
import BackToTop from './BackToTop';
import { FaFileAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';

// Footer Container
const FooterWrapper = styled.footer`
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  text-align: center;
  margin-top: 50px;
  margin-bottom: 30px;
  font-size: 0.9rem;
  position: relative;
  width: 100%;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

// Social Links
const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 10px;
`;

// Social Icon Styling
const SocialIcon = styled.a`
  color: ${(props) => props.theme.primary};
  font-size: 1.5rem;
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    color: ${(props) => props.theme.text};
    transform: scale(1.1);
  }
`;

export default function Footer() {
  return (
    <FooterWrapper>
      {/* Social Media Links */}
      <SocialLinks>
        <SocialIcon href="https://github.com/Animalia-Android" target="_blank">
          <FaGithub size={30} />
        </SocialIcon>
        <SocialIcon
          href="https://www.linkedin.com/in/douglas-sellers/"
          target="_blank"
        >
          <FaLinkedin size={30} />
        </SocialIcon>
        <SocialIcon href="mailto:douglasssellers@gmail.com">
          <MdOutlineEmail size={30} />
        </SocialIcon>
        <SocialIcon
          as="a"
          href="/Doug_Sellers_Software_Engineer_Resume_2025.pdf"
          target="_blank"
        >
          <FaFileAlt size={30} />
        </SocialIcon>
      </SocialLinks>

      <p>© {new Date().getFullYear()} Douglas Sellers. All Rights Reserved.</p>

      {/* Back to Top Button */}
      <BackToTop />
    </FooterWrapper>
  );
}
