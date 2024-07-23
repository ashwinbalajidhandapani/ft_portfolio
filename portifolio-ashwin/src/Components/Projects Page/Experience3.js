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
            - Designed and implemented reactive user interfaces using Angular contributing 15% more user engagement due to enhanced user experience and interface responsiveness <br />
            - Developed and maintained backend features using Spring boot utilizing JPA, Hibernate etc. maintaining coding best practices <br />
            - Resolved backend and frontend issues using Java and Javascript based on severity during production deployments <br />
            - Maintained and developed unit tests using Junit and TestNG bolstering build stability and bringing down defect leakage <br />
          </p>
        </div>
      </div>
      <DarkWave />
    </article>
  );
}

export default Experience3;
