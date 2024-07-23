import { FaGithub } from "react-icons/fa";
import DarkWave from "../Waves/DarkWave";
import "./ProjectLight.css";

function Experience5({ id }) {
  return (
    <article id={id} className="project light">
      <div className="project__main">
        <div data-aos="fade-left" className="project__left">
          <h3 className="project__title">Northeastern University</h3>
          <p className="project__description project__body">
            <span className="project__specialText">Graduate Teaching Assistant (Java Design Patterns) - Northeastern University</span> Boston, MA <br /> <br />
            - Served as Graduate Teaching Assistant for the course CSYE7374 (by Prof. Daniel Peters) assisting in delivery of lectures, conducting labs, conducting office hours and grading from May 2023 to Dec 2023 <br />
          </p>
        </div>
      </div>
      <DarkWave />
    </article>
  );
}

export default Experience5;
