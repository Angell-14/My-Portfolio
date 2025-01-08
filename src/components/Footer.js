import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer id="connect" className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            {/* Add any additional content here, like a heading */}
            <h2 className="text-white">Connect with me</h2>
            <p>Email: angel.cn1403@gmail.com</p>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/angel1411/"><img src={navIcon1} alt="LinkedIn" /></a>
              <a href="https://www.kaggle.com/angelchaudhary"><img src={navIcon2} alt="Kaggle" /></a>
              <a href="https://github.com/Angell-14"><img src={navIcon3} alt="GitHub" /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
