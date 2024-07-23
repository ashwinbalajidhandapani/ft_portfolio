import LightWave from "../Waves/LightWave";
import "./ProjectDark.css";

function Experience2() {
  return (
    <article className="project dark">
      <div className="project__main">
        <div data-aos="fade-right" className="project__left">
          <h3 className="project__title project__titleDark">SC Johnson</h3>
          <p className="project__description project__body">
          <span className="project__specialText">Software Engineer Security - SC Johnson </span> <t /> <t /> <t />Chennai, India <br /> <br />
          - Developed a Django-based security utility microservice that automated Rapid7 and OWSAP ZAP scans, achieving an 80% reduction in manual efforts <br />
          - Enhanced security awareness by building a React-Django-based dashboard to display application and infrastructure scan results <br />
          - Collaborated with developers to resolve security-related issues found during DAST and SAST scans <br />
          - Customized DAST and SAST configurations by performing periodic runtime assessments, and collaborating with developers, achieving a 35% reduction in false positives <br />
          - Conducted routine penetration tests on internal and external web applications that ensured compliance and data protection <br />
          - Created a POC for Passwordless authentication for a MERN application using Azure AD that was demo-ed during all-hands security townhall<br />
          </p>
        </div>
      </div>
      <LightWave />
    </article>
  );
}

export default Experience2;
