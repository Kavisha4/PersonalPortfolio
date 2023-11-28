import { Container, Row, Col,Tab} from "react-bootstrap";

export const Projects =()=>{
    const projects=[
      {title:"Recommender System for Creative Professionals",
    description:"Used AI/ML, Flask and HTML CSS for website",
     imgUrl:projImg1,}  ,
     {title:"KYC using Blockchain",
    description:"Using IPFS,Ganache, NodeJS to implement",
     imgUrl:projImg1,}  ,
     {title:"Detection of Dyslexia",
    description:"Data analytics project to identify if a person has dyslexia ",
     imgUrl:projImg1,}  ,
     {title:"VideoStreaming Website",
    description:"HTML,CSS and JS",
     imgUrl:projImg2,}  ,
     {title:"Kayak",
    description:"Satellite image processing, neural networks and data science, for sustainable development",
     imgUrl:projImg3,}  ,
     {title:"Apple Developer Groups Website",
     description:"Contributed to the Apple developers group website.",
      imgUrl:projImg4,}  ,


    ];
    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                    <h2>Projects</h2>
                    <p> These are the projects I have worked on</p>
                    <Tab.Container id="project-tabs" defaultActiveKey="first">
      
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">Tab 1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Tab 2</Nav.Link>
            </Nav.Item>
          </Nav>
        </Tab.Container>
            <Tab.Content>
            <Tab.Pane eventKey="first">First tab content</Tab.Pane>
            <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
            <Tab.Pane eventKey="third">Third tab content</Tab.Pane>

            
          </Tab.Content>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}