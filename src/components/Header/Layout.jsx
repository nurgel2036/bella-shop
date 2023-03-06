import React, { Fragment } from "react";

import Header from "../Header/Header";
import Footer from '../../Footer/Footer'
import Routers from "../../routers/Routers"
import GoToTop from "../Blocks/toUpward/toUpward";

import WordImage from "../Content/WordImage/WordImage";
import { SiBuymeacoffee } from "react-icons/si";
import { FiPhoneCall } from "react-icons/fi";
import { TbMessageCircle } from "react-icons/tb";

const icon = <SiBuymeacoffee />;
const icon2 = <FiPhoneCall />;
const icon3 = <TbMessageCircle />;

const Layout = () => {
  return (
    <Fragment>
      <Header />
      <div>
        <Routers />
      </div>
      <div className="outWordImage">
        <div className="wordImageMain">
          <WordImage icon={icon} titleOfWord={"buy 1 get 1"}></WordImage>
          <WordImage icon={icon2} titleOfWord={"call to free"}></WordImage>
          <WordImage icon={icon3} titleOfWord={"money back"}></WordImage>
        </div>
      </div>
      <GoToTop/>
      <Footer />
    </Fragment>
  );
};

export default Layout;
