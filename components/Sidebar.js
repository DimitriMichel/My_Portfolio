import React, { Fragment } from "react";

const Sidebar = () => {
  return (
    <Fragment>
      <aside className="col-12 col-md-12 col-xl-3">
        <div className="sidebar box shadow shadow--green pb-0 sticky-column">
          <svg className="avatar avatar--180" viewBox="0 0 188 188">
            <g className="avatar__box">
              <image
                href="assets/img/Avatar-1.svg"
                height="100%"
                width="100%"
              />
            </g>
          </svg>
          <div className="text-center">
            <h3 className="title title--h3 sidebar__user-name">
              <span className="weight--500">Dimitri</span>
              <br />
              Michel
              <br />
              Pierre-Louis
            </h3>
            <div className="badge badge--gray">Software Developer</div>
            {/*SOCIAL*/}
            <div className="social">
              <a className="social__link" href="https://www.facebook.com/">
                <i className="font-icon icon-facebook"> </i>
              </a>
              <a className="social__link" href="https://www.behance.com/">
                <i className="font-icon icon-twitter"> </i>
              </a>
              <a className="social__link" href="https://www.linkedin.com/">
                <i className="font-icon icon-linkedin2"> </i>
              </a>
            </div>
          </div>

          <div className="sidebar__info box-inner box-inner--rounded">
            <ul className="contacts-block">
              <li
                className="contacts-block__item"
                data-toggle="tooltip"
                data-placement="top"
                title="Birthday"
              >
                <i className="font-icon icon-calendar"></i>March 12, 1995
              </li>
              <li
                className="contacts-block__item"
                data-toggle="tooltip"
                data-placement="top"
                title="Address"
              >
                <i className="font-icon icon-location"> </i>Hong Kong, China
              </li>
              <li
                className="contacts-block__item"
                data-toggle="tooltip"
                data-placement="top"
                title="E-mail"
              >
                <a href="mailto:example@mail.com">
                  <i className="font-icon icon-envelope"> </i>example@mail.com
                </a>
              </li>
              <li
                className="contacts-block__item"
                data-toggle="tooltip"
                data-placement="top"
                title="Phone"
              >
                <i className="font-icon icon-phone"></i>+1 (070) 123-4567
              </li>
              <li
                className="contacts-block__item"
                data-toggle="tooltip"
                data-placement="top"
                title="Skype"
              >
                <a href="skype:skype-example">
                  <i className="font-icon icon-skype"> </i>Felecia_Brown
                </a>
              </li>
            </ul>

            <a className="btn" href="#">
              <i className="font-icon icon-download"> </i> Download CV
            </a>
          </div>
        </div>
      </aside>
    </Fragment>
  );
};

export default Sidebar;
