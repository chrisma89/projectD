import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div
      className="container-fluid d-flex footer justify-content-center"
      style={{ width: "100%", height: "6%", alignItems: "center" }}
    >
      <div style={{padding : "8px"}}>©DentalApp 2024</div>
      <div>
        <a
          style={{ color: "#23001E" }}
          target="_blank"
          href="https://github.com/chrisma89"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
      {/* <div>©Chrisma Stephen</div> */}
    </div>
  );
};

export default Footer;
