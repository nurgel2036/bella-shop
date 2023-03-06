import React from "react";

import footerImg1 from "../Footer/footerImg/american-express.jpg";
import footerImg2 from "../Footer/footerImg/mastercard.jpg";
import footerImg3 from "../Footer/footerImg/paypal.jpg";
import footerImg4 from "../Footer/footerImg/visa-electron.jpg";
import footerImg5 from "../Footer/footerImg/mastercard.jpg";
import footerImg6 from "../Footer/footerImg/visa.jpg";

import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";

import { BiArrowToRight } from "react-icons/bi";

import "../Footer/Footer.scss";
import { Link } from "react-router-dom";
export default function Footer({mainBool}) {
  return (
    <div className={`outFooter border-color ${mainBool}`}>
      <div className="mainFooter">
        <div className="blocks-footer1">
          <h4>about us</h4>
          <div className="line-footer"></div>
          <p>
            Lorem ipsuitatis placeat quia repudiandae dicta cipit accusamus
            quisquam illum, ea aliquid distinctio, quas numquam, vero saepe
            vitae voluptates!
          </p>
          <div className="icons-footer">
            <span>
              <FaFacebookSquare id="face" />
            </span>
            <span>
              <FaInstagramSquare id="insta" />
            </span>
            <span>
              <FaTwitter id="twitter" />
            </span>
            <span>
              <FaWhatsappSquare id="whats" />
            </span>
          </div>
        </div>
        <div className="blocks-footer2">
          <h4>news letters</h4>
          <p>Lorem ipsum dolor sit amet conse tetur adipi</p>
          <input type="text" placeholder="Enter your mail and get 10$ cash" />
          <button>subscribe</button>
        </div>
        <div className="blocks-footer3">
          <h4>information</h4>
          <div className={`blocks-footer3-pointer ${mainBool}`}>
            <Link to={'/about'}> <BiArrowToRight className="biArrow" /> About us{" "}</Link>
          </div>
          <div className={`blocks-footer3-pointer ${mainBool}`}>
            <Link to={'/cars'}>            <BiArrowToRight className="biArrow" />
            Delivery info </Link>
          </div>
          <div className={`blocks-footer3-pointer ${mainBool}`}>
              <Link to={'/contact'}>            <BiArrowToRight className="biArrow" />
            Contact us</Link>
          </div>
          <div className={`blocks-footer3-pointer ${mainBool}`}>
            <BiArrowToRight className="biArrow" />
            Terms and Conditions
          </div>
          <div className={`blocks-footer3-pointer ${mainBool}`}>
           <Link to={'/blogs'}>  <BiArrowToRight className="biArrow" />
            Blog  </Link>
          </div>
        </div>
        <div className="blocks-footer4">
          <h4>item tags</h4>
          <div className="inner-blocks-footer4">
            <h3>Fation</h3>
            <h3>Jeans</h3>
            <h3>Top Sellers</h3>
            <h3>Ele commerce</h3>
            <h3>Products</h3>
            <h3>Jackets</h3>
            <h3>Shop</h3>
            <h3>Theme</h3>
            <h3>Website</h3>
            <h3>Blog</h3>
            <h3>Pants</h3>
          </div>
        </div>
      </div>
      <div className="mainFooter-under">
        <p>
          Copyright 2014 BELLA SHOP | All Rights Reserved | Designed By Jthemes
        </p>
        <ul>
          <img src={footerImg1} alt="" />
          <img src={footerImg2} alt="" />
          <img src={footerImg3} alt="" />
          <img src={footerImg4} alt="" />
          <img src={footerImg5} alt="" />
          <img src={footerImg6} alt="" />
        </ul>
      </div>
    </div>
  );
}
