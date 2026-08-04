import "../styles/Projects.css";
import aiDetection from "../assets/images/projects/ai-detection.png";
import forecasting from "../assets/images/projects/forecasting.png";
import nlp from "../assets/images/projects/nlp.png";

function Projects() {
  return (
    <section id="projects" className="projects">

      <div className="container">

        <h2 className="section-title">
          Featured Projects
        </h2>

        <p className="section-subtitle">
          Selected projects demonstrating my experience in Data Science, Machine Learning, and Artificial Intelligence.
        </p>

        <div className="projects-grid">

          {/* Project 1 */}

          <div className="project-card">

          <div className="featured-badge">
              ⭐ Featured Project
          </div>

            <div className="project-image">
              <img
                src={aiDetection}
                alt="Machine Learning-Based AI Text Detection"
              />
            </div>

            <div className="project-content">

              <h3>
                Machine Learning-Based Detection of AI-Generated Academic Text
              </h3>

              <p>
                Developed an end-to-end machine learning system to distinguish AI-generated and human-written academic submissions using NLP, TF-IDF vectorization, feature engineering, and classification models.
              </p>

              <div className="tech-stack">

                <span>Python</span>
                <span>Scikit-learn</span>
                <span>NLP</span>
                <span>TF-IDF</span>

              </div>

              <div className="project-links">

                <a href="#">View Code →</a>

                <a href="#">Live Demo</a>

              </div>

            </div>

          </div>

          {/* Project 2 */}

          <div className="project-card">

            <div className="project-image">
              <img
                src={forecasting}
                alt="Retail Sales Forecasting Using ARIMA Models"
                />
            </div>

            <div className="project-content">

              <h3>
                Time Series Forecasting
              </h3>

              <p>
               Built ARIMA forecasting models to predict retail sales trends, performing stationarity testing, model evaluation, and forecast visualization.
              </p>

              <div className="tech-stack">

                <span>Python</span>
                <span>Pandas</span>
                <span>ARIMA</span>

              </div>

              <div className="project-links">

                <a href="#">View Code →</a>

              </div>

            </div>

          </div>

          {/* Project 3 */}

          <div className="project-card">

            <div className="project-image">
              <img
                src={nlp}
                alt="Sentiment Classification Using NLP"
                />
            </div>

            <div className="project-content">

              <h3>
                NLP Sentiment Analysis
              </h3>

              <p>
               Designed a sentiment classification pipeline using text preprocessing, TF-IDF feature extraction, and machine learning models for multi-class sentiment prediction.
              </p>

              <div className="tech-stack">

                <span>Python</span>
                <span>NLTK</span>
                <span>Naive Bayes</span>

              </div>

              <div className="project-links">

                <a href="#">View Code →</a>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Projects;