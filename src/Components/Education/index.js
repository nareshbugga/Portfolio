import Header from "../Header";
import "./index.css";

const Education = () => {
  return (
    <>
      <div className="education-main-container">
        <Header />
        <div className="education-sub-container">
          {/* Edit your Related image url on src */}
          <img
            src="https://i.gifer.com/Gyq.gif"
            alt="graduation"
            className="graduation-image "
          />
          <div className="education-container">
            <div className="education-link-1">
              {/* Edit your High education qualification*/}
              <h1 className="name">A.V.College. Osmania-University , HYD</h1>
              <p className="group">
                B.SC in Statistics ( 8.77 CGPA )
                <span className="year-of-pass">2019-2022</span>
              </p>
            </div>
            <div className="education-link-2">
              {/* Edit your Intermediate Details*/}
              <h1 className="name">Gowthami Junior College , NKP</h1>
              <p className="group">
                Intermediate ( 90.3 % )
                <span className="year-of-pass">2017 - 2019</span>
              </p>
            </div>
            <div className="education-link-3">
              {/* Edit your High school Details Details*/}
              <h1 className="name">Government - High School , NKP</h1>
              <p className="group">
                Matriculation ( 8.3 CGPA )
                <span className="year-of-pass">2016 - 2017</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
