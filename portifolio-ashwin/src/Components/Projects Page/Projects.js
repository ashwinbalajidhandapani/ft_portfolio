import Project1 from "./Project1";
import Project2 from "./Project2";
import Project3 from "./Project3";
import Project4 from "./Project4";
import Skills from "./Skills";
import Experience1 from "./Experience1";
import Experience2 from "./Experience2";
import Experience3 from "./Experience3";
import Experience4 from "./Experience4";
import Experience5 from "./Experience5";
import Project5 from "./Project5";


function Projects() {
  return (
    <section className="projects">
      <Project1 id="project1" />
      <Project2 />
      <Project3 />
      <Project4 />
      <Project5 />
      <Experience1 />
      <Experience2 />
      <Experience3 />
      <Experience4 />
      <Experience5 />
      <Skills/>
    </section>
  );
}

export default Projects;
