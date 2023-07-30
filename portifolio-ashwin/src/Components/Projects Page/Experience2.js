import LightWave from "../Waves/LightWave";
import "./ProjectDark.css";

function Experience2() {
  return (
    <article className="project dark">
      <div className="project__main">
        <div data-aos="fade-right" className="project__left">
          <h3 className="project__title project__titleDark">Gavs Technologies Pvt Ltd</h3>
          <p className="project__description project__body">
          <span className="project__specialText">Engineer - Gavs Technologies </span> <t /> <t /> <t />Chennai, India <br /> <br />
          - Automated Infrastructure and Application security scan using Flask by employing the TDD approach which reduced the manual intervention by almost 85 % <br />
          - Collaborated with Security Operation Centre team to develop a dashboard (Demo) showcasing key metrics to track the compliance of the Endpoints by leveraging the REST API features of the EDR <br />
          - Partnered with Development and DevOps team to build a secure application by providing Security Recommendations for applications components as per the OWASP standards for API security, recommending secure DevOps practices for branch security configuration and Application logging <br />
          - Participated in code reviews and provided better solutions whenever possible as a member of the security team and as a developer <br />
          - Integrated Static Application Security Testing and Dynamic Application Security Testing tools to the CI / CD pipeline, thereby decreasing the security vulnerabilities found by almost 60% <br />
          - Carried out VAPT on the application during each release and worked with the developers to fix the issues <br />
          - Created a POC for Passwordless authentication for a MERN application using Azure AD <br />
          - Implemented SonarQube as the Static Application Security Testing (SAST) tool for the product code base of my previous organization <br />
          - Conducted necessary configuration and setup of SonarQube to ensure optimal performance for code analysis <br />
          </p>
        </div>
      </div>
      <LightWave />
    </article>
  );
}

export default Experience2;
