import React from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";

import driveImg from './../components/Carousel/CarouselImg/slide3.png';
import OurMembers from "../components/UI/OurMembers";
import "../styles/about.css";
import { Link } from "react-router-dom";



const About = ({ mainBool }) => {
  return (
    <Helmet title="About">
      <CommonSection title="About Us" mainBool={mainBool}/>
      <AboutSection aboutClass="aboutPage" />

      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={driveImg} alt="" className="" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">
                  We Are Committed To Provide Safe Wedding Solutions
                </h2>

                <p className="section__description">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Eveniet veniam assumenda aperiam accusantium ex autem
                  perferendis repellendus nostrum delectus. Nemo et dolore est
                  tempore rem minima adipisci magni dolorum ipsam.
                </p>

                <p className="section__description">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Eveniet veniam assumenda aperiam accusantium ex autem
                  perferendis repellendus nostrum delectus. Nemo et dolore est
                  tempore rem minima adipisci magni dolorum ipsam.
                </p>

                <div className=" d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i class="ri-phone-line"></i>
                  </span>

                  <div>
                    <Link to={'/contact'}> <h6 className="section__subtitle">Need Any Help?</h6></Link>
                    <h4>+996 554 45 80 10</h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <BecomeDriverSection mainBool={ mainBool }/>


      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Our sellers</h6>
              <h2 className="section__title">Top accessories</h2>
            </Col>
            <OurMembers mainBool={mainBool}/>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default About;
