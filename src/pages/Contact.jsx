import React from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

import {IoHomeSharp} from 'react-icons/io5'
import {BsTelephoneInboundFill} from 'react-icons/bs'
import {FiMail} from 'react-icons/fi'

import "../styles/contact.scss";

const socialLinks = [
  {
    url: "#",
    icon: "ri-facebook-line",
  },
  {
    url: "#",
    icon: "ri-instagram-line",
  },
  {
    url: "#",
    icon: "ri-linkedin-line",
  },
  {
    url: "#",
    icon: "ri-twitter-line",
  },
];

const Contact = () => {
  return (
    <Helmet title="Contact">
      <CommonSection title="Contact" />
      <div className="out-contact">
        <div className="contact-main">

          <div className="contact-us">
            <h1 className="h1">CONTACT US</h1>
            <div className="contact-us-blocks1"> <span className="cub"> <IoHomeSharp/></span><div className="address">Address :<br/>987 Main st.New-York, NY, 00001, U.S.A</div></div>
            <div className="contact-us-blocks1"> <span className="cub"> <BsTelephoneInboundFill/></span> <div className="telephone">Telephone : <br />(012) 345-7689</div></div>
            <div className="contact-us-blocks1"> <span className="cub"> <FiMail/></span> <div className="mail">@gmail.com : <br/> bellashop@gmail.com</div></div>
            <p>Phasellus pellentesque purus in massa aenean in pede phasellus libero ac tellus pellentesque semper.</p>
            <div className="contact-us-blocks4">Customer Service : <br/><span>hello@bella.com</span></div>
            <div className="contact-us-blocks4">Gmail_of_creator of this site : <br/><span>Almazbekovnurgel@gmail.com</span> </div>  
          </div>

          <div className="contact-form">
            <h1 className="h1">contact form</h1>
            <input type="text" placeholder="Name" aria-required={true}/>
            <input type="email" placeholder="Email" aria-required={true}/>
            <input type="password" placeholder="Password" aria-required={true}/>
            <textarea cols="50" rows="4" placeholder="Message"></textarea>
            <button>send message</button>
          </div>

        </div>
      </div>
    </Helmet>
  );
};

export default Contact;
