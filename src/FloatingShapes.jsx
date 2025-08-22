import { motion } from 'framer-motion';
import styled from 'styled-components';

// Wrapper to contain floating shapes & prevent overflow
const FloatingShapesWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden; /* Prevents any overflow */
  pointer-events: none; /* Ensures shapes don't interfere with clicks */
  z-index: 0; /* Keeps shapes in the background */
`;

const Shape = styled(motion.div).attrs((props) => ({
  style: {
    width: `${props.size}px`,
    height: `${props.size}px`,
  },
}))`
  position: absolute;
  background: ${(props) => props.color || '#00c6ff'};
  border-radius: 10%; /* Slightly more rounded */
  opacity: 0.7; /* Makes them slightly softer */
  filter: blur(8px); /* Glow effect */
`;

export default function FloatingShapes() {
  const isMobile = window.innerWidth < 768;

  // Control the number of shapes dynamically
  const shapeCount = isMobile ? 5 : 10; // More shapes on desktop
  const shapeSize = isMobile ? 100 : 180; // Larger base size for both

  const shapes = Array.from({ length: shapeCount }, (_, i) => ({
    size: shapeSize - i * 15, // Varies slightly for natural effect
    top: `${Math.random() * 90}vh`, // Spread across viewport height
    left: `${Math.random() * 90}vw`, // Spread across viewport width
    color: i % 2 === 0 ? '#00c6ff' : '#8A2BE2	', // Alternating colors
  }));

  return (
    <FloatingShapesWrapper>
      {shapes.map((shape, index) => (
        <Shape
          key={index}
          size={shape.size}
          color={shape.color}
          style={{ top: shape.top, left: shape.left }}
          animate={{
            y: [0, Math.random() * 60 - 30, 0], // Bigger movement range
            x: [0, Math.random() * 60 - 30, 0],
            scale: [1, 1.2, 1], // More pronounced pulsing effect
          }}
          transition={{
            duration: 5 + Math.random() * 3, // Slower and varied movement
            repeat: Infinity,
            ease: 'easeInOut',
            delay: Math.random() * 2,
          }}
        />
      ))}
    </FloatingShapesWrapper>
  );
}
