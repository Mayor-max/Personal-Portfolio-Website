import "../styles/Experience.css";

function Experience() {
  return (
    <section id="experience" className="experience">

      <div className="container">

        <h2 className="section-title">
          Experience & Education
        </h2>

        <p className="section-subtitle">
          My professional journey, academic achievements, and continuous learning.
        </p>

        <div className="timeline">

          {/* FlyRank */}

          <div className="timeline-item">

            <div className="timeline-icon">🚀</div>

            <div className="timeline-content">

              <h3>Machine Learning Engineering Intern</h3>

              <h4>FlyRank AI (Remote)</h4>

              <span className="timeline-date">
                July 2026 – Present
              </span>

              <ul>

                <li>Collaborating remotely on Machine Learning and AI projects.</li>

                <li>Applying Large Language Models (LLMs), including Claude AI.</li>

                <li>Developing intelligent AI-driven workflows.</li>

                <li>Building practical Machine Learning engineering experience.</li>

              </ul>

            </div>

          </div>

          {/* Codveda */}

          <div className="timeline-item">

            <div className="timeline-icon">📊</div>

            <div className="timeline-content">

              <h3>Data Science Intern</h3>

              <h4>Codveda Technologies (Remote)</h4>

              <span className="timeline-date">
                July 2026
              </span>

              <ul>

                <li>Developed Python-based Data Science solutions.</li>

                <li>Built Web Scraping pipelines using BeautifulSoup.</li>

                <li>Performed Time Series Forecasting using ARIMA.</li>

                <li>Developed Natural Language Processing pipelines.</li>

                <li>Applied Machine Learning algorithms for predictive analysis.</li>

              </ul>

            </div>

          </div>

          {/* Education */}

          <div className="timeline-item">

            <div className="timeline-icon">🎓</div>

            <div className="timeline-content">

              <h3>University of Ibadan</h3>

              <h4>
                M.Ed.Sc. Exercise Physiology
              </h4>

              <span className="timeline-date">
                April 2025 – Expected October 2026
              </span>

              <br /><br />

              <h4>
                B.Ed. Health Education
              </h4>

              <span className="timeline-date">
                2016 – 2021
              </span>

              <p className="honours">
                🏅 First Class Honours
              </p>

            </div>

          </div>

          {/* Certifications */}

          <div className="timeline-item">

            <div className="timeline-icon">📜</div>

            <div className="timeline-content">

              <h3>Professional Certifications</h3>

              <ul>

                <li>IBM (Digital Badge) — AI Literacy</li>

                <li>IBM — Data Literacy</li>

                <li>FlyRank AI + Claude — AI Fluency</li>

                <li>Africa AI Hub — Artificial Intelligence</li>

                <li>GCI World (Matsuo Lab, Japan) — AI and Data Science</li>

              </ul>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Experience;