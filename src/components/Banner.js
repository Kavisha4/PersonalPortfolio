import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../assets/img/header-img.svg';
import { useState, useEffect } from 'react';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ['Web Developer', 'Tech Enthusiast', 'Technical Writer'];
  const [text, setText] = useState('');
  const period = 2000;
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text, delta]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? text.substring(0, text.length - 1)
      : text + fullText[text.length];
  
    setText(updatedText);
  
    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
  
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum((prevLoopNum) => prevLoopNum + 1);
      setDelta(500);
    }
  };
  
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline"> Welcome to my portfolio</span>
            <h1>
              {'Hi, I am Kavisha Mathur '}
              <span className="wrap">{text}</span>
            </h1>
            <p>
              Aspiring software engineer looking for an opportunity to utilize
              my skills. Natural leader able to manage projects, delegate tasks,
              and motivate teams. Currently working on a Capstone at the Cloud
              Computing and Big Data Department at PES
            </p>
            <button onClick={() => console.log('connect')}>
              Lets Connect <ArrowRightCircle />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="header image" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
