import "../styles/Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">

      <div className="container">

        <h2 className="section-title">Let's Build Something Amazing</h2>

        <p className="section-subtitle">
          I'm always open to discussing Data Science, Machine Learning,
          Artificial Intelligence, research collaborations, and exciting opportunities.
        </p>

        <div className="contact-wrapper">

          <div className="contact-info">

            <div className="contact-card">
              <span>📧</span>
              <div>
                <h4>Email</h4>
                <p>elewi.em@gmail.com</p>
              </div>
            </div>

            <div className="contact-card">
              <span>📱</span>
              <div>
                <h4>Phone</h4>
                <p>+234 810 657 9480</p>
              </div>
            </div>

            <div className="contact-card">
              <span>📍</span>
              <div>
                <h4>Location</h4>
                <p>Ibadan, Oyo State, Nigeria</p>
              </div>
            </div>

            <div className="contact-card">
              <span>💼</span>
              <div>
                <h4>Available For</h4>
                <p>
                  Remote Roles • Full-Time (On-site/Hybrid) •
                  Paid Internships • Freelance Projects
                </p>
              </div>
            </div>

          </div>

          <div className="contact-social">

            <h3>Connect With Me</h3>

            <div className="social-buttons">

              <a
                href="mailto:elewi.em@gmail.com"
                className="social-btn"
              >
                📧 Email Me
              </a>

              <a
                href="https://www.linkedin.com/in/elewi-ebenzer-mayowa/"
                target="_blank"
                rel="noreferrer"
                className="social-btn"
              >
                💼 LinkedIn
              </a>

              <a
                href="https://github.com/Mayor-max"
                target="_blank"
                rel="noreferrer"
                className="social-btn"
              >
                💻 GitHub
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;