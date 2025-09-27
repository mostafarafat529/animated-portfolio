// Reveal.js
import { motion } from "framer-motion";

const animationVariants = {
  up: { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } },
  down: { hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0 } },
  left: { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } },
  fade: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
  zoom: { hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } },
  rotate: { hidden: { opacity: 0, rotate: -90 }, visible: { opacity: 1, rotate: 0 } },
};
const Reveal = ({ children, effect = "up", delay = 0, duration = 0.6 }) => {
  return (
    <motion.div
      variants={animationVariants[effect]}
      initial="hidden"
      whileInView="visible"
      transition={{ duration, delay }}
      viewport={{ once: false, amount: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
