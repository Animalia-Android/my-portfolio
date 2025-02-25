import { motion } from 'framer-motion';
import styled from 'styled-components';

const Shape = styled(motion.div)`
  position: absolute;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background: ${(props) => props.color || '#00c6ff'};
  border-radius: 10%;
  opacity: 0.3;
`;

export default function FloatingShapes() {
  const shapes = [
    { size: 100, top: '10%', left: '20%' },
    { size: 80, top: '50%', left: '70%' },
    { size: 120, top: '30%', left: '90%' },
  ];

  return (
    <>
      {shapes.map((shape, index) => (
        <Shape
          key={index}
          size={shape.size}
          color="#00c6ff"
          style={{ top: shape.top, left: shape.left }}
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </>
  );
}
