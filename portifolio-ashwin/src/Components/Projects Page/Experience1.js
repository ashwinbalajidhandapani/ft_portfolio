import { FaGithub } from "react-icons/fa";
import DarkWave from "../Waves/DarkWave";
import "./ProjectLight.css";

function Experience1({ id }) {
  return (
    <article id={id} className="project light">
      <h2 className="project__header">Experience</h2>
      <div className="project__main">
        <div data-aos="fade-left" className="project__left">
          <h3 className="project__title">Dassault Systemes North America</h3>
          <p className="project__description project__body">
            <span className="project__specialText">Software Engineering Intern - Dassault Systemes North America </span> <t /> <t /> <t />Waltham, MA <br /> <br />
            - Collaborated with Dassault Systemes' procurement team to create a proof-of-concept showcasing integration of ERP with supplier management tool by utilizing <span className="project__specialText"></span>Apache NiFi <br />
            - Developed custom <span className="project__specialText">Apache NiFi processors</span> for use cases such as authentication, ERP data cleaning during the integration <br />
            - Compared and examined the datasets of the supplier Management tool and the ERP to detect gaps in the data <br />
            - Devised a method to convert location data to latitude and longitude in the real time during the data flow which eliminated the existing manual process, thus saving about 200-man hours <br />
            - Refactored public APIs to address the data gaps from the analysis
          </p>
        </div>
      </div>
      <DarkWave />
    </article>
  );
}

export default Experience1;
