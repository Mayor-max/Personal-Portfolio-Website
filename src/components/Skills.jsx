import "../styles/Skills.css";

const skillCategories = [
  {
    title: "🐍 Programming",
    skills: ["Python", "SQL"]
  },
  {
    title: "📊 Data Analysis",
    skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn"]
  },
  {
    title: "🤖 Machine Learning",
    skills: ["Scikit-learn", "TensorFlow", "Natural Language Processing", "Time Series Analysis"]
  },
  {
    title: "🛠️ Tools & Technologies",
    skills: ["Git", "GitHub", "VS Code", "Jupyter Notebook", "BeautifulSoup"]
  }
];

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">

        <h2 className="section-title">
          Technical Skills
        </h2>

        <p className="section-subtitle">
          Technologies and tools I use to build data-driven and AI-powered solutions.
        </p>

        <div className="skills-grid">

          {skillCategories.map((category) => (
            <div className="skill-card" key={category.title}>

              <h3>{category.title}</h3>

              <div className="skill-tags">

                {category.skills.map((skill) => (
                  <span className="skill-tag" key={skill}>
                    {skill}
                  </span>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;