import React, { Fragment } from "react";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { TiLocation } from "react-icons/ti";
import { TiMail } from "react-icons/ti";
import { TiPhone } from "react-icons/ti";
import { FiCalendar } from "react-icons/fi";
import { AiOutlineCloudDownload } from "react-icons/ai";

const SideBox = () => {
  return (
    <div className="grid-item-one">
      <div className="sidebox">
        <div className="name-container">
          <h1>
            Dimitri
            <strong> Michel</strong>
          </h1>
        </div>
        <div className="title-container">Software Developer</div>
        <div className="social-container">
          <a href="https://facebook.com" className="social-link">
            <span className="font-icon">
              <FaTwitter />
            </span>
          </a>
          <a href="https://facebook.com" className="social-link">
            <span className="font-icon">
              <FaGithub />
            </span>
          </a>
          <a href="https://facebook.com" className="social-link">
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
                <a href="mailto:dimitri.dev@icloud.com">
                  dimitri.dev@icloud.com
                </a>
              </li>
              <li>
                <TiPhone /> (617)-322-4315
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
      </div>
    </div>
  );
};

export default SideBox;
