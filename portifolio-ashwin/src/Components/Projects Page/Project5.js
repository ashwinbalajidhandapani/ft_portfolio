import { FaGithub } from "react-icons/fa";
import DarkWave from "../Waves/DarkWave";
import "./ProjectLight.css";

function Project5({ id }) {
  return (
    <article id={id} className="project light">
      <div className="project__main">
        <div data-aos="fade-left" className="project__right">
          <h3 className="project__title">IntelliAid</h3>
          <p className="project__description project__body">
            The <span className="project__specialText">PartyApp</span> project
            Built a {" "} <span className="project__specialText">Full-stack Chat-bot application </span>
            {" "} that let users chat with AI personas created using OpenLLaMA, serving various needs
            such as aiding elderly, entertainment, etc.{" "}
          </p>
          <p className="project__tech project__body">
            &gt; Spring Boot · OpenLLaMA · React · MongoDB
          </p>
          <a
            className="project__sourceCode"
            href="https://github.com/ashwinbalajidhandapani/IntelliAid.git"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="=IntelliAid - Repo"
          >
            <FaGithub className="project__githubLogo" size={25} />
            <h3 className="project__sourceCodeText">Source Code</h3>
          </a>
        </div>
      </div>
      <DarkWave />
    </article>
  );
}

export default Project5;
