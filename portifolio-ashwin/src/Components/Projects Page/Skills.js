import DarkWave from "../Waves/DarkWave";
import "./ProjectLight.css";

function Skills({ id }) {
  return (
    <article id={id} className="project dark">
      <h2 className="project__header">Skills</h2>
      <div className="project__main">
        <div data-aos="fade-left" className="project__right">
          <p className="project__description project__body">
            <span className="project__specialText">Programming Languages: </span> Java, Python, Javascript, HTML, CSS, TypeScript <br/>
            <span className="project__specialText">Backend: </span> Spring, Node.js, Flask, Hibernate, Django <br/>
            <span className="project__specialText">Frontend: </span> React.js, jQuery, Java Server Pages, SCSS, Bootstrap, Material-UI <br/>
            <span className="project__specialText">Tools: </span> Git, AWS, GCP, Postman, MS Office <br/>
            <span className="project__specialText">Cloud: </span> Cloudformation, AWS CLI, AWS SDK, IAM, CloudWatch, Route53, RDS, DynamoDB, VPC, S3, SNS, SES, SQS, CodeDeploy, Lambda <br/>
            <span className="project__specialText">CI / CD Tools: </span> GitHub Actions, Azure Pipelines <br/>
            <span className="project__specialText">Devops: </span> Terraform, Ansible, Jenkins <br/>
            <span className="project__specialText">Others: </span> RESTful API, Pytest, Junit, Chai.js, Penetration Testing, jasmine.js, Apache NiFi, Docker, Kubernetes <br/>
          </p>
        </div>
      </div>
      <DarkWave />
    </article>
  );
}

export default Skills;
