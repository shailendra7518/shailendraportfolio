import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple">HTML , CSS and Javascript. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">
                  Web Development using ,HTML,CSS,Javascript and  Modern Javascript Library and Frameworks, React.js,
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for 
               <b className="purple">Learning data structures and algorithms allow us to write efficient and optimized computer programs.</b>
              {/* <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js</b>
              </i> */}
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src="https://www.linkpicture.com/q/imageedit_6_3524025317.png" className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
    
    
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              ABOUT MY <span className="purple">EDUCATION </span>
            </h1>
            <h2 className="home-about-body">
         
            <i>
              <b className="purple">Intermediate</b>&nbsp;
              June 2015 - Sept 2017
              </i>
              <br />
               Board of High School and Intermediate Education Uttar Pradesh
              <br />
              <br />I complete my Intermediate with first devision with subject
              <i>
                <b className="purple">English, Geography,Economics,Social Science,Hindi</b>
              </i>
              <br />
              <br />

              <i>
              <b className="purple">Graduation BA</b>&nbsp;
              Sept 2017 - Sept 2020
              </i>
              <br />
              Chhatrapati Shahu Ji Maharaj University ,Kanpur
              <br />
              <br />I complete my Graduation BA with bachelor of Art in 
              <i>
                <b className="purple">English literature, Geography,Hindi</b>
              </i>
              <br />
              <br />

              and recently i joined Masai School 30 week full stack web Development programme
           
            </h2>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src="https://cdn.dribbble.com/users/1233499/screenshots/3900568/education.gif" className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
       
          </Row>





        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/shailendra7518"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/ShailendraUP71"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/shailendra-kumar-maurya/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
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
