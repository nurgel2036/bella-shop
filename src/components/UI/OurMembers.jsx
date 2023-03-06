import React from "react";
import "../../styles/our-member.css";
import { Col } from "reactstrap";
import ava01 from "../../components/shortBreak/productimg/product1.jpg";
import ava02 from '../../components/shortBreak/productimg/product3.jpg';
import ava04 from '../../components/shortBreak/productimg/product2.jpg'
import ava03 from '../../components/shortBreak/productimg/product4.jpg';

import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {FaTiktok} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'

const OUR__MEMBERS = [
  {
    name: "Jhon Doe",
    experience: "12 years of experience",
    fbUrl: "https://www.instagram.com/itpark_osh/",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava01,
  },

  {
    name: "David Lisa",
    experience: "11 month of experience",
    fbUrl: "https://www.instagram.com/itpark_osh/",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava02,
  },

  {
    name: "Hilton Tom",
    experience: "5 years of experience",
    fbUrl: "https://www.instagram.com/itpark_osh/",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava03,
  },

  {
    name: "Jhon Doe",
    experience: "2 years of experience",
    fbUrl: "https://www.instagram.com/itpark_osh/",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava04,
  },
];

const OurMembers = ({ mainBool }) => {
  return (
    <>
      {OUR__MEMBERS.map((item, index) => (
        <Col lg="3" md="3" sm="4" xs="6" key={index} className="mb-4">
          <div className="single__member">
            <div className="single__member-img">
              <img src={item.imgUrl} alt="" className="w-100" />

              <div className={`${mainBool} single__member-social`}>
                <a target='_blank' rel="noreferrer"  href={item.fbUrl}>
                  <BsFacebook/>
                </a>
                <a target='_blank'rel="noreferrer"   href={item.twitUrl}>
                  <BsInstagram/>
                </a>

                <a target='_blank' rel="noreferrer"  href={item.aedinUrl}>
                  <FaTiktok/>
                </a>

                <a target='_blank' rel="noreferrer"  href={item.instUrl}>
                  <BsWhatsapp/>
                </a>
              </div>
            </div>

            <h6 className="text-center mb-0 mt-3">{item.name}</h6>
            <p className="section__description text-center">
              {item.experience}
            </p>
          </div>
        </Col>
      ))}
    </>
  );
};

export default OurMembers;
