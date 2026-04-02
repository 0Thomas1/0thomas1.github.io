import { education } from "../constants";
const Education = () => {
  return (
    <section className="bg-white py-5" id="education">
      <div className="container" style={{ maxWidth: "900px" }}>
        <h2 className="display-6 fw-bold mb-5 text-center text-md-start">
          Education
        </h2>

        <div className="d-flex flex-column">
          {education.map((edu, index) => (
            <div
              key={edu.title}
              className={`py-4 d-flex flex-column flex-md-row justify-content-between align-items-md-start ${
                index !== education.length - 1 ? "border-bottom" : ""
              }`}
            >
              <div>
                <h4 className="fw-bold mb-1">{edu.institution}</h4>
                <p className="text-primary fw-medium mb-0">{edu.title}</p>
              </div>
              <div className="mt-2 mt-md-0 text-muted fw-medium">
                {edu.date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
