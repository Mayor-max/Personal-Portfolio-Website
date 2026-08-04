import "../styles/Hero.css";
import { motion } from "framer-motion";
import profileImage from "../assets/images/profile.jpg";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">

        <motion.div
          className="hero-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-badge">
          🚀 Open to Data Science & AI Opportunities
          </div>

          <p className="hero-greeting">
              Hello, I'm
          </p>

          <h1>
            Elewi Ebenezer Mayowa
          </h1>

          <div className="hero-info">

            <span>📍 Ibadan, Nigeria</span>

            <span>•</span>

            <span>🎓 Exercise Physiologist</span>

            <span>•</span>

            <span>📊 Data Scientist</span>

            <span>•</span>

            <span>🤖 AI Engineer</span>

          </div>

          <h2>
            Building Intelligent Solutions
           <br />
            with Data Science & Artificial Intelligence
          </h2>

          <p className="hero-description">
            I am an Exercise Physiologist with a growing specialization in
            Data Science and Artificial Intelligence. I enjoy transforming
            data into actionable insights and building intelligent solutions
            that create meaningful impact across industries.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">
              View Projects
            </a>

            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={profileImage}
            alt="Elewi Ebenezer Mayowa"
            className="profile-image"
          />
        </motion.div>

      </div>
      
      <div className="scroll-indicator">
      <span>Scroll to explore</span>

      <div className="mouse">
        <div className="wheel"></div>
      </div>
    </div>

    </section>
  );
}

export default Hero;