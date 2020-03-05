import React from "react";
//Image Imports
import imageTide from "../public/static/images/tide.gif";
import imageTideMobile from "../public/static/images/tide-mobile.png";
import imagePluto from "../public/static/images/pluto.gif";
import imageReact from "../public/static/images/react.png";
import imageRedux from "../public/static/images/redux.png";
import imageNode from "../public/static/images/node-icon.png";
import imageFirebase from "../public/static/images/firebase.png";
import imagePlutoMobile from "../public/static/images/pluto-mobile.png";
import imageBakery from "../public/static/images/bakery.gif";
import imageBakeryMobile from "../public/static/images/bakery-mobile.png";
import imageAntd from "../public/static/images/antd.png";
import imageNextJs from "../public/static/images/next-js.png";

const MainBox = () => {
  return (
    <div className="grid-item-two">
      <div className="mainbox">
        <div className="mainbox-content-container">
          <div className="about-container">
            <h1 className="about-title"></h1>
            <div className="about-text">
              <p>
                Hello, my name is Dimitri Michel and I'm a passionate Software
                Developer.
                <br />I believe <strong>anything</strong> can be overcome
                through commitment and hard work and I'm always up for learning
                new things.
              </p>
            </div>
          </div>
          <h1 className="projects-title">Projects</h1>
          <div className="projects-container">
            <div className="project-one">
              <div className="project-details">
                <h3 className="project-details-title">Tide</h3>
                <p className="project-details-text">
                  Tide is a mini social network. It first began with an{" "}
                  <b>API </b>
                  built with <b>NodeJS</b> connecting to a scalable{" "}
                  <b>Google Firebase</b> database.
                  <br />
                  <br />
                  On the front end <b>React</b> and <b>Redux</b> was used to to
                  maintain global and local state changes.
                  <br />
                  <br />
                </p>
                <div className="project-buttons">
                  <a
                    className="button"
                    role="button"
                    href="https://tide.dimitrimichel.com/login"
                  >
                    <button role="button">Launch</button>
                  </a>
                  <a
                    className="button"
                    role="button"
                    href="https://github.com/DimitriMichel/Tide"
                  >
                    <button role="button">Github</button>
                  </a>
                </div>
              </div>
              <div className="project-card-container">
                <div className="icons-container">
                  <div className="icons">
                    <div className="build-icon">
                      <div className="list-icon">
                        <img src={imageReact} />
                      </div>
                      <div className="list-icon">
                        <img src={imageRedux} />
                      </div>
                      <div className="list-icon">
                        <img src={imageNode} />
                      </div>
                      <div className="list-icon">
                        <img src={imageFirebase} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="project-card">
                  <img
                    src={imageTide}
                    alt="Image of a Social Media Project Called Tide"
                  />
                </div>
                <div className="project-card-mobile">
                  <img
                    src={imageTideMobile}
                    alt="Mobile image of a Social Media Project Called Tide"
                  />
                </div>
              </div>
            </div>
            <div className="project-one">
              <div className="project-details">
                <h3 className="project-details-title">Pluto</h3>
                <p className="project-details-text">
                  Pluto is statistical application completely built in{" "}
                  <b>React</b>
                  <br />
                  <br />
                  Pluto returns the financial data of all 530+ members of the
                  United States congress, including each individuals members
                  vote attendance, Top 10 Donors, as well as their top
                  investments and industrial donors.
                  <br />
                  <br />
                </p>
                <div className="project-buttons">
                  <a
                    className="button"
                    role="button"
                    href="https://pluto.dimitrimichel.com/"
                  >
                    <button role="button">Launch</button>
                  </a>
                  <a
                    className="button"
                    role="button"
                    href="https://github.com/DimitriMichel/Pluto"
                  >
                    <button role="button">Github</button>
                  </a>
                </div>
              </div>
              <div className="project-card-container">
                <div className="icons-container">
                  <div className="icons">
                    <div className="build-icon">
                      <div className="list-icon">
                        <img src={imageReact} />
                      </div>
                      <div className="list-icon">
                        <img src={imageAntd} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="project-card">
                  <img
                    src={imagePluto}
                    alt="Image of a Social Media Project Called Tide"
                  />
                </div>
                <div className="project-card-mobile">
                  <img
                    src={imagePlutoMobile}
                    alt="Mobile image of a Social Media Project Called Tide"
                  />
                </div>
              </div>
            </div>
            <div className="project-one">
              <div className="project-details">
                <h3 className="project-details-title">Heavenly Bakery</h3>
                <p className="project-details-text">
                  Heavenly bakery is a static site built with <b>NextJS</b> and
                  deployed to Zeit.
                  <br />
                  <br />
                  Heavenly bakery is Server Rendered and leverages the speed and
                  simplicity of static sites to delivery a fluid experience.
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
                    <button role="button">Launch</button>
                  </a>
                  <a
                    className="button"
                    role="button"
                    href="https:///github.com/DimitriMichel/Bakery"
                  >
                    <button role="button">Github</button>
                  </a>
                </div>
              </div>
              <div className="project-card-container">
                <div className="icons-container">
                  <div className="icons">
                    <div className="build-icon">
                      <div className="list-icon">
                        <img src={imageReact} />
                      </div>
                      <div className="list-icon">
                        <img src={imageNextJs} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="project-card">
                  <img
                    src={imageBakery}
                    alt="Image of a Social Media Project Called Tide"
                  />
                </div>
                <div className="project-card-mobile">
                  <img
                    src={imageBakeryMobile}
                    alt="Mobile image of a Social Media Project Called Tide"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="skills-container"></div>
        </div>
      </div>
    </div>
  );
};

export default MainBox;
