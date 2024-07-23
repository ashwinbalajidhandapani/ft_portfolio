import LightWave from "../Waves/LightWave";
import "./ProjectDark.css";

function Experience4() {
  return (
    <article className="project dark">
      <div className="project__main">
        <div data-aos="fade-right" className="project__left">
          <h3 className="project__title project__titleDark">PDS Vision</h3>
          <p className="project__description project__body">
          <span className="project__specialText">Software Engineer - Sconce Solution (Now PDS Vision) </span> <t /> <t /> <t />Chennai, India <br /> <br />
          - Leveraged Windchill Java API to create custom workflows that governed document lifecycle that ensured proper versioning, approval routing, and archival policies for the documents <br />
          - Implement unit tests to identify potential production/deployment issues for the custom workflows <br />
          - Supported Implementation team during production deployments to resolve issues while adhering to the Service Level Agreement <br />
          - Assisted Pre-sales team by creating Proof-of-concepts based on clients requirements <br />
          </p>
        </div>
      </div>
      <LightWave />
    </article>
  );
}

export default Experience4;
