import React from "react";

//Icons
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { TiLocation } from "react-icons/ti";
import { TiMail } from "react-icons/ti";
import { TiPhone } from "react-icons/ti";
import { FiCalendar } from "react-icons/fi";

//Framer Motion
import { motion } from "framer-motion";
const yContainerVariants = {
  initial: { opacity: 0, y: -20 },
  complete: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.5,
    },
  },
};
const yAxisVariants = {
  initial: { opacity: 0, y: -20 },
  complete: { opacity: 1, y: 0 },
};

const reverseYAxisVariants = {
  initial: { opacity: 0, y: 20 },
  complete: { opacity: 1, y: 0 },
};

const SideBox = () => {
  return (
    <div className="grid-item-one">
      <motion.div className="sidebox">
        <motion.div
          className="sidebox-content"
          initial="initial"
          animate="complete"
          variants={yContainerVariants}
        >
          <motion.div className="name-container">
            <motion.h1 variants={yAxisVariants}>
              Dimitri
              <strong> Michel</strong>
            </motion.h1>
          </motion.div>
          <motion.div variants={yAxisVariants} className="title-container">
            Software Developer
          </motion.div>
          <motion.div variants={yAxisVariants} className="social-container">
            <a
              href="https://twitter.com/"
              aria-label="Twitter"
              className="social-link"
            >
              <span className="font-icon">
                <FaTwitter />
              </span>
            </a>
            <a
              href="https://github.com/DimitriMichel"
              aria-label="Github"
              className="social-link"
            >
              <span className="font-icon">
                <FaGithub />
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/dimitri-michel-6812731b4/"
              aria-label="Linked In"
              className="social-link"
            >
              <FaLinkedin />
            </a>
          </motion.div>
          <motion.div variants={reverseYAxisVariants} className="details">
            <div className="info">
              <ul>
                <li>
                  <FiCalendar /> November 18
                </li>
                <li>
                  <TiLocation /> Boston, MA
                </li>
                <li>
                  <TiMail />
                  <a href="mailto:dimitri.dev@icloud.com">
                    dimitri.dev@icloud.com
                  </a>
                </li>
                <li>
                  <TiPhone /> (617)-322-4315
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SideBox;
