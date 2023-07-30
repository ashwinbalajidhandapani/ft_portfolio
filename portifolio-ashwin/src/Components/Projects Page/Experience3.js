import { FaGithub } from "react-icons/fa";
import DarkWave from "../Waves/DarkWave";
import "./ProjectLight.css";

function Experience3({ id }) {
  return (
    <article id={id} className="project light">
      <div className="project__main">
        <div data-aos="fade-left" className="project__left">
          <h3 className="project__title">Accenture Solutions Pvt Ltd</h3>
          <p className="project__description project__body">
            <span className="project__specialText">Application Development Associate - Accenture Solutions Pvt Ltd</span> Chennai, India <br /> <br />
            - Built RESTful web services and utilized Spring Boot, JAX-RS, JDBC, and the JSP Standard tag library to display paginated 100K insurance records retrieved from a MySQL database <br />
            - Created comprehensive unit test cases using JUnit to validate the functionalities
          </p>
        </div>
      </div>
      <DarkWave />
    </article>
  );
}

export default Experience3;
