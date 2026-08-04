import "../styles/Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">

      <div className="container">

        <div className="footer-content">

          <div className="footer-left">

            <h2>Elewi.</h2>

            <p>
              Building Intelligent Solutions with Data Science,
              Machine Learning, and Artificial Intelligence.
            </p>

          </div>

          <div className="footer-right">

            <a
              href="mailto:elewi.em@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Email
            </a>

            <a
              href="https://www.linkedin.com/in/elewi-ebenzer-mayowa/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/Mayor-max"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

          </div>

        </div>

        <div className="footer-bottom">

          © {year} Elewi Ebenezer Mayowa.
          Built with React + Vite.

        </div>

      </div>

    </footer>
  );
}

export default Footer;