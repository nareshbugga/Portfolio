import Header from "../Header";
import "./index.css";

const Skills = () => {
  return (
    <>
      <div className="skills-main-container">
        <Header />
        <div className="skill-container">
          <div className="skill-sub-container">
            <div>
              {/* Edit your Project-1 name*/}
              <h1 className="skill-heading">Cricket Player's Analysis (FDA)</h1>
              {/* Edit your Project-1 Brief Details*/}
              <p className="skill-description">
                Collected the data from ESPNcricinfo using web scraping
                techniques and tools like Python and its libraries, Performed
                EDA and Descriptive statistics to analyze the best player
                Team-wise and player-wise.
              </p>
              {/* Edit your Project-1 url on href*/}
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                Visit Project Link
              </a>
            </div>
            {/* Edit your Project-1 image url on src*/}
            <div>
              <img
                src="https://res.cloudinary.com/dqrp5aeqy/image/upload/v1685682909/Cricket_alkjv7.gif"
                alt="Exploratory Data Analysis"
                className="data-image"
              />
            </div>
          </div>
          <div className="skill-sub-container">
            <div>
              {/* Edit your Project-2 name*/}
              <h1 className="skill-heading">Music store Data Analysis (SQL)</h1>
              {/* Edit your Project-2 Brief Details*/}
              <p className="skill-description">
                Used constraints to create table for database designed for a
                music store, Analyzed data-based on the clients requirements by
                writing the queries to get required output, Used functions like
                group by, joins, window functions to solve the queries.
              </p>
              {/* Edit your Project-2 url on href*/}
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                Visit Project Link
              </a>
            </div>
            {/* Edit your Project-2 image url on src*/}
            <div>
              <img
                src="https://res.cloudinary.com/dqrp5aeqy/image/upload/v1685683240/Spotify_TA_qjtawx.gif"
                alt="Exploratory Data Analysis"
                className="data-image"
              />
            </div>
          </div>
          <div className="skill-sub-container">
            <div>
              {/* Edit your Project-3 name*/}
              <h1 className="skill-heading">
                Zomato Delivery analysis (Tableau)
              </h1>
              {/* Edit your Project-3 Brief Details*/}
              <p className="skill-description">
                Created dashboard for Zomato Delivery analysis.
              </p>
              {/* Edit your Project-3 url on href*/}
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                Visit Project Link
              </a>
            </div>
            {/* Edit your Project-3 image url on src*/}
            <div>
              <img
                src="https://res.cloudinary.com/dqrp5aeqy/image/upload/v1685683241/Zomato_Delivery_analysis_gjtmoi.gif"
                alt="Exploratory Data Analysis"
                className="data-image"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
