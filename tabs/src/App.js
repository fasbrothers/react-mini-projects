import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setLoading(false);
  };
  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <section className="section loading">
        <h1>Loading ...</h1>{" "}
      </section>
    );
  }
  const { company, duties, dates, title } = jobs[value];
  return (
    <section className="section">
      <div className="title">
        <h2>Experiences</h2>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          {jobs.map((item, index) => {
            return (
              <button
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && "active-btn"}`}
                key={item.id}
              >
                {item.company}
              </button>
            );
          })}
        </div>
        <article className="job-info">
        <h3>{title}</h3>
        <h4>{company}</h4>
        <p className="job-dates">{dates}</p>
        {duties.map((duty, index) => {
          return (
            <div key={index} className="job-desc">
              <FaAngleDoubleRight className="date-icon"></FaAngleDoubleRight>
              <p>{duty}</p>
            </div>
          );
        })}
      </article>
      </div>
    </section>
  );
}

export default App;
