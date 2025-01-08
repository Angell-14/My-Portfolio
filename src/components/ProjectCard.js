import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, kaggleLink, GithubLink }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          
          {/* Project Links */}
          <div className="project-links">
            {/* If Kaggle link exists, render it */}
            {kaggleLink && (
              <a href={kaggleLink} target="_blank" rel="noopener noreferrer" className="arrow-button">
                View on Kaggle
              </a>
            )}
            
            {/* If GitHub link exists, render it */}
            {GithubLink && (
              <a href={GithubLink} target="_blank" rel="noopener noreferrer" className="arrow-button">
                View on GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </Col>
  );
};
