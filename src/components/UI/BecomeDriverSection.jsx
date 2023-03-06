import React from "react";
import "../../styles/become-driver.css";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";


const BecomeDriverSection = ({ mainBool }) => {
  return (
    <section className={`${mainBool} become__driver common__section`}>
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12" className="become__driver__content">
            <h2 className="section__title become__driver-title">
              Do You Want to Earn With Us? So Don't Be Late
            </h2>

            <Link to>
              {" "}
              <button className={`btn become__driver-btn mt-4 mainBool ${mainBool} span-sale`}>
                Become a Driver
              </button>
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BecomeDriverSection;
