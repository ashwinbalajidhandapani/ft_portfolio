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
            - Collaborated with Dassault Systemes' procurement team to integrate 3DSupplyNetwork with Oracle PeopleSoft, saving 500 - 2000 man-hours and ensuring consistent supplier data across both platforms<br />
            - Developed custom <span className="project__specialText">Apache NiFi processors</span> to address various use cases, including authentication, data creation, updating, deletion, and data cleaning which resulted in a loosely coupled middleware system, enhancing reusability and flexibility <br />
            - Compared and examined the datasets of the supplier Management tool and the ERP to detect gaps in the data between both the systems <br />
            - Performed an in-depth analysis of data usage and transit to facilitate the integration of systems and to and determine the system requirements for a CentOS virtual machine where the Nifi instance was to be deployed<br />
            - Devised a method to convert location data to latitude and longitude in the real time during the data flow which eliminated the existing manual process, thus saving about 200-man hours <br />
          </p>
        </div>
      </div>
      <DarkWave />
    </article>
  );
}

export default Experience1;
