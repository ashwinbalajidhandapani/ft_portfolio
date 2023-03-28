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
            - Collaborated with Business Analysts and Developers to understand the new feature to create a comprehensive Test Design Document, performed thorough Testing following the steps in the Test Design document and reported the issues to the development team <br />
            - Identified testing stories/components that can be automated and Developed Selenium scripts for the same, this reduced the manual effort by 80% during regression
          </p>
        </div>
      </div>
      <DarkWave />
    </article>
  );
}

export default Experience3;
