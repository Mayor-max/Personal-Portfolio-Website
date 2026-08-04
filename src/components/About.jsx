import "../styles/About.css";
import profileImage from "../assets/images/profile.jpg";

function About() {
  return (
    <section id="about" className="about">

      <div className="container">

        <h2 className="section-title">About Me</h2>

        <p className="section-subtitle">
          A Journey from Science to Artificial Intelligence
        </p>

        <div className="about-content">

          <div className="about-image">

            <img
              src={profileImage}
              alt="Elewi Ebenezer Mayowa"
            />

          </div>

          <div className="about-text">

            <p>
              My journey into Data Science began with a strong
              academic foundation in Exercise Physiology,
              where I developed a scientific approach to
              analyzing complex systems, interpreting evidence,
              and solving real-world problems.
            </p>

            <p>
              As I explored programming, machine learning,
              and artificial intelligence, I discovered a
              passion for transforming data into actionable
              insights. Today, I combine scientific thinking,
              analytical problem-solving, and modern AI
              technologies to build intelligent solutions
              that create meaningful impact.
            </p>

            <p>
              I am continuously learning, building projects,
              and collaborating with innovative teams while
              pursuing opportunities in Data Science,
              Machine Learning, and Artificial Intelligence.
            </p>

            <div className="journey">

              <div className="journey-item">
                <span>🎓</span>
                <h4>Exercise Physiology</h4>
              </div>

              <div className="journey-arrow">→</div>

              <div className="journey-item">
                <span>📊</span>
                <h4>Data Science</h4>
              </div>

              <div className="journey-arrow">→</div>

              <div className="journey-item">
                <span>🤖</span>
                <h4>Artificial Intelligence</h4>
             </div>

            </div>

            <div className="quick-facts">

              <div className="fact-card">
                <span>📍</span>
                <h4>Location</h4>
                <p>Ibadan, Nigeria</p>
              </div>

              <div className="fact-card">
                <span>🎓</span>
                <h4>Background</h4>
                <p>Exercise Physiology</p>
              </div>

              <div className="fact-card">
                <span>💼</span>
                <h4>Current Focus</h4>
                <p>Data Science & AI</p>
              </div>

              <div className="fact-card">
                <span>🌍</span>
                <h4>Open To</h4>
                <p>Remote & On-site Opportunities</p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;