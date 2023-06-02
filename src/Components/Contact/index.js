import Header from "../Header";
import { AiOutlineGithub } from "react-icons/ai";
import { IoMdContact, IoLogoLinkedin } from "react-icons/io";
import { SiGmail } from "react-icons/si";
import "./index.css";

const Contact = () => {
  return (
    <>
      <div className="contact-main-container ">
        <Header />
        <div className="contact-sub-container">
          <h1 className="heading">Find Me In</h1>
          <div>
            <div className="icon-container">
              <IoMdContact className="icon" />
              {/* Edit your  Contact*/}
              <p className="name-icon">+91 939-806-2171</p>
            </div>
            <div className="icon-container">
              <SiGmail className="icon" />
              {/* Edit your  Gmail*/}
              <p className="name-icon">bhanuprakash@gmail.com</p>
            </div>
            <div>
              {/* Edit your linkedin url on src*/}
              <a
                href="https://www.linkedin.com/in/pujala-bhanuprakash"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-container"
              >
                <IoLogoLinkedin className="icon" />
                <p className="name-icon">Linkedin</p>
              </a>
            </div>
            <div>
              {/* Edit your github url on src*/}
              <a
                href="https://github.com/Bhanuprakashpujala"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-container"
              >
                <AiOutlineGithub className="icon" />
                <p className="name-icon">Github</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
