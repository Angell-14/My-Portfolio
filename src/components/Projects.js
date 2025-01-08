import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/img1.jpg";
import projImg2 from "../assets/img/img2.jpg";
import projImg3 from "../assets/img/img3.jpg";
import projImg4 from "../assets/img/img4.jpeg";
import projImg5 from "../assets/img/img5.jpeg";
import projImg6 from "../assets/img/img66.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "House Price Prediction Model",
      description: "The House Price Prediction Model leverages multiple machine learning algorithms to predict property prices based on various features such as location, size, and amenities. By combining the strengths of several models, it delivers accurate and robust predictions.",
      imgUrl: projImg1,
      kaggleLink: "https://www.kaggle.com/models/angelchaudhary/house-price-prediction-model"
    },
    {
      title: "Image Classification Model",
      description: "The Image Classification Model uses Convolutional Neural Networks (CNN) to analyze and classify images into predefined categories. By training on large datasets, it effectively identifies patterns and features, providing accurate classifications based on the input images.",
      imgUrl: projImg2,
      GithubLink: "https://github.com/Angell-14/Image-Classifier"
    },
    {
      title: "Disease Prediction Model",
      description: "The Symptoms-Based Disease Prediction Model utilizes linear regression to predict the disease based on the symptoms provided. By analyzing the relationship between symptoms and disease outcomes.",
      imgUrl: projImg3,
      kaggleLink: "https://www.kaggle.com/models/angelchaudhary/symptoms-based-disease-prediction-model"
    },
    {
      title: "Shopping Website Design",
      description: "The Shopping Website Design, created in Figma, features a user-friendly interface with intuitive navigation, sleek visuals, and responsive layouts. It enhances the shopping experience by focusing on seamless product discovery, and an aesthetically pleasing design, ensuring a smooth and engaging user journey.",
      imgUrl: projImg4,
    },
    {
      title: "Diabetic Disease Prediction Model",
      description: "The Diabetic Disease Prediction Model uses machine learning to predict the likelihood of an individual developing diabetes based on various health factors such as age, BMI, and glucose levels.",
      imgUrl: projImg5,
      GithubLink: "https://github.com/Angell-14/Diabetes-Prediction-Model"
    },
    {
      title: "Analysis on State-wise corporate Tax",
      description: "The Analysis on State-wise Corporate Tax explores the variations in corporate tax rates and their impact across different states.",
      imgUrl: projImg6,
      kaggleLink: "https://www.kaggle.com/code/angelchaudhary/analysis-on-state-wise-corporate-tax"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Dive into a collection of diverse and impactful projects that showcase creativity, technical expertise, and a drive to solve real-world challenges. From designing intuitive user experiences to building data-driven predictive models, each project tells a unique story of exploration and problem-solving.</p>
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
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
