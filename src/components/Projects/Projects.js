import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import purpull from "../../Assets/Projects/purpull.PNG";
import marriot from "../../Assets/Projects/marriot.PNG";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={purpull}
              isBlog={false}
              title="Purplle-Website-Clone"
              description="This is clone of purplle.com, where we have used HTML, CSS and Javascript to acheive this. In this project we have tried to clone the “Purplle” website. We had build up all our efforts to do our best in this project. As, the Masai School's Mentorship was specifically to build up our skills and we also accordingly implemented all that teachings in our project to look it at its best."
              link="https://github.com/Duwesh/Purplle.com_web_clone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={marriot}
              isBlog={false}
              title="Marriott_Bonvoy_clone"
              description="Marriott Bonvoy is a hotel, resort, and accommodation booking website. This was a collaborative project built by 5 members of the team and executed in 5 days.Our task was to implement our HTML, CSS, and Advanced JavaScript knowledge which we had learned at Masai. We used this skillset to build a static copy of Marriott Bonvoy along with the responsiveness of the page for different screen sizes and some user interactivity with Advanced JS."
              link="https://github.com/AmbaliyaDhruv/Marriott_Bonvoy_clone.github.io"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              link="https://github.com/soumyajit4419/Editor.io"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              link="https://github.com/soumyajit4419/Bits-0f-C0de"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              link="https://github.com/soumyajit4419/AI_For_Social_Good"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              link="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
