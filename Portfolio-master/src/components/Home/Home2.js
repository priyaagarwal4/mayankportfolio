import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaCar, FaLinkedinIn, FaTruck } from "react-icons/fa";
import { ImBooks } from "react-icons/im";
import { GiClothes } from "react-icons/gi";
import Porter from "../../Assets/porter-logo.png";
import UpGrad from "../../Assets/upgrad-logo.png";
import GoComet from "../../Assets/Gocomet-logo (1).png";
import Caastle from "../../Assets/Caastle-logo.png";
import Bits from "../../Assets/Bits-logo.png";
import Rtu from "../../Assets/Rtu-logo.jpg";



function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <h2 className="home-about-description">Previous Companies</h2>
        </Row>
        <Row>
          <Col md={3}>
          <a href="https://porter.in/" target="_blank">
            <img
                src={Porter}
                alt="home pic"
                className="img-fluid"
                style={{ height: "100px", width: "250px" }}
              />
            </a>
          </Col>
          <Col md={3}>
          <a href="https://www.upgrad.com/" target="_blank">
            <img
                src={UpGrad}
                alt="home pic"
                className="img-fluid"
                style={{ height: "100px", width: "250px" }}
              />
            </a>
          </Col>
          <Col md={3}>
          <a href="https://www.gocomet.com/" target="_blank">
            <img
                src={GoComet}
                alt="home pic"
                className="img-fluid"
                style={{ height: "100px", width: "250px" }}
              />
            </a>
          </Col>
          <Col md={3}>
          <a href="https://www.caastle.com/" target="_blank">
            <img
                src={Caastle}
                alt="home pic"
                className="img-fluid"
                style={{ height: "100px", width: "250px" }}
              />
            </a>
          </Col>
        </Row>
        <Row>
          <Col md={4} className="home-about-description">
            <h2 style={{ fontSize: "2em" }}>
              What I do
            </h2>
            <p className="home-about-body">
            Crafting the perfect user experience is my top priority. But I also do these as well.
            </p>
            <ul style = {{textAlign: 'left'}}>
              <li>Scale Products</li>
              <li>Web and Mobile App development</li>
              <li>Build Amazing Teams</li>
            </ul>
          </Col>
          <Col md={4} className="home-about-description">
            <h2 style={{ fontSize: "2em" }}>
              What I use
            </h2>
            <p className="home-about-body">
            Every Product Manager needs the right tools to effectively manage and develop products.
            </p>
            <ul style = {{textAlign: 'left'}}>
              <li>JIRA</li>
              <li>Figma</li>
              <li>TestRail</li>
            </ul>
          </Col>
          <Col md={4} className="home-about-description">
            <h2 style={{ fontSize: "2em" }}>
              What you can expect
            </h2>
            <p className="home-about-body">
            I create products that are more than shiny. I make them shippable, usable, and scale.
            </p>
            <ul style = {{textAlign: 'left'}} >
              <li>Data-Driven</li>
              <li>Customer Centric</li>
              <li>Agile</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="home-about-description">
            <h1 style={{ textAlign: "left" }}>Education</h1>
            <Row style={{ justifyContent: "center", paddingBottom: "20px", paddingTop: "20px" }}>
              <Col md={4}>
              <img
                src={Bits}
                alt="home pic"
                className="img-fluid"
                style={{ height: "100px", width: "120px" }}
              />
              </Col>
              <Col md={8} style={{ textAlign: "left" }}>
                <h4>BITS, Pilani</h4>
                <h5>ME: Embedded Systems</h5>
                <h6>2013 - 2015</h6>
              </Col>
            </Row>
            <Row style={{ justifyContent: "center", paddingBottom: "20px", paddingTop: "20px" }}>
              <Col md={4}>
              <img
                src={Rtu}
                alt="home pic"
                className="img-fluid"
                style={{ height: "100px", width: "120px" }}
              />
              </Col>
              <Col md={8} style={{ textAlign: "left" }}>
                <h4>Rajasthan Technical University</h4>
                <h5>B.tech: Computer Science</h5>
                <h6>2009 - 2012</h6>
              </Col>
            </Row>
          </Col>
          <Col md={6} className="home-about-description">
            <h1 style={{ textAlign: "left" }}>Work Experience</h1>
            <Row style={{ justifyContent: "center", paddingBottom: "20px", paddingTop: "20px" }}>
            <Col md={3}>
              <FaCar/>
            </Col>
              <Col md={9} style={{ textAlign: "left" }}>
                <h4>Porter</h4>
                <h5>Senior Product Manager</h5>
                <h6>Oct 2021 - Oct 2022</h6>
              </Col>
          </Row>
          <Row style={{ justifyContent: "center", paddingBottom: "20px", paddingTop: "20px" }}>
            <Col md={3}>
              <ImBooks/>
            </Col>
              <Col md={9} style={{ textAlign: "left" }}>
                <h4>UpGrad</h4>
                <h5>Senior Product Manager</h5>
                <h6>Dec 2019 - Jul 2021</h6>
              </Col>
          </Row>
          <Row style={{ justifyContent: "center", paddingBottom: "20px", paddingTop: "20px" }}>
            <Col md={3}>
              <FaTruck/>
            </Col>
              <Col md={9} style={{ textAlign: "left" }}>
                <h4>GoComet</h4>
                <h5>Product Manager</h5>
                <h6>Mar 2019 - Sep 2019</h6>
              </Col>
          </Row>
          <Row style={{ justifyContent: "center", paddingBottom: "20px", paddingTop: "20px" }}>
            <Col md={3}>
              <GiClothes/>
            </Col>
              <Col md={9} style={{ textAlign: "left" }}>
                <h4>Caastle</h4>
                <h5>Data Products</h5>
                <h6>Jun 2017 - Mar 2019</h6>
              </Col>
          </Row>
          </Col>
          

        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Want to make awesome products?</h1>
            <h1>Let's get in touch</h1>
            
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href=" "
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mayankplus/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
