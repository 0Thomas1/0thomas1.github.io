export interface InfoProps {
  title: string;
  date: string;
  institution?: string;
}
const Experience = () => {
  const experiences = [
    {
      role: "Computer Science Tutor",
      institution: "Freelance", // Placeholder context
      date: "2024 - Present",
    },
  ];

  return (
    <section className="container py-5" id="experience">
      <div className="mx-auto" style={{ maxWidth: "900px" }}>
        <h2 className="display-6 fw-bold mb-5 text-center text-md-start">
          Experience
        </h2>

        <div className="d-flex flex-column">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`py-4 d-flex flex-column flex-md-row justify-content-between align-items-md-start ${
                index !== experiences.length - 1 ? "border-bottom" : ""
              }`}
            >
              <div>
                <h4 className="fw-bold mb-1">{exp.role}</h4>
                <p className="text-primary fw-medium mb-0">{exp.institution}</p>
              </div>
              <div className="mt-2 mt-md-0 text-muted fw-medium">
                {exp.date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
