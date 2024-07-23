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
            - Architected <span className="project__specialText"> an integration service and the on-premises Apache Nifi agent </span> to extract and stream data from Oracle PeopleSoft to 3DExperience platform<br />
            - Optimized Nifi data flow to handle supplier data by making use of <span className="project__specialText">Apache NiFi's Custom and in-built processors</span> <br />
            - Built Spring Boot backend microservice that performed CRUD actions on supplier data <br />
            - Implemented geospatial visualization of Supplier data using Javascript and jQuery, thereby aiding customers to accelerate strategic sourcing decisions<br />
            - Reduced boilerplate code by 40% by implementing Test-driven development, design patterns and other development best practices
            - Analysed Apache Nifi logs to optimize agent performance and determine the minimum system requirements
          </p>
        </div>
      </div>
      <DarkWave />
    </article>
  );
}

export default Experience1;
