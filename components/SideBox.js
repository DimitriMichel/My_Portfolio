import React, { Fragment } from "react";

//Icons
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { TiLocation } from "react-icons/ti";
import { TiMail } from "react-icons/ti";
import { TiPhone } from "react-icons/ti";
import { FiCalendar } from "react-icons/fi";
import { AiOutlineCloudDownload } from "react-icons/ai";

//Framer Motion
import { AnimatePresence, motion } from "framer-motion";
import { yAxisVariants } from "../utils/Animations/animConfig";

const SideBox = () => {
  return (
    <AnimatePresence>
      <div className="grid-item-one">
        <motion.div
          initial="exit"
          animate="enter"
          exit="exit"
          className="sidebox"
        >
          <motion.div variants={yAxisVariants} className="name-container">
            <h1>
              Dimitri
              <strong> Michel</strong>
            </h1>
          </motion.div>
          <div  className="title-container">Software Developer</div>
          <div className="social-container">
            <a href="https://twitter.com/DimitriOkGood" aria-label="Twitter" className="social-link">
              <span className="font-icon">
                <FaTwitter />
              </span>
            </a>
            <a href="https://github.com/DimitriMichel" aria-label="Github" className="social-link">
              <span className="font-icon">
                <FaGithub />
              </span>
            </a>
            <a href="https://linkedin.com" aria-label="Linked In" className="social-link">
              <FaLinkedin />
            </a>
          </div>
          <div className="details">
            <div className="info">
              <ul>
                <li>
                  <FiCalendar /> November 18
                </li>
                <li>
                  <TiLocation /> Boston, MA
                </li>
                <li>
                  <TiMail />{" "}
                  <a href="mailto:nonono.dev@icloud.com">
                    email.dev@icloud.com
                  </a>
                </li>
                <li>
                  <TiPhone /> (617)-867-5309
                </li>
              </ul>
            </div>
            <div className="download-button">
              <button>
                <div className="download-icon">
                  <AiOutlineCloudDownload size={25} />
                </div>
                <span className="download-text"> Download Resume</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default SideBox;
