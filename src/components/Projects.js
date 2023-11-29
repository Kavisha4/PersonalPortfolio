import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCards } from "./ProjectCards";
import projImg1 from "../assets/img/ProjectsPictureBehind.jpg";
import projImg2 from "../assets/img/ProjectImage2.png";
import projImg3 from "../assets/img/ProjectsPictureBehind.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    { title: "Recommender System for Creative Professionals", description: "Used AI/ML, Flask and HTML CSS for website", imgUrl: projImg1 },
    { title: "KYC using Blockchain", description: "Using IPFS, Ganache, NodeJS to implement", imgUrl: projImg2 },
    { title: "Detection of Dyslexia", description: "Data analytics project to identify if a person has dyslexia", imgUrl: projImg1 },
    { title: "VideoStreaming Website", description: "HTML, CSS and JS", imgUrl: projImg2 },
    { title: "Kayak", description: "Satellite image processing, neural networks and data science, for sustainable development", imgUrl: projImg1 },
    { title: "Apple Developer Groups Website", description: "Contributed to the Apple developers group website.", imgUrl: projImg2 },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book.
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
                        <p>You can find these projects along with their source code on my Github</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident
                          velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores
                          delectus quasi inventore debitis quo.
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
