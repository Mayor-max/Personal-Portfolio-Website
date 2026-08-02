import "../styles/Hero.css";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">

        <motion.div
        className="hero-text"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="hero-greeting">
            Hello, I'm
          </p>

          <h1>
            Elewi Ebenezer Mayowa
          </h1>

          <h2>
            Applying Data Science and Artificial Intelligence
            <br />
            to Solve Real-World Problems
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
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="profile-placeholder">
            Your Photo
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;