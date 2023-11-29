import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCards } from "./ProjectCards";
// import projImg1 from "../assets/img/ProjectsPictureBehind.jpg";
// import projImg2 from "../assets/img/ProjectImage2.png";
// import projImg3 from "../assets/img/ProjectsPictureBehind.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import laptop from "../assets/img/laptop.jpg"
import blue2 from "../assets/img/blue2.jpg"
import blue3 from "../assets/img/exp pic.jpg";
import blue4 from "../assets/img/blue4.jpg";
import blue5 from "../assets/img/blue5.jpg";

import laptop2 from "../assets/img/laptop2.jpg"



export const Experience = () => {
  const projects = [
    { title: "Indian Institute of Science", description: " C++ Developer", imgUrl: blue3 },
    { title: "JP Morgan and Chase", description: "Project Management, Agile Developer : Virtual Internship ", imgUrl: laptop },
    { title: "Amazon ML Summer School ", description: "Core ML and DL concepts", imgUrl: blue2},
    { title: "Wiingy", description: "Technical Content Engineer ", imgUrl: blue5 },
    { title: "Seminar Room", description: "Automation, Outreach and Project Management", imgUrl: blue4},
    { title: "Centre for Data Science and Machine Learning", description: "Contributed to the Apple developers group website.", imgUrl: laptop2 },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Experiences</h2>
                  <p>
                  My Github link can be found on the top right
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => (
                            <ProjectCards key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>You can find these experiences on my LinkedIn</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                         Check out my LinkedIn
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background"></img>
    </section>
  );
};
