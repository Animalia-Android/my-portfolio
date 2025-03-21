import { useTheme } from './ThemeContext';
import Slider from 'react-slick';
import styled, { ThemeProvider } from 'styled-components';
import ProjectCard from './components/ProjectCard';
import projects from './data/projects';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CarouselWrapper = styled.div`
  width: 80vw;
  max-width: 1000px;
  padding: 40px 0;
  margin: 20px;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  text-align: center;
  border-radius: 7px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  z-index: 1;

  @media (max-width: 768px) {
    width: 95vw; /* Use more screen space on mobile */
    padding: 30px 0;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  color: ${(props) => props.theme.color};
  margin-bottom: 20px;
  z-index: 10000;
`;

const StyledSlider = styled(Slider)`
  .slick-slide {
    display: flex;
    justify-content: center;
    transition: transform 0.4s ease-in-out;
  }

  .slick-center {
    transform: scale(1.1); /* Slight zoom effect */
  }

  .slick-prev,
  .slick-next {
    z-index: 10;
    color: white;
  }

  /* Make navigation buttons larger and more visible */
  .slick-prev::before,
  .slick-next::before {
    font-size: 24px;
    opacity: 0.8;
  }
`;

export default function ProjectsCarousel() {
  const { theme } = useTheme();

  const settings = {
    dots: true, // Adds navigation dots
    infinite: true, // Loops through projects infinitely
    speed: 500, // Animation speed
    slidesToShow: 3, // Shows 3 projects at a time
    slidesToScroll: 1, // Moves one project per scroll
    centerMode: true, // Centers the current slide
    centerPadding: '0px', // Ensures proper centering
    responsive: [
      {
        breakpoint: 1024, // Tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Mobile screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false, // No centering on mobile
        },
      },
    ],
  };

  return (
    <ThemeProvider theme={theme}>
      <CarouselWrapper>
        <Title>🌟 Featured Projects</Title>
        <StyledSlider {...settings}>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </StyledSlider>
      </CarouselWrapper>
    </ThemeProvider>
  );
}
