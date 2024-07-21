import { education } from "../constants";
const Education = () => {
  return (
    <div className="bg-dark">
      <div
        className="container row py-3 bg-dark mx-auto text-white"
        id="education"
      >
        <div className="border-bottom border-secondary display-6">
          EDUCATION
        </div>
        {education.map((edu) => (
          <div key={edu.title} className="row">
            <div className="col-sm-12 col-md-8 text-md-start my-2">
              <p className="mb-0">{edu.title}</p>
              <h5 className="my-1">{edu.institude}</h5>
            </div>
            <div className="col-sm-12 col-md-4 d-flex align-items-center justify-content-end" >
              <p>{edu.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
