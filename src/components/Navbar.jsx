import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav>
      <div className="container nav-container">

        <div className="logo">
          Elewi.
        </div>

        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;