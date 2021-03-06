import React, { Fragment } from "react";
import ReactTooltip from "react-tooltip";
//Image/Video & Icon Imports
import imageTideMobile from "../public/static/images/tide-mobile.png";
import imageReact from "../public/static/images/react.png";
import imageRedux from "../public/static/images/redux.png";
import imageNode from "../public/static/images/node-icon.png";
import imageFirebase from "../public/static/images/firebase.png";
import imagePlutoMobile from "../public/static/images/pluto-mobile.png";
import videoBakery from "../public/static/videos/bakery.mp4";
import imageBakeryMobile from "../public/static/images/bakery-mobile.png";
import imageAntd from "../public/static/images/antd.png";
import imageNextJs from "../public/static/images/next-js.png";
import videoTide from "../public/static/videos/tide.mp4";
import videoPluto from "../public/static/videos/pluto.mp4";

//Framer Motion
import { motion } from "framer-motion";

//Animation Configurations
const yAxisVariants = {
  initial: { opacity: 0, y: -20 },
  complete: { opacity: 1, y: 0 },
};
const reverseYAxisVariants = {
  initial: { y: 20 },
  complete: { y: 0 },
};
const xAxisVariants = {
  initial: { opacity: 0, x: -20 },
  complete: { opacity: 1, x: 0 },
  transition: {
    duration: 0.9,
  },
};

const MainBox = () => {
  return (
    <Fragment>
      {/*Tooltips Start*/}
      <ReactTooltip id="react" className="tooltip" backgroundColor="#232D3E">
        <span>React</span>
      </ReactTooltip>
      <ReactTooltip id="redux" className="tooltip" backgroundColor="#232D3E">
        <span>Redux</span>
      </ReactTooltip>
      <ReactTooltip
        id="ant design"
        className="tooltip"
        backgroundColor="#232D3E"
      >
        <span>Ant Design</span>
      </ReactTooltip>
      <ReactTooltip id="firebase" className="tooltip" backgroundColor="#232D3E">
        <span>Firebase</span>
      </ReactTooltip>
      <ReactTooltip id="nodejs" className="tooltip" backgroundColor="#232D3E">
        <span>NodeJS</span>
      </ReactTooltip>
      <ReactTooltip id="nextjs" className="tooltip" backgroundColor="#232D3E">
        <span>NextJS</span>
      </ReactTooltip>
      {/*Tooltips Ends*/}
      <div className="grid-item-two">
        <div className="mainbox">
          <div className="mainbox-content-container">
            <div className="about-container">
              <motion.div className="about-text">
                <motion.p
                  initial="initial"
                  animate="complete"
                  variants={yAxisVariants}
                >
                  Anything can be overcome through commitment and hard work.
                </motion.p>
              </motion.div>
            </div>
            <motion.div initial="exit" animate="enter" exit="exit">
              <motion.h1
                variants={xAxisVariants}
                initial="initial"
                animate="complete"
                transition="transition"
                className="projects-title"
              >
                Projects
              </motion.h1>
            </motion.div>
            <motion.div
              variants={reverseYAxisVariants}
              initial="initial"
              animate="complete"
              className="projects-container"
            >
              <div className="project-one">
                <div className="project-details">
                  <h3 className="project-details-title">Tide</h3>
                  <p className="project-details-text">
                    Tide is a mini social network. It first began with an{" "}
                    <b>API </b>
                    built with <b>NodeJS</b> connecting to a scalable{" "}
                    <b>Google Firebase</b> database. On the front end{" "}
                    <b>React</b> and <b>Redux</b> were used to maintain global
                    and local state changes.
                    <br />
                    <br />
                  </p>
                  <div className="project-buttons">
                    <a
                      className="button"
                      role="button"
                      href="https://tide.dimitrimichel.com/login"
                    >
                      <motion.button
                        whileHover={{
                          scale: 1.1,
                          transition: { duration: 0.1 },
                        }}
                        role="button"
                      >
                        Launch
                      </motion.button>
                    </a>
                    <a
                      className="button"
                      role="button"
                      href="https://github.com/DimitriMichel/Tide"
                    >
                      <motion.button
                        whileHover={{
                          scale: 1.1,
                          transition: { duration: 0.1 },
                        }}
                        role="button"
                      >
                        Github
                      </motion.button>
                    </a>
                  </div>
                </div>
                <div className="project-card-container">
                  <div className="icons-card-container">
                    <div className="icons-container">
                      <div className="icons">
                        <div className="build-icon">
                          <div data-tip data-for="react" className="list-icon">
                            <img src={imageReact} alt="React Icon" />
                          </div>

                          <div data-tip data-for="redux" className="list-icon">
                            <img src={imageRedux} alt="Redux Icon" />
                          </div>
                          <div data-tip data-for="nodejs" className="list-icon">
                            <img src={imageNode} alt="Node JS Icon" />
                          </div>
                          <div
                            data-tip
                            data-for="firebase"
                            className="list-icon"
                          >
                            <img src={imageFirebase} alt="Firebase Icon" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="project-card">
                      <video
                        onMouseOver={(event) => event.target.play()}
                        onMouseOut={(event) => event.target.pause()}
                        loop="loop"
                        height="auto"
                        width="100%"
                        muted="muted"
                      >
                        <source src={videoTide} type="video/mp4" />
                      </video>
                    </div>
                    <div className="project-card-mobile">
                      <img
                        src={imageTideMobile}
                        alt="Mobile image of a Social Media Project Called Tide"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="project-one">
                <div className="project-details">
                  <h3 className="project-details-title">Pluto</h3>
                  <p className="project-details-text">
                    Pluto is a statistical application completely built in{" "}
                    <b>React</b> and styled with <b>Ant Design</b>. Pluto
                    returns the financial data of all 530+ members of the United
                    States congress, including each individuals members vote
                    attendance, Top 10 Donors, as well as their top investments
                    and industrial donors.
                    <br />
                    <br />
                  </p>
                  <div className="project-buttons">
                    <a
                      className="button"
                      role="button"
                      href="https://pluto.dimitrimichel.com/"
                    >
                      <motion.button
                        whileHover={{
                          scale: 1.1,
                          transition: { duration: 0.1 },
                        }}
                        role="button"
                      >
                        Launch
                      </motion.button>
                    </a>
                    <a
                      className="button"
                      role="button"
                      href="https://github.com/DimitriMichel/Pluto"
                    >
                      <motion.button
                        whileHover={{
                          scale: 1.1,
                          transition: { duration: 0.1 },
                        }}
                        role="button"
                      >
                        Github
                      </motion.button>
                    </a>
                  </div>
                </div>
                <div className="project-card-container">
                  <div className="icons-card-container">
                    <div className="icons-container">
                      <div className="icons">
                        <div className="build-icon">
                          <div data-tip data-for="react" className="list-icon">
                            <img src={imageReact} alt="React Icon" />
                          </div>
                          <div
                            data-tip
                            data-for="ant design"
                            className="list-icon"
                          >
                            <img src={imageAntd} alt="Ant Design Icon" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="project-card">
                      <video
                        onMouseOver={(event) => event.target.play()}
                        onMouseOut={(event) => event.target.pause()}
                        loop="loop"
                        height="auto"
                        width="100%"
                        muted="muted"
                      >
                        <source src={videoPluto} type="video/mp4" />
                      </video>
                    </div>
                    <div className="project-card-mobile">
                      <img
                        src={imagePlutoMobile}
                        alt="Mobile image of a website called Pluto"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="project-one">
                <div className="project-details">
                  <h3 className="project-details-title">Heavenly Bakery</h3>
                  <p className="project-details-text">
                    Heavenly bakery is a static site built with <b>NextJS</b>{" "}
                    and deployed to Zeit. Heavenly Bakery is Server Rendered and
                    leverages the speed and simplicity of static sites to
                    deliver a fluid experience.
                    <br />
                    <br />
                  </p>
                  <div className="project-buttons">
                    <a
                      className="button"
                      role="button"
                      href="https://bakery.dimitrimichel.com/
                      "
                    >
                      <motion.button
                        whileHover={{
                          scale: 1.1,
                          transition: { duration: 0.1 },
                        }}
                        role="button"
                      >
                        Launch
                      </motion.button>
                    </a>
                    <a
                      className="button"
                      role="button"
                      href="https:///github.com/DimitriMichel/Bakery"
                    >
                      <motion.button
                        whileHover={{
                          scale: 1.1,
                          transition: { duration: 0.1 },
                        }}
                        role="button"
                      >
                        Github
                      </motion.button>
                    </a>
                  </div>
                </div>
                <div className="project-card-container">
                  <div className="icons-card-container">
                    <div className="icons-container">
                      <div className="icons">
                        <div className="build-icon">
                          <div data-tip data-for="react" className="list-icon">
                            <img src={imageReact} alt="React Icon" />
                          </div>
                          <div className="list-icon">
                            <img
                              data-tip
                              data-for="nextjs"
                              src={imageNextJs}
                              alt="Next JS Icon"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="project-card">
                      <video
                        onMouseOver={(event) => event.target.play()}
                        onMouseOut={(event) => event.target.pause()}
                        loop="loop"
                        height="auto"
                        width="100%"
                        muted="muted"
                      >
                        <source src={videoBakery} type="video/mp4" />
                      </video>
                    </div>
                    <div className="project-card-mobile">
                      <img
                        src={imageBakeryMobile}
                        alt="Mobile image of a Bakery website"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MainBox;
