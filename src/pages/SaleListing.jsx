import React from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

import ShortBreak from "../components/shortBreak/ShortBreak";






const SaleListing = ({ mainBool }) => {
  const shortBreak = "shortBreak-bgImg";
const shortBreak2 = "shortBreak-bgImg2";
const shortBreak3 = "shortBreak-bgImg3";
const shortBreak4 = "shortBreak-bgImg4";
  return (
    <Helmet title="Sale">
      <CommonSection title="Sale Listing" mainBool={mainBool}/>

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className=" d-flex align-items-center gap-3 mb-5">
                <span className=" d-flex align-items-center gap-2">
                  <i class="ri-sort-asc"></i> Sort By
                </span>

                <select>
                  <option>Select</option>
                  <option value="low">Low to High</option>
                  <option value="high">High to Low</option>
                </select>
              </div>
            </Col>

            <div className="outShortBreak ">
              <div className="shortBreakMain">
                <ShortBreak shortBreak={shortBreak} mainBool={mainBool}></ShortBreak>
                <ShortBreak shortBreak={shortBreak2} mainBool={mainBool}></ShortBreak>
                <ShortBreak shortBreak={shortBreak3} mainBool={mainBool}></ShortBreak>
                <ShortBreak shortBreak={shortBreak4} mainBool={mainBool}></ShortBreak>
              </div>
            </div>

          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default SaleListing;
