import { Link } from "react-router-dom";
import "./ResumeButton.css";

function ResumeButton() {
  return (
    <Link
      className="navItem resumeButton"
      to="/Resume_Dhandapani_Ashwin.pdf"
      target="_blank"
    >
      <h3>Download Resume</h3>
    </Link>
  );
}

export default ResumeButton;
