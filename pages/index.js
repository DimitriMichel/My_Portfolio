import React, { Fragment } from "react";

import SideBox from "../components/SideBox";
import MainBox from "../components/MainBox";

const HomePage = () => {
  return (
    <Fragment>
      <div className="site-container">
        <div className="box-container">
          <SideBox />
          <MainBox />
        </div>
      </div>
    </Fragment>
  );
};

export default HomePage;
