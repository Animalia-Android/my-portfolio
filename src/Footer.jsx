import styled from 'styled-components';
import BackToTop from './BackToTop';

// Footer Container
const FooterWrapper = styled.footer`
  background: ${(props) => props.theme.background}; /* ✅ Uses theme */
  color: ${(props) => props.theme.text}; /* ✅ Uses theme */
  text-align: center;
  padding: 20px;
  margin-top: 50px;
  font-size: 0.9rem;
  position: relative;
  width: 100%;
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
  color: ${(props) => props.theme.primary}; /* ✅ Uses theme */
  font-size: 1.5rem;
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    color: ${(props) => props.theme.text}; /* ✅ Uses theme */
    transform: scale(1.1);
  }
`;

// // Back to Top Button
// const BackToTop = styled(Link)`
//   display: inline-block;
//   margin-top: 10px;
//   background: ${(props) => props.theme.background}; /* ✅ Uses theme */
//   color: ${(props) => props.theme.text}; /* ✅ Uses theme */
//   cursor: pointer;
//   font-weight: bold;
//   transition: 0.3s;

//   &:hover {
//     color: ${(props) => props.theme.text}; /* ✅ Uses theme */
//   }
// `;

export default function Footer() {
  return (
    <FooterWrapper>
      {/* Social Media Links */}
      <SocialLinks>
        <SocialIcon href="https://github.com/yourgithub" target="_blank">
          🐙 GitHub
        </SocialIcon>
        <SocialIcon href="https://linkedin.com/in/yourlinkedin" target="_blank">
          💼 LinkedIn
        </SocialIcon>
        <SocialIcon href="mailto:douglas@example.com">📧 Email</SocialIcon>
      </SocialLinks>

      <p>© {new Date().getFullYear()} Douglas Sellers. All Rights Reserved.</p>

      {/* Back to Top Button */}
      <BackToTop />
    </FooterWrapper>
  );
}
