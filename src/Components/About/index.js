import Header from "../Header";
import { AiOutlineGithub } from "react-icons/ai";
import { IoMdContact, IoLogoLinkedin } from "react-icons/io";
import { SiGmail } from "react-icons/si";
import "./index.css";

const Home = () => {
  return (
    <>
      <div className="home-main-container">
        <Header />
        <div className="home-sub-container">
          <div className="home-container">
            {/* Edit your  Image on src url*/}
            <div>
              <img
                src="https://res.cloudinary.com/dqrp5aeqy/image/upload/v1685350601/IMG-20230527-WA0004_dapntb.jpg"
                alt="bhanu"
                className="image-1"
              />
            </div>
            <div className="data-container">
              <h1 className="hello">
                Hello It's <span className="span">Me</span>
              </h1>
              {/* Edit your name */}
              <p className="user-name">BhanuPrakash Pujala</p>
              {/* Edit your role */}
              <p className="role">I'm Data Analyst</p>
              {/* Edit your brief line about you */}
              <p className="description">
                To work for an organization where I could willingly obtain a
                position that will allow me to utilize my data analytical skills
                and knowledge to grow along with the organization objective. I
                am a quick learner with full passion towards learning and
                developing my capabilities and also competent for working in a
                team and individually as well.
              </p>
              <h1 className="heading">Find Me In</h1>
              <div className="social-media-container">
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
            {/* Edit your  Image on src url*/}
            <div>
              <img
                src="https://res.cloudinary.com/dqrp5aeqy/image/upload/v1685350601/IMG-20230527-WA0004_dapntb.jpg"
                alt="bhanu"
                className="image-2"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
