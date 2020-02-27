import React, { Fragment } from "react";

const Content = () => {
  return (
    <Fragment>
      <div className="col-12 col-md-12 col-xl-9">
        <div className="box shadow shadow--green pb-0">
          {/*--  Menu --*/}
          <div className="circle-menu">
            <div className="hamburger">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>
          <div className="inner-menu js-menu">
            <ul className="nav">
              <li className="nav__item">
                <a className="active" href="about.html">
                  About
                </a>
              </li>
              <li className="nav__item">
                <a href="resume.html">Resume</a>
              </li>
              <li className="nav__item">
                <a href="portfolio.html">Portfolio</a>
              </li>
              <li className="nav__item">
                <a href="blog.html">Blog</a>
              </li>
              <li className="nav__item">
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </div>

          {/*--  About --*/}
          <div className="pb-0 pb-sm-2">
            <h1 className="title title--h1 title__separate">About Me</h1>
            <p>
              I'm Creative Director and UI/UX Designer from Sydney, Australia,
              working in web development and print media. I enjoy turning
              complex problems into simple, beautiful and intuitive designs.
            </p>
            <p>
              My job is to build your website so that it is functional and
              user-friendly but at the same time attractive. Moreover, I add
              personal touch to your product and make sure that is eye-catching
              and easy to use. My aim is to bring across your message and
              identity in the most creative way. I created web design for many
              famous brand companies.
            </p>
          </div>

          {/*--  What  --*/}
          <div className="box-inner pb-0">
            <h2 className="title title--h3">What I'm Doing</h2>
            <div className="row">
              {/*--  Case Item --*/}
              <div className="col-12 col-lg-6">
                <div className="case-item box box__second">
                  <img
                    className="case-item__icon"
                    src="assets/icons/icon-design.svg"
                    alt=""
                  />
                  <div>
                    <h3 className="title title--h5">Web Design</h3>
                    <p className="case-item__caption">
                      The most modern and high-quality design made at a
                      professional level.
                    </p>
                  </div>
                </div>
              </div>

              {/*--  Case Item --*/}
              <div className="col-12 col-lg-6">
                <div className="case-item box box__second">
                  <img
                    className="case-item__icon"
                    src="assets/icons/icon-dev.svg"
                    alt=""
                  />
                  <div>
                    <h3 className="title title--h5">Web Development</h3>
                    <p className="case-item__caption">
                      High-quality and professional development of sites at the
                      professional level.
                    </p>
                  </div>
                </div>
              </div>

              {/*--  Case Item --*/}
              <div className="col-12 col-lg-6">
                <div className="case-item box box__second">
                  <img
                    className="case-item__icon"
                    src="assets/icons/icon-app.svg"
                    alt=""
                  />
                  <div>
                    <h3 className="title title--h5">Mobile Apps</h3>
                    <p className="case-item__caption">
                      Professional development of applications for iOS and
                      Android.
                    </p>
                  </div>
                </div>
              </div>

              {/*--  Case Item --*/}
              <div className="col-12 col-lg-6">
                <div className="case-item box box__second">
                  <img
                    className="case-item__icon"
                    src="assets/icons/icon-photo.svg"
                    alt=""
                  />
                  <div>
                    <h3 className="title title--h5">Photography</h3>
                    <p className="case-item__caption">
                      I make high-quality photos of any category at a
                      professional level.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*-- Testimonials --*/}
          <div className="box-inner box-inner--white">
            <h2 className="title title--h3">Testimonials</h2>

            <div className="swiper-container js-carousel-review">
              <div className="swiper-wrapper">
                {/*--  Review Item --*/}
                <div className="swiper-slide review-item">
                  <svg className="avatar avatar--80" viewBox="0 0 84 84">
                    <g className="avatar__hexagon">
                      <image
                        xlink:href="assets/img/Avatar-2.svg"
                        height="100%"
                        width="100%"
                      />
                    </g>
                  </svg>
                  <h4 className="title title--h5">Daniel Lewis</h4>
                  <p className="review-item__caption">
                    Felecia was hired to create a corporate identity. We were
                    very pleased with the work done.
                  </p>
                </div>

                {/*--  Review Item --*/}
                <div className="swiper-slide review-item">
                  <svg className="avatar avatar--80" viewBox="0 0 84 84">
                    <g className="avatar__hexagon">
                      <image
                        xlink:href="assets/img/Avatar-3.svg"
                        height="100%"
                        width="100%"
                      />
                    </g>
                  </svg>
                  <h4 className="title title--h5">Jessica Miller</h4>
                  <p className="review-item__caption">
                    thanks to the skill of Felecia, we have a design that we can
                    be proud of.
                  </p>
                </div>

                {/*--  Review Item --*/}
                <div className="swiper-slide review-item">
                  <svg className="avatar avatar--80" viewBox="0 0 84 84">
                    <g className="avatar__hexagon">
                      <image
                        xlink:href="assets/img/Avatar-4.svg"
                        height="100%"
                        width="100%"
                      />
                    </g>
                  </svg>
                  <h4 className="title title--h5">Tanya Ruiz</h4>
                  <p className="review-item__caption">
                    Felecia was hired to create a corporate identity. We were
                    very pleased with the work done.
                  </p>
                </div>

                {/*--  Review Item --*/}
                <div className="swiper-slide review-item">
                  <svg className="avatar avatar--80" viewBox="0 0 84 84">
                    <g className="avatar__hexagon">
                      <image
                        xlink:href="assets/img/Avatar-5.svg"
                        height="100%"
                        width="100%"
                      />
                    </g>
                  </svg>
                  <h4 className="title title--h5">Thomas Castro</h4>
                  <p className="review-item__caption">
                    thanks to the skill of Felecia, we have a design that we can
                    be proud of.
                  </p>
                </div>
              </div>

              <div className="swiper-pagination"></div>
            </div>
          </div>

          {/*--  Clients --*/}
          <div className="box-inner box-inner--rounded">
            <h2 className="title title--h3">Clients</h2>

            <div className="swiper-container js-carousel-clients">
              <div className="swiper-wrapper">
                {/*-- Item client --*/}
                <div className="swiper-slide">
                  <a href="#">
                    <img src="assets/img/logo-partner.svg" alt="Logo" />
                  </a>
                </div>

                {/*-- Item client --*/}
                <div className="swiper-slide">
                  <a href="#">
                    <img src="assets/img/logo-partner.svg" alt="Logo" />
                  </a>
                </div>

                {/*-- Item client --*/}
                <div className="swiper-slide">
                  <a href="#">
                    <img src="assets/img/logo-partner.svg" alt="Logo" />
                  </a>
                </div>

                {/*-- Item client --*/}
                <div className="swiper-slide">
                  <a href="#">
                    <img src="assets/img/logo-partner.svg" alt="Logo" />
                  </a>
                </div>

                {/*-- Item client --*/}
                <div className="swiper-slide">
                  <a href="#">
                    <img src="assets/img/logo-partner.svg" alt="Logo" />
                  </a>
                </div>

                {/*-- Item client --*/}
                <div className="swiper-slide">
                  <a href="#">
                    <img src="assets/img/logo-partner.svg" alt="Logo" />
                  </a>
                </div>
              </div>

              <div className="swiper-pagination"></div>
            </div>
          </div>
        </div>

        {/*--  Footer --*/}
        <footer className="footer">© 2020 </footer>
      </div>
    </Fragment>
  );
};

export default Content;
